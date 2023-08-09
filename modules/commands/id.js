module.exports.config = {
	name: "id",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Thành viên",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	var callback = () =>   api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n𝗜𝗗: ${uid}\n𝗜𝗕: m.me/${uid}\n𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/${uid}\n━━━━━━━━━━━━━━━━━━\n➝ 𝐍𝐠𝐮̛𝐨̛̀𝐢 Đ𝐢𝐞̂̀𝐮 𝐇𝐚̀𝐧𝐡 𝐁𝐨𝐭: 𝐁𝐎𝐓-𝐍𝐓𝐓-𝐕𝐍`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
        var callback = () =>  api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n𝗜𝗗: ${event.senderID}\n𝗜𝗕: m.me/${event.senderID}\n𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━\n➝ 𝐍𝐠𝐮̛𝐨̛̀𝐢 Đ𝐢𝐞̂̀𝐮 𝐇𝐚̀𝐧𝐡 𝐁𝐨𝐭: 𝐁𝐎𝐓-𝐍𝐓𝐓-𝐕𝐍`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
    var data = await api.getUserInfoV2(res_ID);
    var name = data.first_name
    var link = data.link
    var callback = () => api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n𝗜𝗗: ${res_ID}\n𝗜𝗕: m.me/${res_ID}\n𝗟𝗶𝗻𝗸 𝗳𝗯: ${link}\n━━━━━━━━━━━━━━━━━━\n➝ 𝐍𝐠𝐮̛𝐨̛̀𝐢 Đ𝐢𝐞̂̀𝐮 𝐇𝐚̀𝐧𝐡 𝐁𝐨𝐭: 𝐁𝐎𝐓-𝐍𝐓𝐓-𝐕𝐍`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
	else {
		if (args.join().indexOf('@') !== -1) var uid = Object.keys(event.mentions) 
      var callback = () => 
api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n𝗜𝗗: ${event.senderID}\N𝗜𝗕: m.me/${event.senderID}\n𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━\n➝ 𝐍𝐠𝐮̛𝐨̛̀𝐢 Đ𝐢𝐞̂̀𝐮 𝐇𝐚̀𝐧𝐡 𝐁𝐨𝐭: 𝐁𝐎𝐓-𝐍𝐓𝐓-𝐕𝐍`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
               
	}
}
}