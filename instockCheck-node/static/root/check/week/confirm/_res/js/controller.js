var app = angular.module('weekconfirm', ['toastr','ipCookie']);
app.controller('weekconfirmCtrl', function($scope,$state,toastr,weekSer,$stateParams){

    $scope.confirmFun = function(){
        var data = {
            id:$stateParams.id,
            operatorStatus:$scope.operatorStatus,
        };
        weekSer.confirmWeek(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.week.list[12]');
                toastr.success("经办人已成功确认！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


