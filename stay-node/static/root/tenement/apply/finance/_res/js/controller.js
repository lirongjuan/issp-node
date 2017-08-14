var app = angular.module('applyfinance', ['toastr','ipCookie']);
app.controller('applyfinanceCtrl', function($scope,$state,toastr,applySer,$stateParams){
    var getId = {id:$stateParams.id};
    applySer.getApply(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.financeFun = function(){
        applySer.Applyfinance($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.apply.list[12]');
                toastr.success("运营财务部已成功审核！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


