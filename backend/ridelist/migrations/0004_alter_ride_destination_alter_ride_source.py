# Generated by Django 4.0.4 on 2023-02-22 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ridelist', '0003_alter_ride_name_alter_ride_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='destination',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='ride',
            name='source',
            field=models.CharField(max_length=15),
        ),
    ]
