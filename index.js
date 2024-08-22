import express from 'express'
import { connect } from 'mongoose'
import Product from './models/productModel.js'
import productRouter from './routes/productRoute.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', productRouter)
app.get('/', (req, res) => {
    res.send('hello')
})


const connectionstring = "mongodb+srv://ulvirasul1:ulvi456123@cluster0.kxyds.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0"
app.listen(3000, () => {
    console.log('Server is activated on port 3000');
    connect(connectionstring).then(() => {
        console.log("Connected mongodb");
    }).catch(() => {
        console.log("Connection failed");
    })
})