var app = angular.module('applyRank', ['toastr']);
app.controller('applyRankCtrl', function($scope, applySer,$stateParams,$state,toastr){

    applySer.getRank().then(function(response){
        if(response.data.code == 0){
            $scope.getRank = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});





