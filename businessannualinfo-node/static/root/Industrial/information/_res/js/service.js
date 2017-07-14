var app = angular.module('informationServer',[]);
app.factory('informationSer',function ($http) {
    return {
        listIndustrialregistered : listIndustrialregistered,
        countinformation:countinformation,
        annualDelete:annualDelete,
        annualAdd:annualAdd,
        annualAll:annualAll,
        annualEdit:annualEdit,
        annualOne:annualOne,
        annualListFile:annualListFile,
        annualPermission:annualPermission
    };
    //列表
    function  listIndustrialregistered(data) {
        return $http.get('/listIndustrialregistered/list',{
            params:data
        })
    }
    //分页
    function countinformation(){
        return $http.get('/countinformation')
    };
    //删除
    function annualDelete(data){
        return $http.get('/annualDelete',{
            params:data
        })
    }
    //添加能力
    function annualAdd(data){
        return $http.post('/annualAdd',data)
    }
    //一共
    function annualAll(data) {
        return $http.get('/annualAll',{params:data})
    }
    //编辑
    function annualEdit(data){
        return $http.post('/annualEdit',data)
    }
    //一个
    function annualOne(data) {
        return $http.get('/annualOne',{
            params:data
        })
    }
    //文件附件列表
    function annualListFile(data){
        return $http.get('/annualListFile/listFile',{params:data})
    }
//菜单权限
    function annualPermission(data) {
        return $http.get('/annualPermission/annualPermission/'+data);
    }
});
