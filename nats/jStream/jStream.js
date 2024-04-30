import { connect, StringCodec } from 'nats';

const sc = StringCodec()

const server = { servers: "localhost" };
const nc = await connect(server)

const jsm = await nc.jetstreamManager()

const streams = await jsm.streams.list().next()
streams.forEach(stream => { console.log(stream) });

const streamName = "newStream"
const subject = "tushhr.*"
await jsm.streams.add({name: streamName, subjects: [subject]})

const js = await nc.jetstream()
for(let i = 0; i < 20; i++){
  // we can also use nc.publish() - JStream will capture those msgs as well
  // nc.publish("tushhr.publisher", "It's a JStream!")
  const msg = await js.publish("tushhr.publisher", sc.encode("Am I pushing it to JStream!!?"))

  console.log(msg.stream, msg.duplicate, msg.seq)
}


const consumers = await jsm.consumers.list(streamName).next()
consumers.forEach(consumer => { console.log(consumer) })

await jsm.consumers.add(streamName, {
  durable_name: "newConsumer",
});