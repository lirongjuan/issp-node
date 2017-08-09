var app = angular.module('conNatureAdd', ['toastr','ipCookie']);
app.controller('conNatureAddCtrl', function($scope,$state,toastr,conNatureSer){
    $scope.typeAddFun = function(){
        conNatureSer.addNature($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.conNature.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


