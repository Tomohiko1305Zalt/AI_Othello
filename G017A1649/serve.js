const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

/**
 * "/"�ɃA�N�Z�X����������index.html��ԋp
 */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

/**
 * [�C�x���g] ���[�U�[���ڑ�
 */
io.on("connection", (socket) => {
    console.log("���[�U�[���ڑ����܂���");

    socket.on("post", (msg) => {
        io.emit("member-post", msg);
    });
});

/**
 * 5000�ԂŃT�[�o���N������
 */
http.listen(5000, () => {
    console.log("listening on *:5000") + '�ŃT�[�o�[���N�����܂����B';
});