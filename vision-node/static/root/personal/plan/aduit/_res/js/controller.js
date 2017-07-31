var app = angular.module('planAduit', ['toastr','ipCookie']);
app.controller('planAduitCtrl', function($scope,$state,toastr,planSer,$stateParams){
    var getId = {id:$stateParams.id};
    planSer.getPlan(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.aduitFun = function(){
        var data = {
            id:$stateParams.id,
            audit:$scope.edit.audit,
            auditStatus:$scope.edit.auditStatus,
        };
        planSer.aduitPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.personal.plan.list[12]');
                toastr.success("项目经理已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


