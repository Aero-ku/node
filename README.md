* querystring -> 解析post数据 
比较不适用于解析 get请求，因为 get请求的url中的data之前有'./'这一段，需要用substring将其裁剪后才能实用querystring