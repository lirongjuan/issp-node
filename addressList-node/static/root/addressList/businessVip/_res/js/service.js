var app = angular.module('businessVipServer',[]);
app.factory('businessVipSer',function ($http) {
    return {
        businessVipList : businessVipList,
        menuPermission : menuPermission,
        addbusinessVip:addbusinessVip,
        editbusinessVip:editbusinessVip,
        findbusinessVipId:findbusinessVipId,
        countbusinessVip:countbusinessVip,
        deletebusinessVip:deletebusinessVip,
        viewFiles:viewFiles
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/businessVip/guidePermission/'+data);
    }
    //列表
    function businessVipList(data) {
        return $http.get('/businessVip/list',{
            params: data
        })
    }

    //添加
    function addbusinessVip(data){
        return $http.post('/businessVip/add',data)
    }

    //编辑
    function editbusinessVip(data){
        return $http.post('/businessVip/edit',data)
    }
    //id查询
    function findbusinessVipId(data){
        return $http.get('/businessVip/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countbusinessVip(data){
        return $http.get('/businessVip/count',{params:data})
    }
    //删除
    function deletebusinessVip(data){
        return $http.get('/businessVip/delete',{
            params: data

        })
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/businessVip/listFile',{params:data})
    }
});
