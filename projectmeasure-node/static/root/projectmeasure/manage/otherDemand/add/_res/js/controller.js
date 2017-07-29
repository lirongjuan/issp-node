var app = angular.module('otherDemandAdd', ['toastr']);
app.controller('otherDemandAddCtrl', function($scope, otherDemandSer,$state,toastr){
    //获取值项目名称
    otherDemandSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.companyAddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        otherDemandSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.otherDemand.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




