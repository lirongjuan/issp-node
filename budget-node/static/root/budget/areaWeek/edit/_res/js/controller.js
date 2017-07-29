var app = angular.module('areaWeekEdit', ['toastr']);
app.controller('areaWeekEditCtrl', function($scope,$state,$stateParams,toastr,areaWeekSer){
    var getId = {id:$stateParams.id};
    areaWeekSer.getAreaWeek(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.areaEditFun = function(){
        areaWeekSer.editAreaWeek($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.budget.areaWeek.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





