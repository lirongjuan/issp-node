var app = angular.module('businessServer',[]);
app.factory('businessSer',function ($http) {
    return {
        businessList : businessList,
        menuPermission : menuPermission,
        addbusiness:addbusiness,
        editbusiness:editbusiness,
        findbusinessId:findbusinessId,
        countbusiness:countbusiness,
        deletebusiness:deletebusiness,
        viewFiles:viewFiles
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/business/guidePermission/'+data);
    }
    //列表
    function businessList(data) {
        return $http.get('/business/list',{
            params: data
        })
    }

    //添加
    function addbusiness(data){
        return $http.post('/business/add',data)
    }

    //编辑
    function editbusiness(data){
        return $http.post('/business/edit',data)
    }
    //id查询
    function findbusinessId(data){
        return $http.get('/business/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countbusiness(data){
        return $http.get('/business/count',{params:data})
    }
    //删除
    function deletebusiness(data){
        return $http.get('/business/delete',{params: data})
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/business/listFile',{params:data})
    }
});
