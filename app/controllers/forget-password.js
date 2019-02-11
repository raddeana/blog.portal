/**
 * 发送验证码
 * @Controller
 */
module.exports.sendVerifyCode = function () {

}

/**
 * 重设密码
 * @Controller
 */
module.exports.resetPassword = function () {
    let user = req.body
    let result = await userDao.login(username, password)
    let { code, message } = result

    res.send(code, {
        message
    })
}
