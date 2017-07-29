var app = angular.module('statiServer',[]);
app.factory('statiSer',function ($http) {
    return {
       
        opinList:opinList,
        
        opinCount:opinCount,
        
        opinPermission:opinPermission
    };
    //菜单权限
    function opinPermission(data) {
        return $http.get('/opinPermission/opinPermission/'+data);
    }
    function opinList(data) {
        return $http.get('/opinList/list',{
            params: data
        })
    }

   
    //分页总条数
    function opinCount(){
        return $http.get('/opinCount/count')
    }
    
});
