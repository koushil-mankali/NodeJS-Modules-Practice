import { BlockList } from "node:net";

const blockList = new BlockList();

blockList.addAddress("127.0.0.1");
blockList.addAddress("::1", "ipv6");

blockList.addRange("10.0.0.1", "10.0.0.10");
blockList.addRange("::1", "::10", "ipv6");

blockList.addSubnet("127.0.0.1", 8, "ipv4");
blockList.addSubnet("::1", 128, "ipv6");

console.log("Check:", blockList.check("127.0.1.255"));

console.log("Rules: ", blockList.rules);
