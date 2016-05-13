//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
var count = 0;

event.on('some_event', function() {
	++count;
  if(count < 10)
  {
	setTimeout(function() { 
		event.emit('some_event'); 
	}, 1000);
  }
	//sleep(2000);
	console.log(count);
	
}); 

setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}