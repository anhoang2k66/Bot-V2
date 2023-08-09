module.exports.config = {
  name: "qrs",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa x Nam",
  description: "Đọc qrcode",
  commandCategory: "Hệ thống",
  usages: "reply ảnh qrcode",
  cooldowns: 0,
  dependencies: {
    "jimp": "",
    "qrcode-reader": "",
    "image-downloader": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const fs = require('fs');
  const jimp = require('jimp');
  const QrCode = require('qrcode-reader');
  const path = __dirname + "/cache/qrcode.png";

  const { threadID, messageID, type, messageReply } = event;
  if (type != "message_reply" || messageReply.attachments.length > 1) return api.sendMessage("» 𝐁𝐚̣𝐧 𝐩𝐡𝐚̉𝐢 𝐫𝐞𝐩𝐥𝐲 𝐚̉𝐧𝐡 𝐪𝐫𝐜𝐨𝐝𝐞 𝐜𝐚̂̀𝐧 𝐪𝐮𝐞́𝐭!", threadID, messageID);

  if (messageReply.attachments[0].type == 'photo') {
    await require("image-downloader").image({ url: messageReply.attachments[0].url, dest: path })
    const img = await jimp.read(fs.readFileSync(path));
    const qr = new QrCode();
    const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });
    return api.sendMessage(`${value.result}`, threadID, messageID);
  }
  return api.sendMessage("» Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢!", threadID, messageID);
}