var app = angular.module('smuieAdd', ['toastr']);
app.controller('smuiAddCtrl', function($scope, smuiSer,$state,toastr){
    //获取值项目名称
    smuiSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加竞争对手
    $scope.companyAddFun = function(){
        var data = $scope.data;
        smuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.smui.list[12]');
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




