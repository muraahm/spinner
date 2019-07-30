process.stdout.write('hello from spinner1.js... \rheyyy\n');
// let spinner = "\r|", "\r/", "\r-", "\r\", "\r|", "\r/", "\r-", "\r|"
​
let time = 0;
let interval = 200;
const sentence = (['\r|  ', '\r/  ', '\r-  ', '\r\\   ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|   ']);
​
for (const symbol in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[symbol]);
  }, time += interval);
}
​
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);
​
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);
​
// setTimeout(() => { 
//   process.stdout.write('\r\\   '); 
// }, 700);
​
// setTimeout(() => { 
//   process.stdout.write('\r|   '); 
// }, 900);
​
// setTimeout(() => { 
//   process.stdout.write('\r/   '); 
// }, 1100);
​
// setTimeout(() => { 
//   process.stdout.write('\r-   '); 
// }, 1300);
​
// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);