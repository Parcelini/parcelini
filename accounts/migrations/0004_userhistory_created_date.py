# Generated by Django 3.2.4 on 2022-04-13 04:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_userhistory'),
    ]

    operations = [
        migrations.AddField(
            model_name='userhistory',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
    ]
