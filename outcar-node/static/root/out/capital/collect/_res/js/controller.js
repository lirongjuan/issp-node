var app = angular.module('capitalCollect', ['toastr']);
app.controller('capitalCollectCtrl', function($scope,$state,toastr,capitalSer){
    $scope.collect = function(){
        var data = {month:$scope.month};
        capitalSer.summaryCap(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





