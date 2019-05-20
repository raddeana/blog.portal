/**
 * 路由配置
 * @author Philip
 */

const express = require("express")

// 控制器
const auth = require("./controller/auth")
const forgetPassword = require("./controller/forget-password")
const verifyCode = require("./controller/verify-code")
const register = require("./controller/register")

const router = express.Router()

router.get("/", (req, res) => {
    res.render("login.html")
})

router.get("/login", (req, res) => {
    res.render("login.html")
})

router.get("/register", (req, res) => {
    res.render("register.html")
})

router.get("/forget-password", (req, res) => {
    res.render("forget-password.html")
})

router.get("/reset-password", (req, res) => {
    res.render("reset-password.html")
})

// 登出
router.post("/logout", (req, res) => {
    auth.logout(req, res)
})

// 登录
router.post("/api/login", (req, res) => {
    auth.login(req, res)
})

// 登录
router.post("/api/remote-logout", (req, res) => {
    auth.remoteLogout(req, res)
})

// 注册
router.post("/api/register", (req, res) => {
    register.register(req, res)
})

// 重置密码
router.post("/api/sendResetPasswordLink", (req, res) => {
    forgetPassword.sendResetPasswordLink(req, res)
})

// 重置密码
router.post("/api/resetPassword", (req, res) => {
    forgetPassword.resetPassword(req, res)
})

// verify code
router.post("/api/verifyCode", (req, res) => {
    verifyCode.verifyCode(req, res)
})

module.exports = router
