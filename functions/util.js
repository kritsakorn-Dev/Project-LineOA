const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
let qs = require("qs");

const CHANNEL_ACCESS_TOKEN =
  "n/b7pH/QxD6XT2wVt5roq1+Zsv/tRW2UCWtgnlQ9tT4URIEvCg/SOkpQwANHyKebmKgdOVs2R0zXCqpulRyeKKkarXx97RSMds87txa/PDDJI3GVHwO4nhlskbjabK4Pn+8BQeStxmfBA2q+Lqpg9wdB04t89/1O/w1cDnyilFU=";

const LINE_MESSAGING_API = "https://api.line.me/v2/bot";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
};

class Utils {
  async getUserProfile(userId) {
    try {
      const profile = await axios({
        method: "get",
        url: `${LINE_MESSAGING_API}/profile/${userId}`,
        headers: LINE_HEADER,
      });
      return profile.data;
    } catch (error) {
      functions.logger.error("Utils-getUserProfile", error.message);
      return null;
    }
  }

  async reply(token, payload) {
    try {
      await axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/message/reply`,
        headers: LINE_HEADER,
        data: {
          replyToken: token,
          messages: payload,
        },
      });
      return true;
    } catch (error) {
      functions.logger.error("Utils-reply", error.message);
      return false;
    }
  }

  async postToDialogflow(request) {
    request.headers.host = "dialogflow.cloud.google.com";
    try {
      await axios({
        method: "post",
        //  url: `https://bots.dialogflow.com/line/e4b3b4d3-b1ab-42e4-967c-b107ccb05413/webhook`,
        url: `https://dialogflow.cloud.google.com/v1/integrations/line/webhook/8278885f-015e-4a99-bf0f-be426df25d23`,
        headers: request.headers,
        data: JSON.stringify(request.body),
      });
      return true;
    } catch (error) {
      functions.logger.error("Post-to-Dialogflow", error.message);
      return false;
    }
  }

  async richMenuLink(userId) {
    // 10. Fill in your RICH MENU ID
    const RICH_MENU_ID = "";
    try {
      await axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/user/${userId}/richmenu/${RICH_MENU_ID}`,
        headers: LINE_HEADER,
      });
      return true;
    } catch (error) {
      functions.logger.error("Utils-richMenuLink", error.message);
      return false;
    }
  }

  async getGoldPrice() {
    try {
      let result = await axios({
        method: "get",
        url: `https://api.chnwt.dev/thai-gold-api/latest`,
      });
      return result;
    } catch (error) {
      functions.logger.error("Utils-richMenuLink", error.message);
      return false;
    }
  }

  async getOilPrice() {
    try {
      let result = await axios({
        method: "get",
        url: `https://api.chnwt.dev/thai-oil-api/latest`,
      });
      return result;
    } catch (error) {
      functions.logger.error("Utils-richMenuLink", error.message);
      return false;
    }
  }

  async getWeather() {
    try {
      let result = await axios({
        method: "get",
        url: `https://api.open-meteo.com/v1/forecast?latitude=13.7658&longitude=100.5388&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Asia%2FBangkok&forecast_days=1`,
      });
      return result;
    } catch (error) {
      functions.logger.error("Utils-richMenuLink", error.message);
      return false;
    }
  }

  async notify(payload) {
    console.log(payload);
    let data = qs.stringify(payload);
    console.log(data);
    try {
      await axios({
        method: "post",
        url: `https://notify-api.line.me/api/notify`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer WxCAemrBFUVh2mc02AZWRGr9GzFnsGTTZFn3x3Z1SyF",
        },
        data: data,
      });
      return true;
    } catch (error) {
      functions.logger.error("Utils-Notify", error.message);
      return false;
    }
  }
}

module.exports = new Utils();