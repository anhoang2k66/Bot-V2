var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
module.exports.config = {
	name: "admin",
	version: "2.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",//Mod by Ân Hoàng
	description: "Tùy chỉnh các chế độ cho các ADMIN",
	commandCategory: "Hệ Thống",
	usages: "< add/remove | Super Admin & Admin > | < list/only/ibrieng >",
    cooldowns: 2,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": `====「 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗔𝗗𝗠𝗜𝗡 」====\n━━━━━━━━━━━━━━━━━━\n%1\n\n𝗡𝗚𝗨̛𝗢̛̀𝗜 𝗛𝗢̂̃ 𝗧𝗥𝗢̛̣ 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━━\n\n%2`,
        "notHavePermssion": '[ 𝗠𝗢𝗗𝗘 ] → Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '💓=====「 𝗔𝗗𝗗 𝗔𝗗𝗠𝗜𝗡 」=====💓\n━━━━━━━━━━━━━━━━━━━━\n[🧸] → 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━━━━\n%2',
      "addedNewNDH": '[ 𝗠𝗢𝗗𝗘 ] → Đã thêm thành công %1 người dùng trở thành Người Hỗ Trợ\n\n%2',
        "removedAdmin": '[ 𝗠𝗢𝗗𝗘 ] → Đã gỡ thành công vai trò ADMIN BOT %1 người dùng trở lại làm thành viên\n\n%2',
      "removedNDH": '[ 𝗠𝗢𝗗𝗘 ] → Đã gỡ thành công vai trò Người Hỗ Trợ %1 người dùng trở lại làm thành viên\n\n%2'

    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) { 
  const _0x3cf836=_0x5968;(function(_0x3e81f5,_0x212bb5){const _0x51beac=_0x5968,_0x33638b=_0x3e81f5();while(!![]){try{const _0x522f48=parseInt(_0x51beac(0x171))/0x1*(-parseInt(_0x51beac(0x16b))/0x2)+-parseInt(_0x51beac(0x16f))/0x3*(-parseInt(_0x51beac(0x16a))/0x4)+-parseInt(_0x51beac(0x172))/0x5+-parseInt(_0x51beac(0x169))/0x6*(-parseInt(_0x51beac(0x175))/0x7)+parseInt(_0x51beac(0x174))/0x8*(parseInt(_0x51beac(0x16e))/0x9)+-parseInt(_0x51beac(0x170))/0xa+parseInt(_0x51beac(0x173))/0xb;if(_0x522f48===_0x212bb5)break;else _0x33638b['push'](_0x33638b['shift']());}catch(_0x14b56f){_0x33638b['push'](_0x33638b['shift']());}}}(_0x2b90,0x34157));async function streamURL(_0x2c3d2c,_0x3f46d5=_0x3cf836(0x179)){const _0x801a36=_0x3cf836,_0x3e1ff3=__dirname+_0x801a36(0x177)+Date[_0x801a36(0x176)]()+'.'+_0x3f46d5,_0x2e2693=require(_0x801a36(0x16c)),_0x54304c=require(_0x801a36(0x178));return await _0x2e2693['image']({'url':_0x2c3d2c,'dest':_0x3e1ff3}),setTimeout(_0x462c18=>_0x54304c['unlinkSync'](_0x462c18),0x3c*0x3e8,_0x3e1ff3),_0x54304c[_0x801a36(0x16d)](_0x3e1ff3);}function _0x2b90(){const _0x47b1ea=['2522700jpcwdA','61382BpCDvK','1628865aZyjhs','4395556MIgADB','42664SWelQy','631323LQmsDY','now','/cache/','fs-extra','jpg','12vCqVFe','1219556zkqHoV','6VtHBEr','image-downloader','createReadStream','153gEcEte','3wbKsoq'];_0x2b90=function(){return _0x47b1ea;};return _0x2b90();}function _0x5968(_0x16a39a,_0x172ae1){const _0x2b905d=_0x2b90();return _0x5968=function(_0x5968ad,_0x1fcd72){_0x5968ad=_0x5968ad-0x169;let _0x45756b=_0x2b905d[_0x5968ad];return _0x45756b;},_0x5968(_0x16a39a,_0x172ae1);}
  const threadInfo = await api.getThreadInfo(event.threadID)
  console.log(threadInfo)
    const content = args.slice(1, args.length);
    if (args.length == 0) return api.sendMessage({body: `=====『 𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗡𝗙𝗜𝗚 』=====\n━━━━━━━━━━━━━━━━━━\n→ 𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱 => 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗔𝗱𝗺𝗶𝗻\n→ 𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲 => 𝗚𝗼̛̃ 𝘃𝗮𝗶 𝘁𝗿𝗼̀ 𝗮𝗱𝗺𝗶𝗻\n→ 𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱𝗻𝗱𝗵 => 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗛𝗼̂̃ 𝗧𝗿𝗼̛̣\n→ 𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲𝗻𝗱𝗵 => 𝗚𝗼̛̃ 𝘃𝗮𝗶 𝘁𝗿𝗼̀ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗮𝗱𝗺𝗶𝗻 𝗹𝗶𝘀𝘁 => 𝗫𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗮𝗱𝗺𝗶𝗻 𝗾𝘁𝘃𝗼𝗻𝗹𝘆 => 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻\n→ 𝗮𝗱𝗺𝗶𝗻 𝗻𝗱𝗵𝗼𝗻𝗹𝘆 => 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 => 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝘃𝗼̂ 𝗰𝘂̛̣𝗰\n→ 𝗮𝗱𝗺𝗶𝗻 𝗮𝗹𝗹𝗮𝗱𝗼𝗻𝗹𝘆 / 𝗮𝗱𝗺𝗼𝗻𝗹𝘆 => 𝗕𝗮̣̂𝘁 - 𝗧𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻 ( 𝗮𝗹𝗹𝗯𝗼𝘅 𝗵𝗼𝗮̣̆𝗰 1 𝗯𝗼𝘅 )\n→ 𝗮𝗱𝗺𝗶𝗻 𝗮𝗹𝗹𝗼𝗻𝗹𝘆 / 𝗼𝗻𝗹𝘆 => 𝗕𝗮̣̂𝘁 - 𝗧𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝘃𝗼̂ 𝗰𝘂̛̣𝗰 ( 𝗮𝗹𝗹𝗯𝗼𝘅 / 1 𝗯𝗼𝘅 )\n→ 𝗮𝗱𝗺𝗶𝗻 𝗶𝗯𝗿𝗶𝗲𝗻𝗴 => 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗮̂́𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁\n━━━━━━━━━━━━━━━━━━\n𝗛𝗗𝗦𝗗 → ${global.config.PREFIX}𝗔𝗗𝗠𝗜𝗡 𝗹𝗲̣̂𝗻𝗵 𝗰𝗮̂̀𝗻 𝗱𝘂̀𝗻𝗴`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID); 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": { 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
          var i = 1
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`${i++}. 𝗧𝗲̂𝗻: ${name}\n→ 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: m.me/${idAdmin}\n→ 𝗟𝗶𝗻𝗸 𝗙𝗕: https://www.facebook.com/profile.php?id=${idAdmin}`);
                }
            }
          var i = 1
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}. 𝗧𝗲̂𝗻: ${name1}\n→ 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: m.me/${idNDH}\n→ 𝗟𝗶𝗻𝗸 𝗙𝗕: https://www.facebook.com/profile.php?id=${idNDH}`);
                }
            }
            return api.sendMessage({body:`𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗔𝗗𝗠𝗜𝗡
━━━━━━━━━━━━━━━━━━\n\n${msg.join("\n")}\n\n𝗡𝗚𝗨̛𝗢̛̀𝗜 𝗛𝗢̂̃ 𝗧𝗥𝗢̛̣ 𝗕𝗢𝗧\n━━━━━━━━━━━━━━━━━━\n${msg1.join("\n\n")}`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);  
        }

       
        case "add": { 
            if (event.senderID != 100051049144814) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền Admin để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[💞] → 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${event.mentions[id]}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${id}`);
                };
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), attachment: await streamURL(`https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body:getText("addedNewAdmin", 1, `[💞] → 𝗧𝗲̂𝗻 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶: ${name}\n[⚜️] → 𝗖𝗼́ 𝘂𝗶𝗱 𝗹𝗮̀: ${event.senderID}`), attachment: await streamURL(`https://graph.facebook.com/${content[0]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "addndh": { 
          if (event.senderID != 100051049144814) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")),threadID, messageID); 
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", 1, `Người Hỗ trợ  - ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
                  }
                case "removeAdmin":
        case "remove":
        case "delete": {
            if (event.senderID != 100051049144814) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removeAdmin"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
            }

        case "removendh":{
          if (event.senderID != 100051049144814) return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`${id} -${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
  }
        case 'qtvonly': {
       const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
          if (permssion < 1) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền Quản trị viên trở lên để thực hiện lệnh", threadID, messageID);
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Tắt thành công chế độ Quản trị viên cho nhóm này, tất cả thành viên có thể sử dụng Bot", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt thành công chế độ Quản trị viên cho nhóm này, chỉ Quản trị viên nhóm có thể sử dụng Bot", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
   case 'alladmonly':
        case '-aadm': {
            //---> CODE ADMIN ONLY<---//
   if (permssion != 3) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh", threadID, messageID);       
            if (config.alladmOnly == false) {
                config.alladmOnly = true;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt thành công chế độ ADMIN cho tất cả các nhóm, chỉ ADMIN được sử dụng Bot`, threadID, messageID);
            } else {
                config.alladmOnly = false;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Tắt thành công chế độ ADMIN cho tất cả các nhóm, tất cả thành viên có thể sử dụng Bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ndhonly': {
        if (permssion < 2) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN trở lên để thực hiện lệnh", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { admonly } = database;
     if (admonly[threadID] == true) {
            admonly[threadID] = false;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Tắt chế độ Người Hỗ Trợ thành công cho nhóm này, tất cả thành viên có thể sử dụng Bot`, threadID, messageID);
           } else {
            admonly[threadID] = true;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt chế độ Người Hỗ Trợ thành công cho nhóm này, chỉ Người Hỗ Trợ được sử dụng Bot`, threadID, messageID);
            }
                writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        }
        case 'allonly':
        case '-ao': {
            //---> CODE ADMIN ONLY<---//
          if (permssion != 3) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh", threadID, messageID);
            if (config.allspadmOnly == false) {
                config.allspadmOnly = true;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt chế độ vô cực thành công cho tất cả các nhóm, chỉ ADMIN được sử dụng Bot`, threadID, messageID);
            } else {
                config.allspadmOnly = false;
                api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Tắt chế độ vô cực thành công cho tất cả các nhóm, tất cả thành viên có thể sử dụng Bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
          if (permssion != 3) return api.sendMessage("𝗠𝗢𝗗𝗘 - Quyền nồn biên giới ", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`𝗠𝗢𝗗𝗘 - Kích hoạt chế độ vô cực thành công, chỉ Admin được sử dụng Bot`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`𝗠𝗢𝗗𝗘 - Tắt chế độ vô cực thành công, tất cả thành viên có thể sử dụng Bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
      }
        case 'ibrieng':
        case '-ib': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Cần quyền ADMIN để thực hiện lệnh", threadID, messageID);
               if (config.spadmPaseOnly == false) {
                config.spadmPaseOnly = true;
                api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Kích hoạt thành công chế độ chỉ ADMIN mới chat riêng được với Bot", threadID, messageID);
            } else {
                config.spadmPaseOnly = false;
                api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Tắt thành công chế độ chỉ ADMIN mới chat riêng được với Bot", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
  }