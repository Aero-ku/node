var http = require('http');
var querystring = require('querystring'); 

http.createServer(function(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    var str = '';
    request.on('data',function(data){
        str += data;
    })
     request.on('end',function(){
        var json = querystring.parse(str);
        if(json.user == 'aero' && json.password == '123456'){
            response.write('登录成功');
        } else {
            response.write('登录失败');
        }
        response.end();
     })
    
}).listen(8260);