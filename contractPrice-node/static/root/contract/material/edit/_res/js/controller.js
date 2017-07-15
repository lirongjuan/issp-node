var app = angular.module('materialEdit', ['toastr','ipCookie']);
app.controller('materialEditCtrl', function($scope,$state,$stateParams,toastr,materialSer,ipCookie,$location){

    var getId = {id:$stateParams.id};
    materialSer.getMaterial(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.materialEditFun = function(){
        $scope.edit.suitableDateStart=angular.element('.starttime').val();
        $scope.edit.suitableDateEnd=angular.element('.endtime').val();
        materialSer.editMaterial($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.material.list[12]');
                toastr.success( $scope.edit.area+"已成功编辑", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





