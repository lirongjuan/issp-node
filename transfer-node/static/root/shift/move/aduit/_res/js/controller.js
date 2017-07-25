var app = angular.module('moveAduit', ['toastr','ipCookie']);
app.controller('moveAduitCtrl', function($scope,$state,toastr,moveSer,$stateParams){
    var getId = {id:$stateParams.id};
    moveSer.getMove(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.aduitFun = function(){
        var data = {
            id:$stateParams.id,
            pmAuditState:$scope.edit.pmAuditState,
        };
        moveSer.aduitMove(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.shift.move.list[12]');
                toastr.success("项目经理已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


