const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const Data = require('./models/User')
const nodemailer = require('nodemailer')

dotenv.config()

mongoose.connect(`${process.env.DB_CONN_STRING}${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONN_STRING2}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to Mongo'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: 'autoemailsenderapp@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    },
    secure: true
})



app.get('/home', (req, res) => {
    res.send('Hello from Server')
})

app.post('/data', (req, res) => {
    const data = new Data(req.body)

    console.log(req.body);

    data.save()
        .then(result => {
            res.send(result)

            const emailData = {
                from: 'autoemailsenderapp@gmail.com',
                to: req.body.email,
                subject: 'Thank You for Sharing Data with us!',
                text: 'Thank you for submittin the data!',
                html: `<p>Hey There!</p>
                      <p> Thanks for sharing your data with us: </p> 
                      <h2>Name:</h2>
                      <p>${req.body.firstName} ${req.body.lastName}<p/>
                      <h2>Country:</h2>
                      <p>${req.body.country}<p/>
                      <h2>Birthday:</h2>
                      <p>${req.body.birthday}<p/>
                      <h2>Gender:</h2>
                      <p>${req.body.gender}<p/>
                `
            }

            transporter.sendMail(emailData, (err, res) => {
                if (err) return console.log(err)
                res.status(200).send({ message: 'Mail sent', message_id: res.messageId })
            })
        })
        .catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))