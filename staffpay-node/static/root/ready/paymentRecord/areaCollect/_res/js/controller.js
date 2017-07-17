
var app = angular.module('areaCollect', ['toastr']);
app.controller('areaCollectCtrl', function($scope, paymentRecordSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){

        paymentRecordSer.collectArea($scope.data).then(function(response){
            if(response.data.code == 0){
                if( $scope.data.month == undefined || $scope.data.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.onlyLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





