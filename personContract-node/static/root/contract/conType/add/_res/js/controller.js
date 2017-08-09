var app = angular.module('conTypeAdd', ['toastr','ipCookie']);
app.controller('conTypeAddCtrl', function($scope,$state,toastr,conTypeSer){
    $scope.typeAddFun = function(){
        conTypeSer.addType($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.conType.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


