module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "join");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "join", "rd");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users  }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname (`[ ${global.config.PREFIX} ]➺ ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("━━━━━━━━━━━━━━━━━\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐁𝐨𝐱 ◄\n━━━━━━━━━━━━━━━━━\n➝ [🐧] 𝐇𝐢 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 🌸𝑲𝒂𝒊𝒚𝒐 𝒔𝒂𝒅𝒃𝒐𝒚🎭  \n➝ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐥𝐚̀: /\n➝ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐭𝐫𝐞̂𝐧 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 🌸𝑲𝒂𝒊𝒚𝒐 𝒔𝒂𝒅𝒃𝒐𝒚🎭  đ𝐚𝐠 𝐜𝐨́ hơn 200 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 \n [🎀] 𝐕𝐮𝐢 Lòng 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭 , 𝐒𝐩𝐚𝐦 , 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭\n→ [🎊] 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 .𝐡𝐞𝐥𝐩 , /𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐂𝐚́𝐜 𝐋𝐞̣̂𝐧𝐡 𝐓𝐫𝐨𝐧𝐠 𝐁𝐨𝐭\n➝ [📺] 𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐚̀𝐢 𝐁𝐨𝐭 𝐕𝐯 , 𝐕𝐚̀ 𝐂𝐨́ 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐓𝐨̂́𝐭 𝐋𝐚̀𝐧𝐡\n━━━━━━━━━━━━━━━━━\n➝ [🌐] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧: fb.com/100051049144814 \n\n➝ [🎀] 𝐙𝐚𝐥𝐨 𝐀𝐝𝐦𝐢𝐧: 0377916975\n━━━━━━━━━━━━━━━━━",  event.threadID, () => api.sendMessage({body:'🌐 𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐝𝐞̂́𝐧 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠!.\n🎊 𝐇𝐚̃𝐲 𝐛𝐚̆́𝐭 đ𝐚̂̀𝐮 𝐝𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐡𝐮̛̃𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐝𝐮̛𝐨̛́𝐢 đ𝐚̂𝐲 đ𝐞̂̉ 𝐥𝐚̀𝐦 𝐪𝐮𝐞𝐧 𝐧𝐡𝐞́ !\n༒───────⑄───────༒\n👉 .𝐡𝐞𝐥𝐩 (𝕏𝕖𝕞 𝕕𝕒𝕟𝕙 𝕤𝕒́𝕔𝕙 𝕥𝕠𝕒̀𝕟 𝕓𝕠̣̂ 𝕝𝕖̣̂𝕟𝕙)\n✕═══════〄═══════✕\n💥 𝐃𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐜𝐡𝐚̣̂𝐦 𝐭𝐡𝐨̂𝐢 𝐧𝐡𝐚' , attachment: fs.createReadStream(__dirname + "/cache/bot/video.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s || (dddd)");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

				var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "‎➝ [🎊] 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝗯𝗮̣𝗻 {name} 𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 {threadName}\n━━━━━━━━━━━━━━━━━━━\n➝ [🌐] 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : https://www.facebook.com/{iduser}\n➝ [👤] 𝗕𝗮̣𝗻 𝗹𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺\n➝ [🎀] 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author}\n➝ [🌐] 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : https://www.facebook.com/{idauthor}\n━━━━━━━━━━━━━━━━━━━\n➝ [⏰] 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: {time} || 𝗯𝘂𝗼̂̉𝗶 {session}\n➝ 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐫𝐚 đ𝐚̉𝐨 𝐨̛̉ 🍀" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
         .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝗰𝗮́𝗰 𝗯𝗮̣𝗻': '𝗯𝗮̣𝗻')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
         .replace(/\{author}/g, nameAuthor)
         .replace(/\{idauthor}/g, event.author)
			.replace(/\{threadName}/g, threadName)
      .replace(/\{session}/g, hours <= 10 ? "𝘀𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝘁𝗿𝘂̛𝗮" :
    hours > 12 && hours <= 18 ? "𝗰𝗵𝗶𝗲̂̀𝘂" : "𝘁𝗼̂́𝗶 ")
    .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "join", "rd"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "join", "rd", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
