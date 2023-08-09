module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`=== 『 𝗞𝗶́𝗰𝗵 𝗛𝗼𝗮̣𝘁 𝗔𝗻𝘁𝗶𝗼𝘂𝘁 』 ===\n━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗮𝗻𝗴 𝘁𝗲̂𝗻 ${name} 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 𝘁𝗵𝗮̂́𝘁 𝗯𝗮̣i\n→ 𝗟𝗶́ 𝗱𝗼: 𝗱𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝗮̣̆𝗻 𝗯𝗼𝘁 , 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝘂́𝘁 𝘁𝗵𝗲̂𝗺 𝗯𝗮̣𝗻 𝗯𝗲̀ , 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 🐰`, event.threadID)
   } else api.sendMessage(`=== 『 𝗞𝗶́𝗰𝗵 𝗛𝗼𝗮̣𝘁 𝗔𝗻𝘁𝗶𝗼𝘂𝘁 』 ===\n━━━━━━━━━━━━━━━━━━\n→ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗮𝗻𝗴 𝘁𝗲̂𝗻 ${name} đ𝗮𝗻𝗴 𝗰𝗼́ 𝘆́ đ𝗶̣𝗻𝗵 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺 𝗰𝗵𝗮𝘁\n→ 𝗕𝗼𝘁 đ𝗮̃ 𝗸𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮𝗻𝘁𝗶𝗼𝘂𝘁 𝘁𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 ${name} 𝘃𝗮̀𝗼 𝗹𝗮̣𝗶 𝗻𝗵𝗼́𝗺\n→ 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗿𝗼̛̀𝗶 𝘁𝗵𝗶̀ 𝗵𝗮̃𝘆 𝗯𝗮̉𝗼 𝗾𝘁𝘃 𝘁𝗮̆́𝘁 𝗮𝗻𝘁𝗶𝗼𝘂𝘁 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗸𝗵𝗶 𝗿𝗼̛̀𝗶 𝗻𝗵𝗲́ 🌸`, event.threadID);
  })
 }
}