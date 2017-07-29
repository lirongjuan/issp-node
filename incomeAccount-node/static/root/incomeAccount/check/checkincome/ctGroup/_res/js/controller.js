var app = angular.module('collectApp', ['toastr']);
app.controller('grounpCtrl',function($scope,checkincomeSer,toastr) {
    //查看更多
    $scope.moreList = function(event){
        event._moreList = !event._moreList;
    };
    //所有名称
    checkincomeSer.listGroup().then(function(response){
         if(response.data.code==0){
            $scope.projectGroups = response.data.data;
         }else{
                toastr.error( response.data.msg , '温馨提示');
        }
    })
    
    $scope.collectFun = function(){
        $scope.isCollect = true;
        if($scope.projectGroup){
            $scope.isPay = true;
        }else{
            $scope.isPay = false;
        }
        $scope.startTime = angular.element('.start').val();//开始日期
        $scope.endTime = angular.element('.end').val();//结束日期
        var collectData = {
            startTime:$scope.startTime || "",
            endTime:$scope.endTime || "",
            projectGroup:$scope.projectGroup || ""
        }
        checkincomeSer.ctGroup(collectData).then(function(response){
            if(response.data.code==0){
                $scope.listss = response.data.data;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    
});
