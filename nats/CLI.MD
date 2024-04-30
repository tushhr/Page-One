#### Frequently used CLI commands 

- To start nats server: `nats-server`
- Publish: `nats pub <subject> <message>`
- Subscribe: `nats sub <subject>`
- Request: `nats request <subject> <msg>`
- Reply: `nats reply <subject> <msg>`

- To enable JetStream: `nats-server -js`
- Create a stream: `nats stream add <stream_name>`
- Get stream info: `nats stream info <stream_name>`
- Clean up stream (truncate): `nats stream purge`
- Delete stream (Drop): `nats stream rm`
- Create a consumer: `nats consumer add`
- Delete a consumer: `nats consumer rm`

There are commands for KV & Object as well, skipping them for CLI