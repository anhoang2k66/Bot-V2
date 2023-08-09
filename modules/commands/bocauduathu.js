let axios = require('axios')
let fs = require('fs')
let cc = require('moment-timezone')
module.exports.config = {
  name: "bocauduathu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TrúcCute",
  description: "không biết",
  commandCategory: "Thành viên",
  usages: "/bocauduathu id nội dung",
  cooldowns: 5,
  dependencies: {
    "fs": "",
    "axios": "",
    "moment-timezone": ""
  }
}


let gio = cc.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss - DD/MM/YYYY')

module.exports.run = async ({ api, event, handleReply, Users, args }) => {
  let { threadID, messageID, senderID, type, messageReply } = event;
  let name = await Users.getNameUser(senderID)
  let threadInfo = await api.getThreadInfo(args[0])
  let NameText = threadInfo.threadName || await Users.getNameUser(args[0])
  let lydo = args.splice(1).join(" ")
  const $_id = args[0].includes('facebook.com')?await api.getUID(args[0]):args[0];
  if (type == "message_reply") {
    if (messageReply.attachments[0].type == "audio") {
      path = __dirname + `/cache/snoti.m4a` ||  __dirname + `/cache/snoti.mp3`
    }
    if (messageReply.attachments[0].type == "photo") {
      path = __dirname + `/cache/snoti.jpg`
    }
    if (messageReply.attachments[0].type == "video") {
      path = __dirname + `/cache/snoti.mp4`
    }
    if (messageReply.attachments[0].type == "animated_image") {
      path = __dirname + `/cache/snoti.gif`
    }
    let abc = messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, {
      responseType: 'arraybuffer'
    })).data
    fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
    api.sendMessage({body: `🕊️📬[ Bồ câu đưa thư ]🕊️📬
\n📩Nội dung : ${lydo}\nThời gian : ${gio}\n💌Trả lời tin nhắn này để trò chuyện với người gửi`, attachment: fs.createReadStream(path)}, $_id, (e, info) => {
      global.client.handleReply.push({
        type: "callad",
        name: this.config.name,
        author: threadID,
        ID: messageID,
        messageID: info.messageID
      })
    })
    api.sendMessage(`Đã gửi thành công tin nhắn đến ${NameText}`, threadID)
  } else {
    api.sendMessage({body: `🕊️📬[ Bồ câu đưa thư ]🕊️📬
\nNguời gửi :${name}\n📩Nội dung : ${lydo}\nThời gian : ${gio}\n💌Trả lời tin nhắn này để trò chuyện với người gửi`}, $_id, (e, info) => {
      global.client.handleReply.push({
        type: "callad",
        name: this.config.name,
        author: threadID,
        ID: messageID,
        messageID: info.messageID
      })
    })
    api.sendMessage(`🕊️📬Bồ câu đã đưa thư thành công\nNgười nhận : ${NameText}\nThời gian nhận : ${gio}`, threadID)
  }
}

module.exports.handleReply = async ({ api, event, handleReply, Users }) => {
  let { body, threadID, senderID, messageID } = event;
  let index = body.split(" ")
  let gio = cc.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss")
  let threadInfo = await api.getThreadInfo(threadID)
  let threadName = threadInfo.threadName || await Users.getNameUser(senderID)
  switch(handleReply.type) {
    case "callad": {
      let name = await Users.getNameUser(senderID)
      if (event.attachments.length != 0) {
        if (event.attachments[0].type == "audio") {
    path = __dirname + `/cache/snoti.m4a` ||  __dirname + `/cache/snoti.mp3`
  }
  if (event.attachments[0].type == "photo") {
    path = __dirname + `/cache/snoti.jpg`
  }
  if (event.attachments[0].type == "video") {
    path = __dirname + `/cache/snoti.mp4`
  }
  if (event.attachments[0].type == "animated_image") {
    path = __dirname + `/cache/snoti.gif`
  }
        let abc = event.attachments[0].url;
  let getdata = (await axios.get(`${abc}`, {
    responseType: 'arraybuffer'
  })).data
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
        api.sendMessage({body: `Gửi từ nhóm: ${threadName}\nUserName: ${name}\nNội dung: ${index.join(" ")}\nLúc: ${gio}`, attachment: fs.createReadStream(path)}, handleReply.author, (e, info) => {
          global.client.handleReply.push({
                type: "callad",
                name: this.config.name,
                author: threadID,
                ID: messageID,
                messageID: info.messageID
          })
        }, handleReply.ID)
      } else if (index.length != 0) {
        api.sendMessage({body: `Gửi từ: ${threadName}\nUserName: ${name}\nNội dung: ${index.join(" ")}\nLúc: ${gio}`}, handleReply.author, (e, info) => {
          global.client.handleReply.push({
                type: "callad",
                name: this.config.name,
                author: threadID,
                ID: messageID,
                messageID: info.messageID
          })
        }, handleReply.ID)
      }
    }
  }
}