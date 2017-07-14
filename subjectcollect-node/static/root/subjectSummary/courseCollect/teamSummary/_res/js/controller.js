var app = angular.module('teamSummary', ['toastr']);
app.controller('teamSummaryCtrl', function($scope, courseCollectSer,toastr){

    $scope.showed=true;
    // 获取项目组
    courseCollectSer.subjectsAll().then(function(response){
        if(response.data.code == 0){
            $scope.groups = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            projectGroup:vm.projectGroup
        };
        courseCollectSer.teamSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.projectGroup == undefined || vm.sum.projectGroup == ''){
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




