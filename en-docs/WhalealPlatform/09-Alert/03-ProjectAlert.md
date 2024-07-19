# Project Alert

When using Whaleal to manage a MongoDB cluster, you can configure cluster alerts based on specific metrics. Alerts can be sent to DingTalk, Lark, or to a custom alert platform via Webhook.

## Configuration steps

1. Click **Project** in the left navigation bar of the Whaleal platform
2. Click on the target item
3. There are three types of police alert icons in Group. **DingTalk** and **Lark** configurations require the use of built-in tokens and salts，and **Webhook**.



## Lark

1. Enter a Lark group.

2. Click the three dots in the upper right corner of the group.

   ![image-20240628171055358](../images/09-Alert/larkSetting.png)

3. Add a bot

   1. Click Bots

      ![image-20240628171055358](../images/09-Alert/Bots.png)

   2. Click Add Bot

      ![image-20240628171055358](../images/09-Alert/AddBots.png)

   3. Click Custom Bot

      ![image-20240628171055358](../images/09-Alert/CustomBot.png)

   4. Edit Bot Name and Description

      ![image-20240628171055358](../images/09-Alert/BotName.png)

   5. Configure the key to use "_" to connect

      ![image-20240628171055358](../images/09-Alert/Config.png)

   6. Configure the key spliced in step 5 in the Project.

      ![image-20240628171055358](../images/09-Alert/LarkKey.png)



After the configuration is complete, click Alert Setting in the left navigation bar to configure the alart trigger values and trigger methods of different indicators according to Host Alert, MongoDB Alert or Project.

![image-20240628171055358](../images/09-Alert/AlartConfig.png)

## DingTalk

1. Enter a DingTalk group.

2. Click the three dots in the upper right corner of the group.

   ![image-20240628171055358](../images/09-Alert/DingSetting.png)

3. Add a bot

   1. Click Bots

      ![Ding](../images/09-Alert/DingBot.png)

   2. Click Add Bot

      ![image-20240628171055358](../images/09-Alert/DingAddBots.png)

   3. Select Custom Bot

      ![image-20240628171055358](../images/09-Alert/DingCustom.png)

   4. Edit Bot Name and Security Setting.

      ![image-20240628171055358](../images/09-Alert/Dingname.png)

   5. Check the Bot you just created, then copy the access_token after the Webhook link and concatenate it with the value of Additional Signature in Security Setting using "_".

      ![image-20240628171055358](../images/09-Alert/DingKey.png)

   6. Configure the key spliced in step 5 in the Project.

      ![image-20240628171055358](../images/09-Alert/DingConfig.png)



After the configuration is complete, click Alert Setting in the left navigation bar to configure the alart trigger values and trigger methods of different indicators according to Host Alert, MongoDB Alert or Project.

![image-20240628171055358](../images/09-Alert/ProjectAlartConfig.png)

## WebHook

Webhook configuration configures an alart Post Url, Webhook sends the alart to this Url

