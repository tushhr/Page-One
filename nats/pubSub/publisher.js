import { connect, StringCodec } from 'nats';

const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  const sc = StringCodec();

  for(let i = 0; i < 1000; i++) {
    nc.publish("tushhr.publisher", sc.encode("Woah! It's working :)"))
  }
  
} catch(err) {
  console.log('Error connecting to the host', err)
}