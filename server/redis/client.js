/**
 * redis client
 * @Steudnera
 */
const redis = require("redis"),

/** 
 * 客户端
 */ 
client = redis.createClient(6379,'192.168.159.128',{});  
  
// 错误监听  
client.on("error", function (err) {  
    console.error("Error " + err);  
});  
  
module.exports = client;
