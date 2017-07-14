var app = angular.module('registeredServer',[]);
app.factory('registeredSer',function ($http) {
    return {
        loginList : loginList,
        countBaseInfo:countBaseInfo,
        loginadd:loginadd,
        DeleteResgistered:DeleteResgistered,
        loginEdit:loginEdit,
        loginNews:loginNews,
        loginOne:loginOne,
        loginListFile:loginListFile,
        loginPermission:loginPermission
    };
    //列表
    function loginList(data) {
        return $http.get('/loginList',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/Industrialregistered/count')
    }
    //添加公司
    function loginadd(data){
        return $http.post('/loginadd',data)
    }
    //删除
    function DeleteResgistered(data){
        return $http.get('/businessregister/delete',{
            params:data
        })
    }
    //编辑
    function loginEdit(data){
        return $http.post('/loginEdit',data)
    }
    //总条数
     function loginNews(){
        return $http.get('/loginNews')
    }
    //一个
     function loginOne(data){
        return $http.get('/loginOne',{
            params:data
        })
    }
    //文件附件列表
    function loginListFile(data){
        return $http.get('/loginListFile/listFile',{params:data})
    }
//菜单权限
    function loginPermission(data) {
        return $http.get('/loginPermission/loginPermission/'+data);
    }
});
