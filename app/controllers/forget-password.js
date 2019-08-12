/**
 * 忘记密码
 * @author chenxiangyu
*/

const nodemailer = require("nodemailer")
const ejs = require("ejs")
const fs = require("fs")
const path = require("path")

const userDao = require("../daos/user")

/**
 * 重设密码
 * @Controller
 */
module.exports.resetPassword = async (req, res) => {
    const { bear, password } = req.body
    const result = await userDao.modidyPassword({
        bear,
        password
    })

    const { success, message } = result;

    res.send(200, {
        success,
        message
    })
}

// 邮件 tansport 实例
const transporter = nodemailer.createTransport({
    service: "qq",
    port: 465,
    secureConnection: true,
    auth: {
        user: "wowcxy2008@126.com",
        pass: "xxxxxx"
    }
})

/**
 * 发送修改密码链接
 * @Controller
 */
module.exports.sendResetPasswordLink = async (req, res) => {
    const { email } = req.body
    const mailOptions = {
        from: "\"admin\" <wowcxy2008@126.com>",
        to: email,
        subject: "修改密码",
        html: ejs.compile(fs.createReadStream(path.resolve(__dirname, "../templates/reset-password.ejs")), "utf-8")
    }

    const result = await transporter.sendMail(mailOptions)

    if (result.error) {
        res.send(200, {
            success: 1,
            message: "发送邮件失败，请重试"
        })
    } else {
        res.send(200, {
            success: 0,
            message: "邮件发送至邮箱，请查收"
        })
    }
}
