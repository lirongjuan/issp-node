var app = angular.module('proWeekAdd', ['toastr']);
app.controller('proWeekAddCtrl', function($scope,$state,toastr,proWeekSer){
    $scope.proAddFun = function(){
        proWeekSer.addProWeek($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.proWeek.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





