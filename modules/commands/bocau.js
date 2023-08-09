module.exports.config = {
	name: "bocau",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "manhG mod by Tiadals", //Vui lòng giữ nguyên credit hoặc ăn đấm !
	description: "Gửi tin hắn đến người dùng(user)/nhóm(thread) bằng ID!",
	commandCategory: "Thành viên",
	usages: "ID [Text]",
	cooldowns: 5
};

	module.exports.run = async ({ api, event, args, getText }) => {
		var idbox = args[0];
		var reason = args.slice(1);
		if (args.length == 0) api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
	else 
	    if(reason == "")api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
		if (event.type == "message_reply") {
			const request = global.nodemodule["request"];
			const fs = require('fs')
			const axios = require('axios')
			
			var getURL = await request.get(event.messageReply.attachments[0].url);
			
					var pathname = getURL.uri.pathname;
			
					var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
			
					var path = __dirname + `/cache/snoti`+`.${ext}`;
			
			
			var abc = event.messageReply.attachments[0].url;
				let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
			
			  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));	
	await api.sendMessage({body:"           🕊 𝗕𝗼̂̀ 𝗖𝗮̂𝘂 🕊\n💌Bạn nhận được một tin nhắn từ người ẩn danh💌\n⚠️Cảnh Báo⚠️: Đây là tin nhắn ẩn danh từ bot và bot không chịu trách nhiệm bất cứ thứ gì👽. Chúc bạn một ngày tốt lành!\nBạn có thể gửi tin nhắn ẩn danh bằn cách /bocau [uid người nhận] + nội dung\nVí dụ: /bocau 1234567 chào bạn\n\n🕊️📬Lời nhắn từ người ẩn danh muốn gửi cho bạn: " + reason.join(" "), attachment: fs.createReadStream(path) }, idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Đã gửi lời nhắn: " + reason.join(" "), event.threadID)));
} 
else {
		await api.sendMessage("ㅤ               🕊 𝗕𝗼̂̀ 𝗖𝗮̂𝘂 🕊\n💌Bạn nhận được một tin nhắn từ người ẩn danh💌\n⚠️Cảnh Báo⚠️: Đây là tin nhắn ẩn danh từ bot và bot không chịu trách nhiệm bất cứ thứ gì👽. Chúc bạn một ngày tốt lành!\nBạn có thể gửi tin nhắn ẩn danh bằn cách /bocau [uid người nhận] + nội dung\nVí dụ: /bocau 1234567 chào bạn\n\n🕊️📬Lời nhắn từ người ẩn danh muốn gửi cho bạn: " + reason.join(" "), idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Đã gửi lời nhắn: " + reason.join(" "), event.threadID)));

	}
}