var app = angular.module('readyMonth', ['toastr']);
app.controller('readyMonthCtrl', function($scope,$state,toastr,readySer){
    $scope.collect = function(){
        var data = {
            years:$scope.years,
            month:$scope.month
        };
        readySer.monthReady(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





