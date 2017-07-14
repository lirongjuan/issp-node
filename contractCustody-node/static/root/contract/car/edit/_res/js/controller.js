var app = angular.module('carEdit', ['toastr','ipCookie']);
app.controller('carEditCtrl', function($scope,$state,$stateParams,toastr,carSer){

    var getId = {id:$stateParams.id};
    carSer.getCar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.ProEditFun = function(){
        $scope.edit.times=angular.element('.times').val();
        $scope.edit.heirTime=angular.element('.heirTime').val();
        carSer.editCar($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.car.list[12]');
                toastr.success( $scope.edit.contractName+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





