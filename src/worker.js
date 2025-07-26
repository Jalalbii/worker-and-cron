const  { workerData, parentPort} = require("worker_threads")

const heavyComputation = (data) => {
    let result = 1;
    for(let i = 1; i <= data; i++){
        result *= i
    }
    return result
}

const result = heavyComputation(workerData)
parentPort.postMessage(result)