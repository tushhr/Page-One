import { connect, StringCodec } from 'nats';

const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  console.log(`Connected to ${nc.getServer()}`)
  
  const sc = StringCodec();
  const sub = nc.subscribe("tushhr.publisher");

  (async () => {
    for await (const msg of sub) {
      console.log(`[${sub.getProcessed()}]: ${sc.decode(msg.data)}`);
    }

    console.log("subscription closed");
  })();


  /**** MOVED PUBLISHER CODE IN A SEPARATE FILE
    for(let i = 0; i < 1000; i++) {
      nc.publish("tushhr.publisher", sc.encode("Woah! It's working :)"))
    }
    // drain close the connection after "draining" all the messages which are yet to be received
    // meanwhile 'close' or 'unsubscribe' terminates the connection immediately
    await nc.drain();
  *****/

} catch(err) {
  console.log('Error connecting to the host', err)
}