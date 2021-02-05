var ping = require("ping");

async function test() {
  console.log(await ping.promise.probe("google.com"));
}

test();
