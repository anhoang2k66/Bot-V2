module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 1,
	credits: "Henry",
	description: "Bật hoặc tắt chế độ busy",
  usages: "[lí do]",
  commandCategory: "Thành viên",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - Chào mừng ní quay trở lại 🥰`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("🎀─── [𝐁𝐀́𝐎 • 𝐂𝐀́𝐎] ───🎀\n\n[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - Trong lúc chủ nhân vắng mặt đéo ma nào tag cả❤️\n\n🎀───── •🌸• ─────🎀", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - Dưới đây là danh sách những người tag tên chủ nhân nè: 🎀:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "Vừa tag tên chủ nhân" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`🎀───[𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎]───🎀\n\n${name.replace("@", "")} rất bận ${infoBusy.lido ? `với lý do: ${infoBusy.lido}. Ní quay lại sau nha:3\n\n🎀───── •🌸• ─────🎀` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        var msg = (content.length == 0) ? '[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - 𝐂𝐮𝐧𝐠 𝐜𝐡𝐮̉ 𝐯𝐮̛̀𝐚 𝐛𝐚̣̂𝐭 𝐦𝐨𝐝𝐞 𝐛𝐚̣̂𝐧 𝐦𝐚̀ 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐥𝐢́ 𝐝𝐨 🐧' : `[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - 𝐂𝐮𝐧𝐠 𝐜𝐡𝐮̉ 𝐯𝐮̛̀𝐚 𝐛𝐚̣̂𝐭 𝐦𝐨𝐝𝐞 𝐛𝐚̣̂𝐧 𝐯𝐨̛́𝐢 𝐥𝐢́ 𝐝𝐨 🐧: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
}