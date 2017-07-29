var app = angular.module('artificialServer',[]);
app.factory('artificialSer',function ($http) {
    return {
        listArtificial : listArtificial,
        countArtificial:countArtificial,
        addArtificial:addArtificial,
        deleteArtificial:deleteArtificial,
        editArtificial:editArtificial,
        getOneById:getOneById,
        menuPermission:menuPermission,
        actualArt:actualArt
    };
    //列表
    function listArtificial(data) {
        return $http.get('/listArtificial/list',{
            params:data
        })
    }
    //分页
    function countArtificial(){
        return $http.get('/artificial/count')
    }
    //添加公司能力
    function addArtificial(data){
        return $http.post('/addArtificial/add',data)
    }
    //删除
    function deleteArtificial(data){
        return $http.get('/deleteArtificial/delete',{params:data})
    }
    //编辑
    function editArtificial(data){
        return $http.post('/editArtificial/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/artificial/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/artificial/guidePermission/'+data);
    }
    //修改实际时数
    function actualArt(data){
        return $http.get('/actualCar/art',{params:data})
    }
});
