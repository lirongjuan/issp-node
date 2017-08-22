var app = angular.module('setTimeServer',[]);
app.factory('setTimeSer',function ($http) {
    return {
        listTime : listTime,
        countTime:countTime,
        getTime:getTime,
        editTime:editTime,
        collectCap:collectCap,
        congealTime:congealTime,
        thawTime:thawTime,
    };
    function listTime(data){
        return $http.get('/timeset/list',{params:data})
    }
    function countTime(){
        return $http.get('/event/count')
    }
    function getTime(data){
        return $http.get('/timeset/timeSet',{params:data})
    }
    function editTime(data){
        return $http.post('/timeset/edit',data)
    }
    function collectCap(data){
        return $http.get('/moneyready/countContrast',{params:data})
    }
    function congealTime(data) {
        return $http.get('/timeset/freeze',{params:data})
    }
    function thawTime(data) {
        return $http.get('/timeset/thaw',{params:data})
    }
});
