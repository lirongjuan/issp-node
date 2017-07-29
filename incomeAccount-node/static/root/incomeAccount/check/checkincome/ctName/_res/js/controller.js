var app = angular.module('projectNameApp', ['toastr']);
app.controller('ctNameCtrl',function($scope,checkincomeSer,toastr) {
    //查看更多
    $scope.moreList = function(event){
        event._moreList = !event._moreList;
    };
    //所有名称
    checkincomeSer.listProject().then(function(response){
         if(response.data.code==0){
            $scope.projectNames = response.data.data;
         }else{
                toastr.error( response.data.msg , '温馨提示');
            }
    })
    
    $scope.collectFun = function(){
        $scope.isCollect = true;
        if($scope.projectName){
            $scope.isPay = true;
        }else{
            $scope.isPay = false;
        }
        $scope.startTime = angular.element('.start').val();//开始日期
        $scope.endTime = angular.element('.end').val();//结束日期
        var collectData = {
            startTime:$scope.startTime || "",
            endTime:$scope.endTime || "",
            projectName:$scope.projectName || ""
        }
        checkincomeSer.ctProject(collectData).then(function(response){
            if(response.data.code==0){
                $scope.listss = response.data.data;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    
});
