console.log( __filename );
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer2 length: " + buffer2.length);

var buffer3 = new Buffer('runoob');
// 剪切缓冲区
var buffer4 = buffer3.slice(0,2);
console.log("buffer4=buffer3.slice(0,2) content: " + buffer4.toString());


var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log("buf.toJSON(buf); content: " + json);