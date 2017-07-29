var app = angular.module('publicServer',[]);
app.factory('publicSer',function ($http) {
    return {
        publicList : publicList,
        menuPermission : menuPermission,
        addpublic:addpublic,
        editpublic:editpublic,
        findpublicId:findpublicId,
        countpublic:countpublic,
        deletepublic:deletepublic,
        congealPublic:congealPublic,
        thawPublic:thawPublic,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/public/guidePermission/'+data);
    }
    //列表
    function publicList(data) {
        return $http.get('/public/list',{
            params: data
        })
    }

    //添加
    function addpublic(data){
        return $http.post('/public/add',data)
    }

    //编辑
    function editpublic(data){
        return $http.post('/public/edit',data)
    }
    //id查询
    function findpublicId(data){
        return $http.get('/public/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countpublic(data){
        return $http.get('/public/count',{params:data})
    }
    //删除
    function deletepublic(data){
        return $http.get('/public/delete',{
            params: data

        })
    }
    //冻结
    function congealPublic(data){
        return $http.get('/public/congeal',{
            params: data
        })
    }
    //解冻
    function thawPublic(data){
        return $http.get('/public/thaw',{
            params: data
        })
    }
});
