var app = angular.module('moveVerify', ['toastr','ipCookie']);
app.controller('moveVerifyCtrl', function($scope,$state,toastr,moveSer,$stateParams){
    var getId = {id:$stateParams.id};
    moveSer.getMove(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.verifyFun = function(){
        var data = {
            id:$stateParams.id,
            welfareState:$scope.edit.welfareState,
        };
        moveSer.verifyMove(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.shift.move.list[12]');
                toastr.success( "福利模块负责人成功核实！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


