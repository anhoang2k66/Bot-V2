/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "cave",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang Nguyễn edit mod, Code working của diện
    description: "Làm Cave Phiên Bản Vip",
    commandCategory: "Thành viên",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.png")) request("https://i.imgur.com/uBNUZDI.jpg").pipe(fs.createWriteStream(dirMaterial + "cave.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("𝐀𝐢 𝐥𝐚̀𝐦 𝐜𝐚𝐯𝐞 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐧𝐚̂́𝐲 𝐧𝐡𝐚̣̂𝐧, 𝐚𝐢 𝐦𝐮̛𝐨̛̣𝐧 𝐧𝐡𝐚̣̂𝐧 𝐝𝐮̀𝐦, 𝐛𝐨̛́𝐭 𝐭𝐚̀ 𝐥𝐚𝐧𝐡 𝐞𝐦 𝐭𝐨̛̀ 𝐥𝐢𝐧𝐡 𝐢𝐢𝐢 😼", e.threadID, e.messageID)

var cave1 = Math.floor(Math.random() * 10000) + 100; 
var cave2 = Math.floor(Math.random() * 17000) + 300; 
var cave3 = Math.floor(Math.random() * 30000) + 400; 
var cave4 = Math.floor(Math.random() * 20000) + 80; 
var cave5 = Math.floor(Math.random() * 50000) + 200; 
var cave6 = Math.floor(Math.random() * 40000) + 50; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave1}$ 𝐊𝐡𝐢 𝐁𝐮𝐬𝐜𝐮 𝐀𝐧𝐡 𝐓𝐚̂𝐲 𝐎𝐯𝐞𝐫 𝐍𝐢𝐠𝐡𝐭 🌸` ;
                await Currencies.increaseMoney(e.senderID, parseInt(cave1)); 
                break;             
                case "2": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave2}$ 𝐊𝐡𝐢 𝐃𝐨𝐠𝐠𝐲 𝐂𝐚̉ 𝐍𝐠𝐚̀𝐲 𝐕𝐨̛́𝐢 𝐂𝐚̣̂𝐮 𝐇𝐨̣𝐜 𝐒𝐢𝐧𝐡 🙈`; 
                await Currencies.increaseMoney(e.senderID, parseInt(cave2)); 
                break;
                case "3": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave3}$ 𝐊𝐡𝐢 𝟔𝟗 𝐓𝐮̛ 𝐓𝐡𝐞̂́ 𝐕𝐨̛́𝐢 𝐍𝐲𝐜 🍑`; 
                await Currencies.increaseMoney(e.senderID, parseInt(cave3)); 
                break;
                case "4": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave4}$ 𝐊𝐡𝐢 𝐂𝐡𝐢̣𝐜𝐡 𝐍𝐡𝐚𝐮 𝐕𝐨̛́𝐢 𝟑 𝐎̂𝐧𝐠 𝐆𝐢𝐚̀ 😽`; 
                await Currencies.increaseMoney(e.senderID, parseInt(cave4)); 
                break;
                case "5": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave5}$ 𝐊𝐡𝐢 𝐒𝐨́𝐜 𝐋𝐨̣ 𝐂𝐡𝐨 𝐀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐀𝐧 🌚`; 
                await Currencies.increaseMoney(e.senderID, parseInt(cave5)); 
                break;
                case "6": msg = `𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐍𝐡𝐚̣̂𝐧 ${cave6}$ 𝐊𝐡𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂ 𝐕𝐨̛́𝐢 𝐓𝐡𝐚𝐧𝐡 𝐍𝐢𝐞̂𝐧 𝐃𝐢́𝐧𝐡 𝐇𝐈𝐕 🎀`; 
                await Currencies.increaseMoney(e.senderID, parseInt(cave6)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("🎋 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("🎋 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.cavevip = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.cavevip) > 0) {

        var time = cooldown - (Date.now() - data.cavevip),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐏𝐡𝐢̣𝐜𝐡 𝐑𝐨̂̀𝐢 𝐓𝐫𝐚́𝐧𝐡 𝐁𝐢̣ 𝐍𝐚́𝐭 𝐂𝐚́𝐢 𝐋𝐨̂̀𝐧, 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐐𝐮𝐚𝐲 𝐋𝐚̣𝐢 𝐒𝐚𝐮 𝐍𝐠𝐚̀𝐲 𝐌𝐚𝐢`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🏮===𝐏𝐇𝐎̂́ 𝐇𝐎𝐀 𝐊𝐈𝐄̂̀𝐔===🏮" +
                "\n\n𝟏. 𝐏𝐡𝐨̂́ 𝐓𝐫𝐚̂̀𝐧 𝐃𝐮𝐲 𝐇𝐮̛𝐧𝐠 🎀" +
                "\n𝟐. 𝐂𝐚̂̀𝐮 𝐓𝐡𝐢̣ 𝐍𝐠𝐡𝐞̀ 💦" +
                "\n𝟑. 𝐇𝐨̂̀ 𝐇𝐨𝐚̀𝐧 𝐊𝐢𝐞̂́𝐦 🍄" +
                "\n𝟒. 𝐓𝐢̣𝐧𝐡 𝐓𝐡𝐚̂́𝐭 𝐁𝐨̂̀𝐧𝐠 𝐋𝐚𝐢" +
                "\n𝟓. 𝐏𝐡𝐨̂́ 𝐓𝐚𝐦 𝐓𝐫𝐢𝐧𝐡 🐥" +
                "\n𝟔. 𝐊𝐡𝐚́𝐜𝐡 𝐒𝐚̣𝐧 𝐘 𝐍𝐮 💈" +
                `\n\n𝐇𝐚̃𝐲 𝐑𝐞𝐩𝐥𝐚𝐲 𝐒𝐓𝐓 𝐂𝐡𝐨̣𝐧 𝐊𝐡𝐮 𝐕𝐮̛̣𝐜 𝐇𝐚̀𝐧𝐡 𝐍𝐠𝐡𝐞̂̀ ❤️`,
                attachment: fs.createReadStream(__dirname + `/cache/cave.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.cavevip = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}