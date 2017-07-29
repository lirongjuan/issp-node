var app = angular.module('alreadyServer',[]);
app.factory('alreadySer',function ($http) {
    return {
        listAlready : listAlready,
        countAlready:countAlready,
        deleteAlready:deleteAlready,
        menuPermission:menuPermission,
        searchAlready:searchAlready,
        count2Already:count2Already,
        getProjectNames:getProjectNames,
        projectReady:projectReady,
        monthReady:monthReady,
        yearReady:yearReady,
        diffAlready:diffAlready
    };
    //列表
    function listAlready(data) {
        return $http.get('/listAlready/list',{
            params:data
        })
    }
    //分页
    function countAlready(){
        return $http.get('/countAlready/count')
    }
    //删除
    function deleteAlready(data){
        return $http.get('/deleteWait/delete',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/wait/guidePermission/'+data);
    }
    function searchAlready(data) {
        return $http.get('/searchAlready',{
            params:data
        })
    }
    function count2Already(){
        return $http.get('/count2Already/count')
    }
    //获取所有项目组名称
    function getProjectNames() {
        return $http.get('/alreadyNames/names')
    }
    //项目组汇总
    function projectReady(data){
        return $http.post('/projectAlready/summary',data)
    }
    //月汇总
    function monthReady(data){
        return $http.post('/monthAlready/summary',data)
    }
    //年汇总
    function yearReady(data){
        return $http.post('/yearAlready/summary',data)
    }
    //资金准备与实际支付差异
    function diffAlready(data){
        return $http.post('/diffAlready/summary',data)
    }
});
