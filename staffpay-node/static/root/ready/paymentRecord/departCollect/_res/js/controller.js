
var app = angular.module('departCollect', ['toastr']);
app.controller('departCollectCtrl', function($scope, paymentRecordSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){

        paymentRecordSer.collectDepart($scope.data).then(function(response){
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





