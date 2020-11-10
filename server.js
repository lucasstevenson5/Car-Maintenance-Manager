require('dotenv').config();

const express = require('express'); // gets the express library
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express(); //app is an object for the app
const routes = require('./routes');
const constants = require('./constants');

const methodOverride = require('method-override'); //gets method-override library
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

//whatever inside this every request passed through it
//makes it so express can understand it 
//Middleware
app.use(express.urlencoded({extended: true})); //changes response from client to JS understandable 
app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use(cookieParser());




const verifyToken = (req,res, next) => {
    let token = req.headers['authorization'];
    // let token = req.cookies.jwt
    // console.log(`Token: ${token}`)

    if(token){
        token = token.substring(constants.BEARER_START_INDEX) //remove string Bearer from the token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(constants.UNAUTHORIZED).send(`ERROR: ${err}`);
        }
        // if(err || !decodedUser) {
        //     return res.send('Errorin JWT');
        // }
        req.user = decodedUser;

        next()
    })
}

app.use('/auth', routes.auth);
app.use('/auth/verify', verifyToken, routes.auth);
app.use('/users', verifyToken, routes.users);
app.use('/car', verifyToken, routes.car);
app.use('/maintenance', verifyToken, routes.maintenanceItem)

// app.get('/', (req, res) => {
//     res.render('users/home.ejs')
// });

//listen used to run app on port 3000, listen function from express library
app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})