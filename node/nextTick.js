console.log('worldbye');

process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now1'));
console.log('worldhi');

setImmediate(() => console.log('Now2'));
setImmediate(() => console.log('Now3'));

console.log('world');
//process our nexttick which puts now at the end
