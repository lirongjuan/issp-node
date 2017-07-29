var app = angular.module('handoverServer',[]);
app.factory('handoverSer',function ($http) {
    return {
        handoverList : handoverList,
        handoverAdd:handoverAdd,
        handoverEdit:handoverEdit,
        handoverId:handoverId,
        handoverCount:handoverCount,
        handoverDelete:handoverDelete,
        handoverGuide:handoverGuide
        
    };
    function handoverList(data) {
        return $http.get('/handoverList/list',{
            params: data

        })
    }

    //添加
    function handoverAdd(data){
        return $http.post('/handoverAdd/add',data)
    }
    //编辑
    function handoverEdit(data){
        return $http.post('/handoverEdit/edit',data)
    }
    //id查询
    function handoverId(data){
        return $http.get('/handoverId/Id',{
            params:data
        })
    }
    //分页总条数
    function handoverCount(data){
        return $http.get('/handoverCount/count',{params:data})
    }
    //删除
    function handoverDelete(data){
        return $http.get('/handoverDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function handoverGuide(data){
        return $http.get('/handoverGuide/guide/'+data)
    }
});
