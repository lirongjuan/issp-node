var app = angular.module('collarAudit', ['toastr','ipCookie']);
app.controller('collarAuditCtrl', function($scope,$state,$stateParams,toastr,collarSer){

    var getId = {id:$stateParams.id};
    collarSer.getCollar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.AuditFun = function(){
       var data={
           id :$scope.edit.id,
           auditResult:$scope.edit.auditResult,
           auditSuggestion:$scope.edit.auditSuggestion,
       }
        collarSer.auditCollar(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.card.collar.list[12]');
                toastr.success( "审核成功!", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





