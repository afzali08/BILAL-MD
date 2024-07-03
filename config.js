
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0a9f37fade7859a13ccd3.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xtZGo2cS9mZzJsNHZpaXRsMU5OOC9zRWxDRi9XMys1dEsvT1pmOTZtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3ZUOEFaTkJyMWUrOE5BRjVmRmE4RHhENUdIUDdzT0VkUlAwSUwwS1hYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR3pzNi96bWFZUFNBeXpaS1BONkRjbjRvdVd4bEFJL2Q1d1RINmFOdEdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOM0hudUpGMy9IZGw2RzlNMC9jRUdseWNYaWdwVDlXdHVRWDhja3dCS1NZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGMWdjZWxOeFlJbGVMTjJ2Y2FCSitQYVJLZHpiRWlwaVJtTmRObG9BV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBQUE8ycWFLVHRUQjhybnNaN3F2a3JmV2VZMFlNQk1zeDViSEEwc0xRZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUIveXhid0RsUk9KTHJONEVRcUJvMlJTcmdzbG5RNVZoUXI0ajVSeG9Gdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjhjdjBGeG9nYzBtQjJLYjRrQ053VHQ2MFNSMERLUUh3WUZESXJ4WW1YTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlaSTZLTGtNRXdkcnlZOTJuclNqRG8wVStoMG02OTJRQ01QTDVXUTJPVXlxN1ZiRnhLaXp2V2xiYm5iVkVnWnFXeDZWVGtzMXI3V0lSZk9MVFF6ekN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6InlNRDhMSjI0S2JpM0VxK21IdWRodkJ3UHpFbHgxYW5yS2lwQUF4azQ3Mmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZNZTlyUHh6VHlDcm5faVZLX3pLRkEiLCJwaG9uZUlkIjoiMWM4M2Y2MGQtNDRmNi00MTAxLWJmY2YtYTA0NjMwNGE1OGZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFwam1MOFljL054WUExWjA0VlFKYU5hSjVEaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIRUdkTGRkWDdIbHRuYVJkNHpHUUg5SVZWU289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOERWTFJOVzUiLCJtZSI6eyJpZCI6IjI2Mzc4ODA0OTY3NTozMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZoOGZzRUVOdTVnYlFHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVWcwZ09DeTJjaS91TUZFSjlyOWMxQk9LMFlLNnM1cTFSQnZ6MTFTeEN6ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZmpnL1piZ1dUbGROSFVtNWFob2NvRHFGQUhrVmlQU3kvc29nc2pFaVkwaE8rMFloQ2F3cE9yaUV3Zk9jUzVHSUw5WjVGZVpjd3I0cDNLSUExcng5RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlRuNGRXR2JmMWl4RWNtdG5BRkpQUzFML0xqdjBEbUNPT3d1RmNUNnRmbzJUYkJtdTR6VXVvQzc5bHZnWkJXVXZHVHpHenVFWjlqUDFkcllGUmxVMUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg4MDQ5Njc1OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZJTklEZ3N0bkl2N2pCUkNmYS9YTlFUaXRHQ3VyT2F0VVFiODlkVXNRcysifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2ODg0MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUxBIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "BILAL MD",
  author: process.env.PACK_AUTHER || "BILAL",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BILAL",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BILAL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
