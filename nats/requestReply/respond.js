import { connect, StringCodec } from 'nats';

const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  const sc = StringCodec();

  // the syntax is same as that of normal subs
  const subscription = nc.subscribe("tushhr.responder");
  
  (async (sub) => {
    console.log(`listening for ${sub.getSubject()} requests...`);

    for await (const m of sub) {
      console.log(`Received: ${sc.decode(m.data)}`)
      if (m.respond(sc.encode("Your request received successfully"))) {
        console.info(`Responded succesfully`);
      } else {
        // also runs if the some publisher publishes on this subject
        console.log(`Ignored - no reply subject`);
      }
    }

    console.log(`subscription ${sub.getSubject()} drained.`);
  })(subscription);

} catch (err) {
  console.log('Error connecting to the host', err)
}