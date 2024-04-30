import { connect } from "nats";

// server can be a list of hostports as well
// const servers = [
//   { servers: "localhost" },
//   { servers: ["demo.nats.io:4442", "demo.nats.io:4222"] }
// ]
const server = { servers: "localhost" };

try {
  const nc = await connect(server)
  console.log(`Connected to ${nc.getServer()}`)

  setTimeout(async () => {
    // closed basically tells us the status, while close - "closes" the connection
    const status = nc.closed()
    await nc.close()
  
    const err = await status
    if(err) {
      console.log(`Error: ${err}`)
    } else {
      console.log("Connection closed")
    }
  }, 1000)

} catch (err) {
  console.log(`Error connecting to host`)
}