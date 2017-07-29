var app = angular.module('lender', ['toastr']);
app.controller('lenderCtrl', function($scope, hasPaySer,toastr){

    $scope.showed = true;
    //获取报销人
    hasPaySer.allgetLender().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.collect = function(){
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val();
        var data = {
            reimer:$scope.reimer || '',
            startTime:startTime,
            endTime:endTime
        };
        hasPaySer.collectLender(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                $scope.first = $scope.reimer? true : false;
                $scope.time = startTime || endTime? true : false;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




