# Generated by Django 4.0.4 on 2023-02-23 17:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ridelist', '0006_remove_ride_user_ride_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='userId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
