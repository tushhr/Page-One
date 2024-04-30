import { connect, StringCodec } from 'nats';

const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  const sc = StringCodec();

  const response = await nc.request("tushhr.responder", sc.encode("Woah, I'm making a request!!"))
  if(response) {
    console.log(sc.decode(response.data))
  }

} catch (err) {
  console.log('Error connecting to the host', err)
}

