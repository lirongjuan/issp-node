var app = angular.module('lender', ['toastr']);
app.controller('lenderCtrl', function($scope, hasAnalyzeSer,toastr){

    $scope.showed = true;
    //获取所有人
    hasAnalyzeSer.allgetLender().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.collect = function(){
        hasAnalyzeSer.collectLender($scope.data).then(function(response){
            if(response.data.code == 0){
                $scope.showed = false;
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




