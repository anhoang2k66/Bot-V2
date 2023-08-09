module.exports.config = {
    name: "clmm",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chẵn lẻ momoooo",
    commandCategory: "Giải trí",
    usages: "[C1/L1/C2/L2]",
    cooldowns: 0
};

module.exports.run = async function ({api, event, args, Users, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    let { senderID, threadID, messageID } = event;
    if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm");
    var day = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
    var codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000)
    var lastNumber = parseInt(codeGD.slice(-1))
    const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/comment.png";
    var coins = args[1]
    var content = args[0]
    if (!content) return api.sendMessage("🔰Bạn vui lòng nhập chẵn hoặc lẻ!\n⛔Cách đặt cược:\n🌐C1[2,4,6,8]\n🌐L1[1,3,5,7]\n=> x2.5 tiền cược🤑💰\n🌐C2[0,2,4,6,8]\n🌐L2[1,3,5,7,9]\n=> x2 tiền cược🤑💰\nVí dụ: /clmm C2 10000", threadID, messageID);
    if (!coins) return api.sendMessage("Vui lòng nhập số tiền cần cược!", threadID, messageID);
    var money = (await Currencies.getData(senderID)).money
    if(money < parseInt(coins)) return api.sendMessage('Hong đủ tiền bé ơi!', threadID, messageID);
    if(parseInt(coins) < 5000) return api.sendMessage('Min 5000 bé ơi!', threadID, messageID);
    if(parseInt(coins) > 50000000000000000000000) return api.sendMessage('Min 50000000000000000000000 bé ơi!', threadID, messageID);
    //check win
    var c1 = [2, 4, 6 ,8]
    var l1 = [1, 3, 5, 7]
    var c2 = [0, 2, 4 ,6 ,8]
    var l2 = [1, 3, 5, 7, 9]
    var msg = ''
    switch (content.toLowerCase()) {
        case "c1": {
            if(c1.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2.5 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "l1": {
            if(l1.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2.5 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "c2": {
            if(c2.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        case "l2": {
            if(l2.includes(lastNumber) == true) {
                msg += `Bạn đã thắng! (${lastNumber})\nx2 tiền cược!`
                await Currencies.increaseMoney(senderID, parseInt(coins));
            }
            else {
                msg += `Bạn đã thua! (${lastNumber})\nTiền cược mất!`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        default: {
            msg += `Sai nội dung!\nKhông hoàn tiền!`
            await Currencies.decreaseMoney(senderID, parseInt(coins));
        }
    }
    //xử lí canvas
    let bg = (await axios.get(`https://i.imgur.com/OUPC4iK.png`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "30px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    ctx.fillText('-' + coins.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ', 151, 201);
    ctx.font = "25px SplineSans";
    ctx.fillText(content, 64, 1080);
    ctx.font = "26px SplineSans-Medium";
    ctx.textAlign = "right";
    ctx.fillText('Bot Messenger', 547, 816);
    ctx.fillStyle = "#FF00FF";
    ctx.font = "22px SplineSans-Medium";
    ctx.fillText('0332578JQK', 547, 884);
    ctx.font = "22px SplineSans";
    ctx.textAlign = "start";
    ctx.fillText(codeGD, 279, 240);
    ctx.fillStyle = "#000000";
    ctx.textAlign = "right";
    ctx.font = "22px SplineSans-Medium";
    ctx.fillText('Miễn phí', 547, 504);
    ctx.fillText('Ví MoMo', 547, 436);
    ctx.fillText(`${time} - ${day}`, 547, 367);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    //send
    return api.sendMessage({
            body: msg,
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
};
