var app = angular.module('readyYear', ['toastr']);
app.controller('readyYearCtrl', function($scope,$state,toastr,readySer){
    $scope.collect = function(){
        var data = {
            years:$scope.years,
        };
        readySer.yearReady(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





