/**
 * 验证码
 * @author Philip
 */

const svgCaptcha = require('svg-captcha')

/**
 * 获取识别码图片
 * @Controller
 */
module.exports.getVerifyCodeImg = function () {
    let config = {
        size: 5,
        ignoreChars: '0o1i',
        noise: 2,
        height: 44 
    }
    
    let captcha = svgCaptcha.create(config)
    let codeData = {
        img: captcha.data
    }

    req.session.captcha = captcha.text.toLowerCase()
    res.send(codeData);
}

/**
 * 发送验证码
 * @Controller
 */
module.exports.sendVerifyCodeEmail = function () {
    
}