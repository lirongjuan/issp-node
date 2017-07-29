var app = angular.module('pName', ['toastr']);
app.controller('pNameCtrl', function($scope, hasPaySer,toastr){

    $scope.showed = true;
    //获取项目
    hasPaySer.listProject().then(function(response){
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
            project:$scope.project || '',
            startTime:startTime,
            endTime:endTime
        };
        hasPaySer.collectProjectName(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                $scope.first = $scope.project? true : false;
                $scope.time = startTime || endTime? true : false;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




