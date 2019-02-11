/**
 * 登录
 * @Controller
 */
module.exports.login = async function () {
    let { username, password } = req.body
    let { message, user, code } = await userDao.login(username, password)

    if (code === 200) {
        req.session.user = user
        
        res.send(code, {
            token: req.session.id
        })
    } else {
        if (!user) {
            res.send(code, { 
                message
            })
        } else {
            res.send(code, {
                message
            })
        }
    }
}

/**
 * 获取识别码图片
 * @Controller
 */
module.exports.getVerifyCodeImg = function () {
    
}

/**
 * 登出
 * @Controller
 */
module.exports.logout = function () {
    req.session.regenerate()
    req.session.user = null
    
	res.redirect("/login")
}
