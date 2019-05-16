/**
 * redis 缓存
 * @author Philip
 */
const redis = require("redis")
const bluebird = require("bluebird")

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient({
    host: '127.0.0.1',
    port: '6379',
    password: 'Wowcxy2008'
})

/**
 * 找到用户
 * @param {string} key
 * @return {none}
 */
module.exports.findUser = async (key) => {
    const user = await client.get(key)
    
    if (user) {
        return JSON.parse(user)
    } else {
        return false
    } 
}

/**
 * 添加用户
 * @param {string} key
 * @param {object} 用户
 * @return {none}
 */
module.exports.addUser = async (key, user) => {
    await client.set(key, JSON.stringify(user))
}

/**
 * 删除用户
 * @param {string} key
 * @return {none}
 */
module.exports.removeUser = async (key) => {
    await client.set(key, null)
}
