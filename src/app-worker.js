const express = require("express")
const {Worker} = require("worker_threads")
const logger = require("./logger")
const path = require("path")

const app = express()

const runWorker = (data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'), {
            workerData: data
        })
        worker.on('message', (data) => {
            resolve(data)
        })
        worker.on('error', (error)=>{
            reject(error)
        })
        worker.on('exit', () => {
            reject('Worker exited')
        })
    })
}

app.get("/heavy", async(req, res) => {
    try{
        const result = await runWorker(5)
        console.log("RESULT")
        logger.info('Heavy task')
        res.json({
            data: result
        })
    }catch(err){
        console.log("ERROR", err)
        logger.error('Error')
        res.json({
            message: "Error"
        })
    }
})


app.listen(3000, () => {
    console.log("Listening on PORT 3000")
})