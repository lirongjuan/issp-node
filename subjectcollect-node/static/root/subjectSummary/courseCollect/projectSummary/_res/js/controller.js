var app = angular.module('projectNameSummary', ['toastr']);
app.controller('projectNameSummaryCtrl', function($scope, courseCollectSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    courseCollectSer.subjectsName().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            projectName:vm.projectName
        };
        courseCollectSer.projectSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.projectName == undefined || vm.sum.projectName == ''){
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




