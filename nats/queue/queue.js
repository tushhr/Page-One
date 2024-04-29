import { connect, StringCodec } from 'nats';

const host = "localhost";
const sc = StringCodec();

const createService = (queueName, queue) => {
  queue.forEach(async (node) => {
    const nc = await connect({server: host, name: node})
    const sub = nc.subscribe("tushhr.queue.publisher", {queue: queueName})

    handleRequest(sub, node)
    // await nc.drain()
  })
}

const handleRequest = (sub, node) => {
  (async(sub) => {
    for await (const msg of sub) {
      console.log(`[${sub.getProcessed()}] of ${node}: ${sc.decode(msg.data)}`);
    }
  })(sub)
}

const queue1 = ["q1-node1", "q1-node2", "q1-node3"]
const queue2 = ["q2-node1", "q2-node2", "q2-node3"]

createService("queue1", queue1)
createService("queue2", queue2)