/**
 * 路由配置
 * @author Philip
 */

const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.render("login.html")
})

router.get("/login", function (req, res) {
    res.render("login.html")
})

router.get("/register", function (req, res) {
    res.render("register.html")
})

router.get("/forget-password", function (req, res) {
    res.render("forget-password.html")
})

router.get("/reset-password", function (req, res) {
    res.render("reset-password.html")
})

module.exports = router
