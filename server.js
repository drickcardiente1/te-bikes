const express = require('express');
const app = express();
const session = require('express-session');
const port = 7000;
const fs = require("node:fs");

const http = require("http").createServer(app);
const io = require("socket.io")(http)

io.on('connection', socket =>{
    socket.on('msg-recieve',msg=>{
        socket.broadcast.emit('msg-send', msg );

    });
})


app.use(express.static(__dirname));

app.use(session({
    secret: 'webslesson',
    resave: true,
    saveUninitialized: true
}));


app.use('/', require('./router/client_router'));
app.use('/auth', require('./router/auth_rauter'));
app.use('/admin', require('./router/admin_routes'));
app.use('/query', require('./router/admin_queries'));
app.use('/client_query', require('./router/client_query'));


http.listen(port, () => console.log(`LESTINING IN PORT ${port}`))

app.use(express.static(__dirname));


