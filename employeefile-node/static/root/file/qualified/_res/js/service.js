var app = angular.module('qualifiedServer',[]);
app.factory('qualifiedSer',function ($http) {
    return {
        listQualified : listQualified,
        countQualified:countQualified,
        deleteQualified:deleteQualified,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addQualified:addQualified,
        editQualified:editQualified,
        laborElation:laborElation,
        socialSecurity:socialSecurity,
        viewQualifiedFile:viewQualifiedFile,
        nameQualified:nameQualified
    };
    function listQualified(data) {
        return $http.get('/listQualified/list',{
            params:data
        })
    }
    function countQualified(){
        return $http.get('/countQualified/count')
    }
    function deleteQualified(data){
        return $http.get('/deleteQualified/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/qualified/guidePermission/'+data);
    }
    function addQualified(data){
        return $http.post('/addQualified/add',data)
    }
    function getOneById(data) {
        return $http.get('/qualified/getOneById',{params:data})
    }
    function editQualified(data){
        return $http.post('/editQualified/edit',data)
    }
    //劳动关系类型
    function laborElation(){
        return $http.get('/laborElation/id')
    }
    //社保类型
    function socialSecurity(){
        return $http.get('/socialSecurity/id')
    }
    function viewQualifiedFile(data){
        return $http.get('/viewQualifiedFile/listFile',{params:data})
    }
    function nameQualified(){
        return $http.get('/name/id')
    }
});
