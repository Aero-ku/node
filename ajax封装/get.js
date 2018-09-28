// get解析数据的方式
var http = require('http'),
    urlTool = require('url');

http.createServer(function(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlTool.parse(request.url, true).query;
    console.log(json);
    if(json.user == 'aero' && json.password == '123456'){
        response.write('登录成功');
    } else {
        response.write('登录失败');
    }
    response.end();
}).listen(9270)