import moment from "moment-timezone";
const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
export default {
  name: "hi",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "Dũngkon",
  description: "hi",
  shortDescription: "hi",
  usages: [''],
  cooldowns: 5
};
export async function noprefix({ api, event, UsersAll, global }) {
  const tag = UsersAll.find(item => item.id == event.senderID).name
  var { threadID, messageID, senderID } = event;
  let output = "Xin chào ";
  let varinput = ["Hi", "hi", "Chào", "chào", "hello", "Hello", "Hê lô", "hê lô","hí","Hí","xin chào","Xin chào","2","hi mn","Hi mn","hê nhô","hii","Hii","Lô","Hai","lô","hai","helo","Helo","Hiii","hiii","híi","hăi","Hăi"];
  let data = [
    "526214684778630",
    "526220108111421",
    "526220308111401",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568"
  ];
  let sticker = data[Math.floor(Math.random() * data.length)];
  let data2 = [
    "tốt lành =)",
    "vui vẻ 😄",
    "hạnh phúc ❤",
    "yêu đời 😘",
    "thoải mái",
    "happy",
    "sảng khoái"
  ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "sáng tinh mơ" : 
    hours > 401 && hours <= 700 ? "sáng sớm" :
    hours > 701 && hours <= 1000 ? "sáng" :
    hours > 1001 && hours <= 1200 ? "trưa" : 
    hours > 1201 && hours <= 1700 ? "chiều" : 
    hours > 1701 && hours <= 1800 ? "chiều tà" : 
    hours > 1801 && hours <= 2100 ? "tối" : 
    hours > 2101 && hours <= 2400 ? "tối muộn" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Hăi cậu ${name}, chúc cậu một buổi ${session} ${text} ❤️ bên gia đình và bạn bè:3`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
      }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
    }