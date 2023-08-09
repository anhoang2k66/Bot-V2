const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "aiimg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NLam182",
  description: "",
  commandCategory: "Công cụ",
  usages: "aiimg <mô tả về ảnh>",
  cooldowns: 0
};
var key = "lamgicokey";
module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;

  const prompt = args.join(' ');
  if (!prompt) {
    return api.sendMessage("Bạn cần nhập mô tả để tạo ảnh!", event.threadID);
  }

  api.sendMessage(`[ AI TẠO ẢNH ]\nNội dung vẽ: ${prompt}`, threadID, messageID);
  const apiUrl = `https://api.zeidbot.site/trunggian?mota=${encodeURIComponent(prompt)}&key=${key}`;

  try {
    const response = await axios.get(apiUrl);
    const imgurLink = response.data.imgurLink;

    const imageResponse = await axios.get(imgurLink, { responseType: 'arraybuffer' });
    const imageData = imageResponse.data;

    const cachePath = path.join(__dirname, `../../cache/aiimg.jpg`);

    // Ghi dữ liệu ảnh vào tệp tin
    fs.writeFileSync(cachePath, imageData);

    const message = {
      body: `[ AI TẠO ẢNH ]\nNội dung: ${prompt} `,
      attachment: fs.createReadStream(cachePath)
    };

    await api.sendMessage(message, event.threadID);

    fs.unlinkSync(cachePath); // Xóa tệp tin sau khi gửi
  } catch (error) {
    console.error(error);
    api.sendMessage("Đã xảy ra lỗi khi tạo ảnh, hoặc key không đúng.\nLiên hệ m.me/ngyn.lm.05 để nhận key mới!", event.threadID);
  }
};