const text = [
  {
    type: "text",
    text: "สวัสดีค่ะ",
  },
];
const textinput = (input) => [
  {
    type: "text",
    text: input,
  },
];

const map = [
  {
  "type": "location",
  "title": "Jazzy Prettyboi Shop Studio",
  "address": "1693 ถ. พหลโยธิน แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900",
  "latitude": 13.8164444,
  "longitude": 100.5593609
  },
];

const profile = (name, photo) => [
  {
    type: "text",
    text: name,
  },
  {
    type: "image",
    originalContentUrl: photo,
    previewImageUrl: photo,
  },
];
const sticker = [
  {
    type: "sticker",
    packageId: "446",
    stickerId: "1988",
  },
];

const notifyStaffTopic = (name, image, topic) => {
  return {
    message: "\nมีผู้ใช้ชื่อ : " + name + " \nต้องการติดต่อเรื่อง : " + topic,
    imageFullsize: image,
    imageThumbnail: image,
  };
};

const textgold = (date, time, buy, sell) => [
  {
    type: "text",
    text: date,
  },
  {
    type: "text",
    text: time,
  },
  {
    type: "text",
    text: "Buy: " + buy,
  },
  {
    type: "text",
    text: "Sell: " + sell,
  },
];

const flexWeather = (timezone, time, temperature_2m_min, temperature_2m_max) => [
  {
    "type": "flex",
    "altText": "Api สภาพอากาศวันนี้",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "https://linecorp.com"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "action": {
          "type": "uri",
          "uri": "https://linecorp.com"
        },
        "contents": [
          {
            "type": "text",
            "text": timezone,
            "size": "xl",
            "weight": "bold"
          },
          {
            "type": "text",
            "text": time,
            "size": "lg",
            "weight": "regular"
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "อุณหภูมิต่ำสุด",
                    "weight": "bold",
                    "margin": "sm",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": temperature_2m_min,
                    "size": "sm",
                    "align": "end"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "อุณหภูมิสูงสุด",
                    "weight": "bold",
                    "margin": "sm",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": temperature_2m_max,
                    "size": "sm",
                    "align": "end"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "text": "ข้อมูลอ้างอิงจาก Api Weather Forecast API",
            "wrap": true,
            "color": "#aaaaaa",
            "size": "xxs"
          }
        ]
      }
    }
  }
];

const flexgold = (date, time, buy, sell) => [
  {
    "type": "flex",
    "altText": "Gold Price",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "image",
                "url": "https://images.assettype.com/fortuneindia%2F2022-02%2F860be097-302a-4e41-8a7f-f394c7bb4c7d%2FGold_prices.jpg?rect=0,0,967,544&w=1250&q=60",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "150:196",
                "gravity": "center",
                "flex": 1,
                "position": "relative"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "NEW",
                    "size": "xs",
                    "color": "#ffffff",
                    "align": "center",
                    "gravity": "center"
                  }
                ],
                "backgroundColor": "#EC3D44",
                "paddingAll": "2px",
                "paddingStart": "4px",
                "paddingEnd": "4px",
                "flex": 0,
                "position": "absolute",
                "offsetStart": "18px",
                "offsetTop": "18px",
                "cornerRadius": "100px",
                "width": "48px",
                "height": "25px"
              }
            ]
          }
        ],
        "paddingAll": "0px"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "contents": [],
                    "size": "xl",
                    "wrap": true,
                    "text": date,
                    "color": "#ffffff",
                    "weight": "bold"
                  },
                  {
                    "type": "text",
                    "text": time,
                    "color": "#ffffffcc",
                    "size": "sm"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Buy",
                        "margin": "lg",
                        "color": "#FFFFFF",
                        "weight": "bold",
                        "size": "lg"
                      },
                      {
                        "type": "separator"
                      },
                      {
                        "type": "text",
                        "text": buy,
                        "color": "#FFFFFF",
                        "margin": "lg",
                        "weight": "regular",
                        "decoration": "none",
                        "align": "end",
                        "size": "lg"
                      }
                    ]
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Sell",
                        "margin": "lg",
                        "color": "#FFFFFF",
                        "weight": "bold",
                        "align": "start",
                        "size": "lg"
                      },
                      {
                        "type": "separator"
                      },
                      {
                        "type": "text",
                        "text": sell,
                        "color": "#FFFFFF",
                        "margin": "lg",
                        "weight": "regular",
                        "decoration": "none",
                        "align": "end",
                        "size": "lg"
                      }
                    ]
                  }
                ],
                "paddingAll": "13px",
                "backgroundColor": "#ffffff1A",
                "cornerRadius": "2px",
                "margin": "xl"
              }
            ]
          }
        ],
        "paddingAll": "20px",
        "backgroundColor": "#A28713"
      }
    }
  }
];

const flexOil = (date, data) => [
  {
    type: "flex",
    altText: "PTT Oil Price",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "Oil Price",
            weight: "bold",
            color: "#1DB446",
            size: "sm",
          },
          {
            type: "text",
            text: "PTT",
            weight: "bold",
            size: "xxl",
            margin: "md",
            align: "center",
          },
          {
            type: "text",
            text: date,
            size: "xs",
            color: "#aaaaaa",
            wrap: true,
            align: "center",
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "xxl",
            spacing: "sm",
            contents: data,
          },
          {
            type: "separator",
            margin: "xxl",
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    },
  },
];


const image = [
  {
    type: "image",
    originalContentUrl:
      "https://developers.line.biz/media/services/messaging-api-thumb0.png",
    previewImageUrl:
      "https://developers.line.biz/media/services/messaging-api-thumb0.png",
  },
];
const flexinput = (date, station, price) => [
  {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "https://linecorp.com"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "action": {
        "type": "uri",
        "uri": "https://linecorp.com"
      },
      "contents": [
        {
          "type": "text",
          "text": "Brown's Burger",
          "size": "xl",
          "weight": "bold"
        },
        {
          "type": "text",
          "text": "Date",
          "wrap": true,
          "color": "#aaaaaa",
          "size": "xs"
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "$10.5",
                  "weight": "bold",
                  "margin": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "400kcl",
                  "size": "sm",
                  "align": "end"
                }
              ]
            }
          ]
        }
      ]
    }
  }

]
const flex = [
  {
    type: "bubble",
    hero: {
      type: "image",
      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: "http://linecorp.com/",
      },
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Brown Cafe",
          weight: "bold",
          size: "xl",
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
            },
            {
              type: "text",
              text: "4.0",
              size: "sm",
              color: "#999999",
              margin: "md",
              flex: 0,
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Place",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Time",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "10:00 - 23:00",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "CALL",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "WEBSITE",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "box",
          layout: "vertical",
          contents: [],
          margin: "sm",
        },
      ],
      flex: 0,
    },
  },
];

module.exports = { 
  text, 
  sticker, 
  image, 
  flex, 
  textinput, 
  map, 
  profile, 
  flexinput, 
  notifyStaffTopic,
  flexgold,
  flexWeather,
  flexOil
};
