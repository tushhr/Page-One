import { connect, StringCodec } from 'nats';

const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  const sc = StringCodec();

  // keep the frequency low to see actual distribution..!
  for(let i = 0; i < 10; i++) {
    nc.publish("tushhr.queue.publisher", sc.encode("Woah! The Queue is working :)"))
  }
  
} catch(err) {
  console.log('Error connecting to the host', err)
}