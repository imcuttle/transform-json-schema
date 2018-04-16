import Worker from 'worker-loader!./worker'
const PromiseWorker = require('promise-worker')
export default new PromiseWorker(new Worker())
