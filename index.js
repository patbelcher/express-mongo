import express from 'express'
import cors from 'cors'
import { addFurniture, finAndDelete} from './furniture.js'


//able to use the .dotenv file
import dotenv from 'dotenv'
dotenv.config()




const app = express()
app.use(cors())
app.use(express.json())//to be able to receive json as post

const PORT = process.env.PORT || 4041


//furniture collection
app.post('/', addFurniture)


app.get('/', (req, res)=> {
    res.status(200).send('test with send')
    //res.json("inJson")
    //res.send('test with send')
})

app.delete("/:furnId", finAndDelete);




app.listen(PORT, ()=> console.log('My api is running'))