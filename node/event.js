const events = require("events");

const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
  console.log("Event is running");
};

eventEmitter.on("emit", myEventHandler);

eventEmitter.emit("emit");
