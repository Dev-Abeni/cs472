// class Clock {
//   constructor() {}

//   render() {
//     this.date = new Date();

//     this.hours = this.date.getHours();
//     this.mins = this.date.getMinutes();
//     this.secs = this.date.getSeconds();
//     this.millisecs = this.secs * 1000;

//     if (this.hours < 10) {
//       this.hours = "0" + this.hours;
//     }

//     if (this.mins < 10) {
//       this.mins = "0" + this.mins;
//     }

//     if (this.secs < 10) {
//       this.secs = "0" + this.secs;
//     }

//     if (this.millisecs < 10000) {
//       this.millisecs = "0" + this.millisecs;
//     }

//     this.output = `${this.hours}:${this.mins}:${this.secs}:${this.millisecs}`;

//     console.log(this.output);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }
// }

// const clock = new Clock();
// clock.start();
// clock.stop();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// console.log(rabbit.name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let clock = new ExtendedClock({ template: "h:m:s" });
// clock.start();

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps);