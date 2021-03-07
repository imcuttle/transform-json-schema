import registerPromiseWorker from 'promise-worker/register';
import transform from "./transform";

registerPromiseWorker(function ([type, json, config]) {
  return transform(type, json, config)
});

