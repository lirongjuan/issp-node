var app = angular.module('monthPlanAdd', ['toastr']);
app.controller('monthPlanAddCtrl', function($scope, monthPlanSer,$state,toastr){

    monthPlanSer.getChoice().then(function(response){
       if(response.data.code==0){
           $scope.choiceGetYears = response.data.data
       }else {
           toastr.error( response.data.msg, '温馨提示');
       }
    });

    //月计划添加
    $scope.monthPlanAddFun = function(){
        var vm = $scope;
        monthPlanSer.addMonthPlan(vm.addMonth).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.monthPlan.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    // 遍历年份
    $scope.yearArr=[];
    for (var y = 1990; y <= 2999; y++) {
        $scope.yearArr.push(y);
    }

});




