var app = angular.module('contractorServer',[]);
app.factory('contractorSer',function ($http) {
    return {
        listContractor:listContractor,
        countContractor:countContractor,
        addContractor:addContractor,
        editContractor:editContractor,
        findContractorId:findContractorId,
        deleteContractor:deleteContractor,
        menuPermission:menuPermission
    };
    function listContractor(data) {
        return $http.get('/listContractor/list',{
            params: data
        })
    }
    //分页总条数
    function countContractor(){
        return $http.get('/countContractor/count')
    }
    //添加
    function addContractor(data){
        return $http.post('/addContractor/add',data)
    }
    //编辑
    function editContractor(data){
        return $http.post('/editContractor/edit',data)
    }
    //id查询
    function findContractorId(data){
        return $http.get('/findContractorId/info',{
            params:data
        })
    }
    //删除
    function deleteContractor(data){
        return $http.get('/deleteContractor/delete',{
            params: data
        })
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/contractor/guidePermission/'+data);
    }
});
