FROM python:3.10-slim
ENV PYTHONUNBUFFERED=1

# set the working directory
WORKDIR /code/

# install dependencies
COPY ./code/requirements.txt ./
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# copy the src to the folder
COPY ./code/* ./

# start the server
CMD ["python", "./code/manage.py", "runserver", "0.0.0.0:8000"]
