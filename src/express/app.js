// const dotenv = require('dotenv'); //.env 불러오기(git이런데 올리면 안됨,공유X, 권한지정 등 관리잘).  비밀키 관리, 다양한 값 저장 등
// dotenv.config(); //최대한 위에다가, 다른 require 중에 processenv쓰는 경우 있으면 그거보다 위에

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const home = require('./routes');
// const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(morgan('dev'));
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser("minpassword")); //소스코드 털리면 비번까지 있어서 더 위험함.
// app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    // secret: process.env.COOKIE_SECRET, // "minpassword", .env 파일만 잘 관리하면 됨. 값뒤에 ; X
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
);

app.use('/', home);
// app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
