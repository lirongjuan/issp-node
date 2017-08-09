var app = angular.module('conNatureEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('conNatureEditCtrl', function($scope,$state,$stateParams,toastr,conNatureSer){
    var getId = {id:$stateParams.id};
    conNatureSer.getNature(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.typeEditFun = function(){
        conNatureSer.editNature($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.contract.conNature.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





