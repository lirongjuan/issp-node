var app = angular.module('archivesServer',[]);
app.factory('archivesSer',function ($http) {
    return {
        listArchives : listArchives,
        countArchives:countArchives,
        deleteArchives:deleteArchives,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addArchives:addArchives,
        editArchives:editArchives,
        reviewArchives:reviewArchives,
        nameMessage:nameMessage,
        nameReference:nameReference

    };
    function listArchives(data) {
        return $http.get('/listArchives/list',{
            params:data
        })
    }
    function countArchives(){
        return $http.get('/countArchives/count')
    }
    function deleteArchives(data){
        return $http.get('/deleteArchives/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/archives/guidePermission/'+data);
    }
    function addArchives(data){
        return $http.post('/addArchives/add',data)
    }
    function getOneById(data) {
        return $http.get('/archives/getOneById',{params:data})
    }
    function editArchives(data){
        return $http.post('/editArchives/edit',data)
    }
    function reviewArchives(data){
        return $http.post('/reviewArchives/review',data)
    }
    function nameMessage(){
        return $http.get('/name/id')
    }
    function nameReference(){
        return $http.get('/nameReference/id')
    }
});
