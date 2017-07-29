var app = angular.module('messageServer',[]);
app.factory('messageSer',function ($http) {
    return {
        listMessage : listMessage,
        countMessage:countMessage,
        deleteMessage:deleteMessage,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addMessage:addMessage,
        editMessage:editMessage,
        nameMessage:nameMessage,
        informMessage:informMessage
    };
    function listMessage(data) {
        return $http.get('/listMessage/list',{
            params:data
        })
    }
    function countMessage(){
        return $http.get('/countMessage/count')
    }
    function deleteMessage(data){
        return $http.get('/deleteMessage/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/message/guidePermission/'+data);
    }
    function addMessage(data){
        return $http.post('/addMessage/add',data)
    }
    function getOneById(data) {
        return $http.get('/message/getOneById',{params:data})
    }
    function editMessage(data){
        return $http.post('/editMessage/edit',data)
    }
    function nameMessage(){
        return $http.get('/name/id')
    }
    function informMessage(){
        return $http.get('/informMessage/id')
    }
});
