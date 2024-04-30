import { connect, StringCodec } from 'nats';

const sc = StringCodec()

const server = { servers: "localhost" };
const nc = await connect(server)

const jsm = await nc.jetstreamManager()
const js = await nc.jetstream()

const streamName = "newStream"
const consumerName = "newConsumer"

const consumer = await js.consumers.get(streamName, consumerName)

// requesting a single message
/*
const msg = await consumer.next()
if(msg) {
  console.log(`${msg.subject} sent the message number ${msg.seq}: ${sc.decode(msg.data)}`)
  msg.ack()
} else { console.log("Oops, didn't get a message") }
*/

// fetching a batch of messages
/*
const msg = await consumer.fetch({ size: 20, expires: 4000 })
for await (const m of msg) {
  console.log(`${m.subject} sent the message number ${m.seq}: ${sc.decode(m.data)}`)
  m.ack()
}
*/

// pulling the msgs as the come
/*
const msg = await consumer.consume();
for await (const m of msg) {
  console.log(`${m.subject} sent the message number ${m.seq}: ${sc.decode(m.data)}`)
  m.ack();
}
*/