process.on("message", (mess) => {
  console.log("Message from parent:", mess);
  process.send("Recivied You'r Message!");
});

console.log("Hello from sample.js");
