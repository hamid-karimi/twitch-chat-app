const PORT = 8000
const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt')
const {v1: uuidv1} = require('uuid')
const { connect } = require('getstream')

app.use(cors())
app.use(express.json())

const API_KEY = 'jzwcy2xnrazh'
const API_SECRET = 'vq48h6hwuqzsnah6f9hb77dvvt5khmw4vzbb82nd222fbp8zyug385zbg97xhv7b'
const APP_ID = '1156395'

//sign up

app.post('/signup', async(req, res) => {
    try{
        const {username, password} = req.body

        const userId = uuidv1()
        const hashedPassword = await bcrypt.hash(password, 10)
        const client = connect(API_KEY, API_SECRET, APP_ID)
        const token = client .createUserToken(userId)

        res.status(200).json({username, userId, hashedPassword, token})

        // console.log(username, hashedPassword)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.listen(PORT, () => console.log('Server running on port 8000'))