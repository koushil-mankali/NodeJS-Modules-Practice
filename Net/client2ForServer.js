import { createConnection } from "node:net";

const socket = createConnection({ host: "127.0.0.1", port: 4000 });

socket.write("hi");
