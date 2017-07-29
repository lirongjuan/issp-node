var app = angular.module('proWeekEdit', ['toastr']);
app.controller('proWeekEditCtrl', function($scope,$state,$stateParams,toastr,proWeekSer){
    var getId = {id:$stateParams.id};
    proWeekSer.getProWeek(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.proEditFun = function(){
        proWeekSer.editProWeek($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.proWeek.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





