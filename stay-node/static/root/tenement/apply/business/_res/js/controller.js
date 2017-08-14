var app = angular.module('applyBusiness', ['toastr','ipCookie']);
app.controller('applyBusinessCtrl', function($scope,$state,toastr,applySer,$stateParams){
    var getId = {id:$stateParams.id};
    applySer.getApply(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.businessFun = function(){
        applySer.ApplyBusiness($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.apply.list[12]');
                toastr.success("商务发展部已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


