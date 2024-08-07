# Project Alert

When using Whaleal to manage a MongoDB cluster, you can configure cluster alerts based on specific metrics. Alerts can be sent to DingTalk, Lark, or to a custom alert platform via Webhook.

## Configuration steps

1. Click **Project** in the left navigation bar of the Whaleal platform
2. Click on the target item
3. There are three types of police alert icons in Group. **DingTalk** and **Lark** configurations require the use of built-in tokens and salts，and **Webhook**.



## Lark

1. Enter a Lark group.

2. Click the three dots in the upper right corner of the group.

     ![image-20240628171055358](../../images/whaleal-platform/09-alert/lark-setting.png)

3. Add a bot

    1. Click Bots

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/bots.png)

    2. Click Add Bot

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/add-bots.png)

    3. Click Custom Bot

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/custom-bot.png)

    4. Edit Bot Name and Description

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/bot-name.png)

    5. Configure the key to use "_" to connect

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/config.png)

    6. Configure the key spliced in step 5 in the Project.

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/lark-key.png)


After the configuration is complete, click Alert Setting in the left navigation bar to configure the alart trigger values and trigger methods of different indicators according to Host Alert, MongoDB Alert or Project.

![image-20240628171055358](../../images/whaleal-platform/09-alert/alart-config.png)

## DingTalk

1. Enter a DingTalk group.

2. Click the three dots in the upper right corner of the group.

       ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-setting.png)

3. Add a bot

    1. Click Bots

         ![Ding](../../images/whaleal-platform/09-alert/ding-bot.png)

    2. Click Add Bot

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-add-bots.png)

    3. Select Custom Bot

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-custom.png)

    4. Edit Bot Name and Security Setting.

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-name.png)

    5. Check the Bot you just created, then copy the access_token after the Webhook link and concatenate it with the value of Additional Signature in Security Setting using "_".

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-key.png)

    6. Configure the key spliced in step 5 in the Project.

         ![image-20240628171055358](../../images/whaleal-platform/09-alert/ding-config.png)



After the configuration is complete, click Alert Setting in the left navigation bar to configure the alart trigger values and trigger methods of different indicators according to Host Alert, MongoDB Alert or Project.

![image-20240628171055358](../../images/whaleal-platform/09-alert/project-alart-config.png)

## WebHook

Webhook configuration configures an alart Post Url, Webhook sends the alart to this Url

