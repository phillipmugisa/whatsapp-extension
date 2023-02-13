from celery.decorators import task
from celery.utils.log import get_task_logger
from app_auth import models as AuthModels

from twilio.rest import Client
import os

logger = get_task_logger(__name__)

@task(name="send_confirmation_code_and_email")
def send_confirmation_code_and_email(user_id, verify_code):
    try:
        logger.info("sending verification code")
        user = AuthModels.User.objects.filter(pk=user_id).first()
        if user is not None:
            account_sid = os.environ.get("TWILIO_AUTH_SID")
            auth_token = os.environ.get("TWILIO_AUTH_TOKEN")
            client = Client(account_sid, auth_token)
            message = client.messages.create(
                body=f"Hello, your verification code is: {verify_code}",
                from_=os.environ.get("TWILIO_NUMBER"),
                to=f"+{user.country_code}{user.phone_number[1:] if user.phone_number[0] == '0' else user.phone_number}"
            )
            logger.info(message)
            logger.info(message.sid)
    except Exception as Err:
        logger.info(Err)
        user.delete()