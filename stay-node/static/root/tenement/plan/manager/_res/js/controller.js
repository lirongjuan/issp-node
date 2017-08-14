var app = angular.module('planManager', ['toastr','ipCookie']);
app.controller('planManagerCtrl', function($scope,$state,toastr,planSer,$stateParams){
    var getId = {id:$stateParams.id};
    planSer.getPlan(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.managerFun = function(){
        planSer.aduitManager($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.plan.list[12]');
                toastr.success("项目经理已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


