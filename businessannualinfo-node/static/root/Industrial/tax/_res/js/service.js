var app = angular.module('taxServer',[]);
app.factory('taxSer',function ($http) {
    return {
        changeList : changeList,
        counttax:counttax,
        changeOne:changeOne,
        changeAll:changeAll,
        changeDelete:changeDelete,
        changeAdd:changeAdd,
        changeEdit:changeEdit,
        changeListFile:changeListFile,
        changePermission:changePermission        
    };
    //列表
    function  changeList(data) {
        return $http.get('/changeList',{
            params:data
        })
    }
    //分页
    function counttax(){
        return $http.get('/counttax')
    };
    //一个
    function changeOne(data){
        return $http.get('/changeOne',{params:data})
    }
    //一共
    function changeAll(data){
        return $http.post('/changeAll')
    }
    //删除
    function changeDelete(data){
        return $http.get('/changeDelete/delete',{
            params:data
        })
    }
    //添加能力
    function changeAdd(data){
        return $http.post('/changeAdd',data)
    }
    //编辑
    function changeEdit(data){
        return $http.post('/changeEdit',data)
    }
    //文件附件列表
    function changeListFile(data){
        return $http.get('/changeListFile/listFile',{params:data})
    }
//菜单权限
    function changePermission(data) {
        return $http.get('/changePermission/changePermission/'+data);
    }
});
