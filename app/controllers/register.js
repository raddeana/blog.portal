/**
 * 注册
 * @author chenxiangyu
 */
const userDao = require("../daos/user")

/**
 * 注册
 * @Controller
 */
module.exports.register = async (req, res) => {
    const { username, password, role } = req.body
    const result = await userDao.register({
        role,
        username,
        password
    })

    if (result) {
        res.send(200, {
            message: "注册成功"
        })
    } else {
        res.send(409, {
            message: "注册失败，请重试"
        })
    }
}
