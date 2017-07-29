var app = angular.module('areaWeekAdd', ['toastr']);
app.controller('areaWeekAddCtrl', function($scope,$state,toastr,areaWeekSer){
    $scope.areaAddFun = function(){
        areaWeekSer.addAreaWeek($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.areaWeek.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





