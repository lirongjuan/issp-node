var app = angular.module('appPlanaudit', ['toastr','ipCookie']);
app.controller('appPlanauditCtrl', function($scope,$state,$stateParams,toastr,applicationSer){

    var getId = {id:$stateParams.id};
    applicationSer.getApp(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.PlanAuditFun = function(){
       var data={
           id :$scope.edit.id,
           planAuditOpinion:$scope.edit.planAuditOpinion,
       }
       console.log(data);
        applicationSer.auditPlan(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.emption.application.list[12]');
                toastr.success( "审核成功!", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





