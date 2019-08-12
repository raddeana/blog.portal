/**
 * app 入口
 * @author Philip
 */

const path = require("path")

const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const routes = require("./routes")
const app = express()

app.use(session({
    secret: "secret",
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}))

// 使用路由
app.engine("html", ejs.renderFile)
app.set("view engine", "html")
app.set("views", path.join(__dirname, "../../web/dist"))

// 模板设置
app.use("/", routes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 请求 cookie 解析
app.use(cookieParser())
app.listen(process.env.NODE_ENV === "dev" ? 8080 : 8081)

module.exports = app;