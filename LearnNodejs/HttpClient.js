var http = require('http');

// 用于请求的选项
var options1 = {
   host: 'localhost',
   port: '8081',
   path: '/'  
};

var options2 = {
   host: 'localhost',
   port: '8081',
   path: '/list_user'  
};

var options3 = {
   host: 'localhost',
   port: '8081',
   path: '/del_user',
   method: 'DELETE',   
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req3 = http.request(options3, callback);

var req1 = http.request(options1, callback);


var req2 = http.request(options2, callback);
//req2.end();





req3.end();
req2.end();
req1.end();

//var req4 = http.request(options4, callback);
//req4.end();

