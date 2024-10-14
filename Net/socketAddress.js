import { SocketAddress, BlockList } from "node:net";

const socketAddress = new SocketAddress({
  address: "::1",
  family: "ipv6",
  flowlabel: 20,
  port: 4000,
});

const socketAddress2 = new SocketAddress({
  address: "127.0.0.1",
  family: "ipv4",
  flowlabel: 20,
  port: 4000,
});

console.log("Address", socketAddress.address);
console.log("Family", socketAddress.family);
console.log("Port", socketAddress.port);
console.log("FlowLabel", socketAddress.flowlabel);
console.log("===========================================");
console.log("Address", socketAddress2.address);
console.log("Family", socketAddress2.family);
console.log("Port", socketAddress2.port);
console.log("FlowLabel", socketAddress2.flowlabel);

console.log("===========================================");

const bl = new BlockList();

bl.addAddress(socketAddress2);

console.log(bl.rules);
