/**
 * 忘记密码
 * @author chenxiangyu
 */

/**
 * 重设密码
 * @Controller
 */
module.exports.modifyPassword = async () => {
    let { id, password } = req.body
    let result = await userDao.modidyPassword({
        id,
        password
    })

    if (result) {
        res.send(200, {
            message: '修改密码成功'
        })
    } else {
        res.send(404, {
            message: '未找到该用户'
        })
    }
}
