var app = angular.module('serveCordAdd', ['toastr']);
app.controller('serverecordAddCtrl', function($scope, servereCordSer,$state,toastr){
    //添加竞争对手
    $scope.companyAddFun = function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        $scope.data.predictCharge = Math.floor($scope.num*100) / 100;//预计费用
        var data = $scope.data;
        servereCordSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
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




