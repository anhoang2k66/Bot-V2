module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[ 𝐁𝐎𝐓 𝐂𝐔𝐓𝐄 ] - 𝗔𝗿𝗮 𝗔𝗿𝗮 😖𝗩𝗼̛̣ 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝘀𝗲𝘁 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̣𝗶 𝗻𝗵𝗲 𝗰𝗵𝗼̂̀𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝗵𝗼̛̀ 𝘁𝗶́ 𝗻𝗵𝗲́ ☢️",event.threadID, () =>process.exit(1))