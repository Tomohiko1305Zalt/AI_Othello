﻿const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);



/**
 * "/"にアクセスがあったらindex.htmlを返却
 */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

/**
 * [イベント] ユーザーが接続
 */
io.on("connection", (socket) => {
    console.log("ユーザーが接続しました");

    socket.on("post", (msg) => {
        io.emit("member-post", msg);
    });
});

/**
 * 5000番でサーバを起動する
 */
http.listen(5000, () => {
    console.log("listening on *:5000") + 'でサーバーが起動しました。';
});