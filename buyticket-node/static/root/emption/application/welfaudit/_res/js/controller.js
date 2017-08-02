var app = angular.module('appwelfaudit', ['toastr','ipCookie']);
app.controller('appwelfauditCtrl', function($scope,$state,$stateParams,toastr,applicationSer){

    var getId = {id:$stateParams.id};
    applicationSer.getApp(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.welfAuditFun = function(){
       var data={
           id :$scope.edit.id,
           welfAuditOpinion:$scope.edit.welfAuditOpinion,
       }
        applicationSer.auditWelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.emption.application.list[12]');
                toastr.success( "审核成功!", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





