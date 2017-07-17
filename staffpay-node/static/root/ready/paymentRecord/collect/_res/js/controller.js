
var app = angular.module('paymentCollect', ['toastr']);
app.controller('paymentCollectCtrl', function($scope, paymentRecordSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){

        paymentRecordSer.collectOnly($scope.data).then(function(response){
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





