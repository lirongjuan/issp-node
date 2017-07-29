var app = angular.module('timeServer',[]);
app.factory('timeSer',function ($http) {
    return {
        timeList : timeList,
        timeAdd:timeAdd,
        timeEdit:timeEdit,
        timeDelete:timeDelete,
        timeId:timeId,
        timeCount:timeCount,
        timePermission:timePermission
        
    };
    function timeList(data) {
        return $http.get('/timeList/list',{
            params: data

        })
    }

    //添加
    function timeAdd(data){
        return $http.post('/timeAdd/add',data)
    }
    //编辑
    function timeEdit(data){
        return $http.post('/timeEdit/edit',data)
    }
    //id查询
    function timeId(data){
        return $http.get('/timeId/Id',{
            params:data
        })
    }
    //分页总条数
    function timeCount(){
        return $http.get('/timeCount/count')
    }
    //删除
    function timeDelete(data){

        return $http.get('/timeDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function timePermission(data){

        return $http.get('/timePermission/permission/'+data);
    }
    // //获取网址
    // function timeUrl(data){

    //     return $http.get('/timeUrl/url',{
    //         params: data

    //     })
    // }
    // //获取网站名称
    // function timeName(data){

    //     return $http.get('/timeName/name',{
    //         params: data

    //     })
    // }
});
