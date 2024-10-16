import {
  Resolver,
  lookup,
  lookupService,
  setDefaultResultOrder,
  getDefaultResultOrder,
} from "node:dns";

const domain = "example.org";
const ggl = "google.in";
const resolver = new Resolver({ timeout: 200, tries: 1 });

resolver.setServers(["8.8.8.8"]);

resolver.resolve("example.org", "A", (err, address) => {
  console.log("Resolve A: ", address);
});
resolver.resolve("example.org", "AAAA", (err, address) => {
  console.log("Resolve AAAA: ", address);
});
resolver.resolve("example.org", "MX", (err, address) => {
  console.log("Resolve AAAA: ", address);
});
console.log("==================================================");
resolver.cancel();
console.log("Servers:", resolver.getServers());
console.log("==================================================");
lookup(
  "example.org",
  { family: 0, all: true, order: "ipv4first" },
  (err, address) => {
    console.log("Lookup all:", address);
  }
);
lookup("example.org", { family: 4, all: true }, (err, address) => {
  console.log("Lookup v4:", address);
});
lookup("example.org", { family: 6, all: true }, (err, address) => {
  console.log("Lookup v6:", address);
});
lookupService("127.0.0.1", 22, (err, address, service) => {
  console.log("LookupService:", address, "Service:", service);
});
resolver.resolve4("example.org", (err, address) => {
  console.log("Resolve 4:", address);
});
resolver.resolve6(domain, (err, address) => {
  console.log("Resolver 6:", address);
});
resolver.resolveAny(ggl, (err, address) => {
  console.log("ResolveAny :", address);
});
resolver.resolveCname(ggl, (err, address) => {
  //   if (err) console.error(err);
  console.log("Cname:", address);
});
resolver.resolveCaa(ggl, (err, add) => {
  console.log("CAA:", add);
});
resolver.resolveMx(ggl, (err, add) => {
  console.log("MX:", add);
});
resolver.resolveNs(ggl, (err, add) => {
  console.log("NS:", add);
});
resolver.resolveNaptr(ggl, (err, add) => {
  console.log("NAPTR:", add);
});
resolver.resolvePtr(ggl, (err, add) => {
  console.log("PTR:", add);
});
resolver.resolveSoa(ggl, (err, add) => {
  console.log("SOA:", add);
});
resolver.resolveSrv(ggl, (err, add) => {
  console.log("SRV:", add);
});
resolver.resolveTxt(ggl, (err, add) => {
  console.log("Txt:", add);
});
resolver.reverse("142.250.182.228", (err, add) => {
  //   if (err) console.error(err);
  console.log("Reverse:", add);
});
console.log("Before: Default:", getDefaultResultOrder());
setDefaultResultOrder("ipv6first");
setTimeout(() => {
  lookup("example.org", { all: true, family: 6 }, (err, address) => {
    console.log("After: Lookup all:", address);
  });
}, 1000);
console.log("After: Default:", getDefaultResultOrder());
