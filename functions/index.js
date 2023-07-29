const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const { WebhookClient } = require("dialogflow-fulfillment");

admin.initializeApp();

// remind to npm install axios

const template = require("./template");
const util = require("./util");

exports.myWebhook = functions.https.onRequest(async (request, response) => {
  functions.logger.info(request.body.events, { structuredData: true });
  if (request.body.events === undefined) {
    functions.logger.info(request.body.events, { structuredData: true });
    return response.status(200).send("Request from Browser");
  } else {
    if (request.method === "POST") {
      const event = request.body.events[0];
      // console.log("Event:" + JSON.stringify(event));
      let profile = await util.getUserProfile(event.source.userId);
      console.log("Profile:" + JSON.stringify(profile));

      if (event === undefined) {
        return response.status(200).send("Request from LINE OA Manager");
      } else if (event.type === "message" && event.message.type === "text") {
        if (event.message.text == "Hello") {
          await util.reply(event.replyToken, template.text);
        } else if (event.message.text == "Map") {
          await util.reply(event.replyToken, template.map);
        // } else if (event.message.text == "Hi") {
        //   await util.reply(event.replyToken, template.textinput("หวัดดีฮับ ฟู้ววววว ฮ่าฮ่าฮ่า"));
        } else if (event.message.text == "weather") {
          let result = await util.getWeather();
          let weather = result.data;

          await util.reply(
            event.replyToken,
            template.flexWeather(
              weather.timezone,
              weather.daily.time[0],
              weather.daily.temperature_2m_min[0] + weather.daily_units.temperature_2m_min,
              weather.daily.temperature_2m_max[0] + weather.daily_units.temperature_2m_max
            )
          );
        
        } else if (event.message.text == "oil") {
          let result = await util.getOilPrice();
          console.log (
            "Result Oil Price" + JSON.stringify(result.data.response)
          );
          let oilPrice = result.data.response;

          let date = oilPrice.date;

          let ptt = oilPrice.stations.ptt;
          console.log("Oil Price" + JSON.stringify(ptt));

          let data = [];
          let obj = {};

          for (const [key, value] of Object.entries(ptt)) {
            // console.log(`${key}: ${value}`);
            // console.log("Key: " + key + " ");
            // console.log(value.name + " " + value.price);
            obj = {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: value.name,
                  size: "sm",
                  color: "#555555",
                  flex: 0,
                },
                {
                  type: "text",
                  text: value.price,
                  size: "sm",
                  color: "#111111",
                  align: "end",
                },
              ],
            };
            data.push(obj);
          }
          await util.reply(event.replyToken, template.flexOil(date, data));
          
          
        } if (event.message.text == "ยืนยันคำสั่งซื้อ") {
          await util.reply(event.replyToken, template.textinput("กรุณารอสักครู่ ทางร้านกำลังติดต่อแอดมินเพื่อแจ้งยอดชำระทั้งหมด"));
          // setTimeout( async () => {
          //   await util.reply(event.replyToken, template.image);
          // }, 8000);
          
          
      
          await util.notify(
            template.notifyStaffTopic(
              profile.displayName,
              profile.pictureUrl,
              "มีแจ้งเตือนคำสั่งซื้อ"
            )
          );

        } else {
          console.log("Send to Dialogflow");
          await util.postToDialogflow(request);
        }
      } else if (event.type === "message" && event.message.type === "sticker") {
        await util.reply(event.replyToken, template.sticker);
      } else if (event.type === "message" && event.message.type === "image") {
        await util.reply(event.replyToken, template.image);
      } else {
        await util.reply(event.replyToken, template.flex);
      }
      // return res.status(200).send(request.method);
    } else {
      return response.status(200).send(request.method);
    }
  }

  response.end();
});

exports.notifywebhook = functions.https.onRequest(async (request, response) => {
  console.log(
    request.body.originalDetectIntentRequest.payload.data.source.userId
  );
  
  const agent = new WebhookClient({request: request});
  console.log("Query " + agent.query);

  const replyToken =
    request.body.originalDetectIntentRequest.payload.data.replyToken;

  let profile = await util.getUserProfile(
    request.body.originalDetectIntentRequest.payload.data.source.userId
  );

  await util.notify(
    template.notifyStaffTopic(
      profile.displayName,
      profile.pictureUrl,
      agent.query
    )
  );

  response.end();
});
