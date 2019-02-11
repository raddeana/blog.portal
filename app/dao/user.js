/**
 * 用户 dao
 * @author Philip
 */
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'wowcxy2008',
    database: 'portal'
})

module.exports = {
    /**
     * 登录
     * @param {object} 用户
     * @return {object} 返回结果
     */
    login: async (user) => {
        await connection.connect()
        
        let { username, password } = user
        let results = connection.query(`SELECT * from user where username = ${username} and password = ${password}`)
         
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

        let { id, password } = user
        let results = connection.query(`UPDATE user SET foo = ${password} WHERE id = ${id}`)
         
        connection.end()

        return results
    }
}
