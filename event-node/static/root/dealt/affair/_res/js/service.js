var app = angular.module('affairServer',[]);
app.factory('affairSer',function ($http) {
    return {
        listAffair : listAffair,
        countAffair:countAffair,
        selectAff:selectAff,
    };
    function listAffair(data){
        return $http.get('/event/list',{params:data})
    }
    function countAffair(){
        return $http.get('/event/count')
    }
    function selectAff(data){
        return $http.get('/event/findByMonth',{params:data})
    }
});
