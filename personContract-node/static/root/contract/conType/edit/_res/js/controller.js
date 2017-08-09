var app = angular.module('conTypeEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('conTypeEditCtrl', function($scope,$state,$stateParams,toastr,conTypeSer){
    var getId = {id:$stateParams.id};
    conTypeSer.getType(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    $scope.typeEditFun = function(){
        conTypeSer.editType($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.contract.conType.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





