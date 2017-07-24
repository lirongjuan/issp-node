var app = angular.module('dayconfirm', ['toastr','ipCookie']);
app.controller('dayconfirmCtrl', function($scope,$state,toastr,daySer,$stateParams){

    $scope.confirmFun = function(){
        var data = {
            id:$stateParams.id,
            operatorStatus:$scope.operatorStatus,
        };
        console.log(data);
        daySer.confirmDay(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.day.list[12]');
                toastr.success( "经办人已成功确认！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


