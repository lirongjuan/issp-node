var app = angular.module('qqServer',[]);
app.factory('qqSer',function ($http) {
    return {
        qqList : qqList,
        menuPermission : menuPermission,
        addqq:addqq,
        editqq:editqq,
        findqqId:findqqId,
        countqq:countqq,
        deleteqq:deleteqq
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/qq/guidePermission/'+data);
    }
    //列表
    function qqList(data) {
        return $http.get('/qq/list',{
            params: data
        })
    }

    //添加
    function addqq(data){
        return $http.post('/qq/add',data)
    }

    //编辑
    function editqq(data){
        return $http.post('/qq/edit',data)
    }
    //id查询
    function findqqId(data){
        return $http.get('/qq/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countqq(data){
        return $http.get('/qq/count',{params:data})
    }
    //删除
    function deleteqq(data){
        return $http.get('/qq/delete',{
            params: data

        })
    }
});
