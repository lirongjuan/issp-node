var app = angular.module('area', ['toastr']);
app.controller('areaCtrl', function($scope, hasPaySer,toastr){

    $scope.showed = true;
    //获取地区
    hasPaySer.listArea().then(function(response){
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
            area:$scope.area || '',
            startTime:startTime,
            endTime:endTime
        };
        hasPaySer.collectArea(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                $scope.first = $scope.area? true : false;
                $scope.time = startTime || endTime? true : false;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




