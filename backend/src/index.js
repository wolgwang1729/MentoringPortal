import dotenv from 'dotenv'
import { connectdb } from './db/index.js'
import {app} from './app.js'

dotenv.config({
    path : './env'
})

const port = process.env.PORT || 8000

connectdb().then(()=>{
    app.on('error',function(error){
        console.log('server connection error - ' + error)
    })

    app.listen(port,()=>{
        console.log(`server started on port ${port}`)
    })
})
