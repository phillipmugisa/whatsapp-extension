from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
import datetime
import uuid

def get_file_path(instance, filename):
    ext = filename.split(".")[-1]
    # filename = "%s-%s.%s" % (instance.slug, uuid.uuid4(), ext)
    filename = f"{instance.slug}-{uuid.uuid4()}"[:50] + f".{ext}"
    return os.path.join(f"{instance.__class__.__name__}/images/", filename)

class Templates(models.Model):
    name = models.CharField(_("Name"), max_length=256, blank=False, null=False)
    message = models.TextField(_("message"))
    file_name = models.FileField(
        verbose_name=_("Image"),
        upload_to=get_file_path,
        blank=True, null=True
    )
    created_on = models.DateField(_("Created on"), default=timezone.now)
    slug = models.SlugField(
        _("Safe Url"), unique=True, blank=True, null=True, max_length=200
    )

    def save(self, *args, **kwargs):
        self.slug = slugify(f"{self.name}{uuid.uuid4()}")[:200]

        self.name = self.name

        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f"{self.name}"