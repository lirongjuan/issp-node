var app = angular.module('alreadyYear', ['toastr']);
app.controller('alreadyYearCtrl', function($scope,$state,toastr,alreadySer){
    $scope.collect = function(){
        var data = {
            years:$scope.years,
        };
        alreadySer.yearReady(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





