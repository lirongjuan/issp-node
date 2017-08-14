var app = angular.module('applyManager', ['toastr','ipCookie']);
app.controller('applyManagerCtrl', function($scope,$state,toastr,applySer,$stateParams){
    var getId = {id:$stateParams.id};
    applySer.getApply(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.managerFun = function(){
        applySer.ApplyManager($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.apply.list[12]');
                toastr.success("项目经理已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


