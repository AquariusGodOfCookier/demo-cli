

var promiseAjax = function(method,url,params){
    return new Promise((resolve,reject)=>{
        $.ajax({
            method:method.toUpperCase(),
            url:url,
            data:params,
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            }
        })
    })
}