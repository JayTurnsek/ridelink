# Generated by Django 4.1.6 on 2023-03-07 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_passenger_destination_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='userId',
            field=models.CharField(max_length=25),
        ),
    ]
