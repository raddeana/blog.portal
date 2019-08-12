/**
 * 登录
 * @author Philip
 */

const userDao = require("../daos/user")
const cache = require("../services/cache")

/**
 * 登录
 * @Controller
 */
module.exports.login = async (req, res) => {
    const { username, password } = req.body
    const user = await userDao.login({
        username,
        password
    })

    if (user) {
        const token = req.session.id

        req.session.user = user
        res.send(200, {
            token
        })

        cache.addUser(token, user)
        cache.expire(token, 60 * 60 * 60)
    } else {
        res.send(403, {
            message: "用户名或者密码错误"
        })
    }
}

/**
 * 根据 token 获取用户信息
 * @Controller
 */
module.exports.getUserByToken = async (req, res) => {
    const { token } = req.body
    let user = await cache.findUser(token)

    if (user) {
        res.send(200, user)
    } else {
        res.send(404, {
            message: "未找到用户"
        })
    }
}

/**
 * 登出
 * @Controller
 */
module.exports.logout = async (req, res) => {
    const { token } = req.body
    
    req.session.regenerate()
    req.session.user = null
    await cache.removeUser(token)

    res.redirect("/login")
}

/**
 * 远程登出
 * @Controller
 */
module.exports.remoteLogout = async (req, res) => {
    let user = req.session.user

    req.session.regenerate()
    req.session.user = null

    cache.removeUser(user.key)

    res.redirect("/login")
}
