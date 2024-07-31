import EventEmitter from "events";

// Creating Instance

const customEmitter = new EventEmitter()

// 1. on: listen/register for an event
// 2. once: listen/register for an event
// 3. emit: emit/call an event

// customEmitter.on('response', (name, id) => {
//     console.log(`user: ${name} id: ${id}`);
// })
customEmitter.once('response', (name, id) => {
    console.log(`user: ${name} id: ${id}`);
})

customEmitter.emit('response', "nabin", 5)
customEmitter.emit('response', "john", 10)