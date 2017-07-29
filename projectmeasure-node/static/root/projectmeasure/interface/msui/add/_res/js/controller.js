var app = angular.module('msuiAdd', ['toastr']);
app.controller('msuiAddCtrl', function($scope, msuiSer,$state,toastr){
    //获取值项目名称
    msuiSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.companyAddFun = function(){
        $scope.data.profit = Number($scope.num).toFixed(2);//预计比重
        var data = $scope.data;
        msuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.msui.list[12]');
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




