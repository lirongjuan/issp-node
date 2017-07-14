var app = angular.module('summaryEquip', ['toastr']);
app.controller('summaryEquipCtrl', function($scope, paingSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){
       
        paingSer.summaryEquip().then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});