var app = angular.module('yearsConfirm', ['toastr','ipCookie']);
app.controller('yearsConfirmCtrlConfirmCtrl', function($scope,$state,toastr,yearsSer,$stateParams){

    $scope.confirmFun = function(){
        var data = {
            id:$stateParams.id,
            operatorStatus:$scope.operatorStatus,
        };
        yearsSer.confirmYears(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.years.list[12]');
                toastr.success("经办人已成功确认！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


