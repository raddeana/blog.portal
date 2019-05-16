/**
 * 验证码
 * @author Philip
 */

const svgCaptcha = require("svg-captcha")

/**
 * 获取识别码图片
 * @Controller
 */
module.exports.verifyCode = function (req, res) {
    const config = {
        size: 5,
        ignoreChars: "0o1i",
        noise: 2,
        height: 44 
    }
    
    const captcha = svgCaptcha.create(config)
    const codeData = {
        img: captcha.data
    }

    req.session.captcha = captcha.text.toLowerCase()
    res.send(codeData)
}
