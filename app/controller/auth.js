/**
 * 登录
 * @author Philip
 */

const userDao = require('../dao/user')
const cache = require('../service/cache')

/**
 * 登录
 * @Controller
 */
module.exports.login = async (req, res) => {
    let { username, password } = req.body
    let user = await userDao.login({
        username,
        password
    })

    if (user) {
        req.session.user = user
        
        res.send(200, {
            token: req.session.id
        })

        let key = req.session.id

        cache.addUser(key, user)
    } else {
        res.send(403, {
            message: '用户名或者密码错误'
        })
    }
}

/**
 * 登出
 * @Controller
 */
module.exports.logout = (req, res) => {
    req.session.regenerate()
    req.session.user = null
    
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
