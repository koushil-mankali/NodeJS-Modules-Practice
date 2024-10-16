import {
  Resolver,
  lookup,
  lookupService,
  setDefaultResultOrder,
  getDefaultResultOrder,
} from "node:dns/promises";

const domain = "example.org";
const ggl = "google.in";
let address = "";
const resolver = new Resolver({ timeout: 200, tries: 1 });

resolver.setServers(["8.8.8.8"]);

address = await resolver.resolve("example.org", "A");
console.log("Resolve A: ", address);
console.log("==================================================");
address = await resolver.resolve("example.org", "AAAA");
console.log("Resolve AAAA: ", address);
console.log("==================================================");
address = await resolver.resolve("example.org", "MX");
console.log("Resolve AAAA: ", address);
console.log("==================================================");
resolver.cancel();
console.log("Servers:", resolver.getServers());
console.log("==================================================");
address = await lookup("example.org", {
  family: 0,
  all: true,
  order: "ipv4first",
});
console.log("Lookup all:", address);
console.log("==================================================");
address = await lookup("example.org", { family: 4, all: true });
console.log("Lookup v4:", address);
console.log("==================================================");
address = await lookup("example.org", { family: 6, all: true });
console.log("Lookup v6:", address);
console.log("==================================================");
address = await lookupService("127.0.0.1", 22);
console.log("LookupService:", address);
address = await resolver.resolve4("example.org");
console.log("Resolve 4:", address);
console.log("==================================================");
address = await resolver.resolve6(domain);
console.log("Resolver 6:", address);
console.log("==================================================");
address = await resolver.resolveAny(ggl);
console.log("ResolveAny :", address);
console.log("==================================================");
// address = await resolver.resolveCname("koushilmankali.in");
// console.log("Cname:", address);
console.log("==================================================");
address = await resolver.resolveCaa(ggl);
console.log("CAA:", address);
console.log("==================================================");
address = await resolver.resolveMx(ggl);
console.log("MX:", address);
console.log("==================================================");
address = await resolver.resolveNs(ggl);
console.log("NS:", address);
console.log("==================================================");
// address = await resolver.resolveNaptr(ggl);
// console.log("NAPTR:", address);
console.log("==================================================");
// address = await resolver.resolvePtr(ggl);
// console.log("PTR:", address);
console.log("==================================================");
address = await resolver.resolveSoa(ggl);
console.log("SOA:", address);
console.log("==================================================");
// address = await resolver.resolveSrv(ggl);
// console.log("SRV:", address);
console.log("==================================================");
address = await resolver.resolveTxt(ggl);
console.log("Txt:", address);
console.log("==================================================");
address = await resolver.reverse("142.250.182.228");
console.log("Reverse:", address);
console.log("==================================================");
console.log("Before: Default:", getDefaultResultOrder());
setDefaultResultOrder("ipv6first");
console.log("==================================================");
address = await lookup("example.org", { all: true, family: 6 });
console.log("After: Lookup all:", address);
console.log("==================================================");
console.log("After: Default:", getDefaultResultOrder());
