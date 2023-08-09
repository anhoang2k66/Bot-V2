module.exports.config = {
    name: "yeutran",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Anhoang",
    description: "hê",
    commandCategory: "Hệ thống",
    cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`YÊU TRÂN CON CẶC BỐ MẸ Ở NHÀ CÒNG LƯNG NUÔI ĐI HỌC, CON VỚI CHẢ CÁI MẤT DẠY VÃI LỒN =))`, event.threadID, event.messageID);