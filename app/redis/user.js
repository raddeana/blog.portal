/**
 * 用户
 * @Steudnera
 */

// set "string key" "string val"
client.set("string key", "string val", redis.print);
 
// redis.print
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);

// hash key  
client.hkeys("hash key", function (err, replies) {
  console.log(replies.length + " replies:");

  replies.forEach(function (reply, i) {
    console.log("    " + i + ": " + reply);
  });

  client.hget("hash key","hashtest 1",redis.print);
    
  client.quit();
});
