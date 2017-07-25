var app = angular.module('moveConfirm', ['toastr','ipCookie']);
app.controller('moveConfirmCtrl', function($scope,$state,toastr,moveSer,$stateParams){
    var getId = {id:$stateParams.id};
    moveSer.getMove(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    moveSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.confirmFun = function(){
        var data = {
            id:$stateParams.id,
            recipient:$scope.edit.recipient,
            confirmDeploy:$scope.edit.confirmDeploy,
            finishDeployTime:angular.element('.twotime').val()
        };
        moveSer.confirmMove(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.shift.move.list[12]');
                toastr.success( "经办人已成功确认！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


