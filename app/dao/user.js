/**
 * 用户 dao
 * @author Philip
 */
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "wowcxy2008",
    database: "portal"
})

module.exports = {
    /**
     * 登录
     * @param {object} 用户
     * @return {object} 返回结果
     */
    login: async (user) => {
        await connection.connect()
        
        const { username, password } = user
        const results = await connection.query(`SELECT * from user where username = ${username} and password = ${password}`)
         
        connection.end()

        return results[0]
    },

    /**
     * 注册
     * @param {object} 用户
     * @return {object} 返回结果
     */
    register: async (user) => {
        await connection.connect()
        
        const { role, username, password } = user
        const results = await connection.query(`insert into user(role, username, password, mobile, email, avatar)values(${role}, ${username}, ${password}, "", "", "");`)
         
        connection.end()

        return results
    },

    /**
     * 修改密码
     * @param {object} 用户
     * @return {object} 返回结果
     */
    modidyPassword: async (user) => {
        await connection.connect()

        const { id, password } = user
        const results = await connection.query(`UPDATE user SET foo = ${password} WHERE id = ${id}`)
         
        connection.end()

        return results
    }
}
