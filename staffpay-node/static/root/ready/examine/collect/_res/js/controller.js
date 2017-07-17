
var app = angular.module('examineCollect', ['toastr']);
app.controller('examineCollectCtrl', function($scope, examineSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){

        examineSer.collectExamine($scope.data).then(function(response){
            if(response.data.code == 0){
                if( $scope.data.month == undefined || $scope.data.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





