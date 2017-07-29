var app = angular.module('marketserveAdd', ['toastr']);
app.controller('marketserveAddCtrl', function($scope, marketserveSer,$state,toastr){
    //添加竞争对手
    $scope.companyAddFun = function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.predictCharge = Number($scope.num).toFixed(2);//预计费用
        var data = $scope.data;
        marketserveSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list[12]');
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




