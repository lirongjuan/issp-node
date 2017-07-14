var app = angular.module('carAdd', ['toastr','ipCookie']);
app.controller('carAddCtrl', function($scope,$state,toastr,carSer){

    $scope.basicAddFun = function(){
        $scope.add.times=angular.element('.times').val();
        $scope.add.heirTime=angular.element('.heirTime').val();
        carSer.addCar($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.car.list[12]');
                toastr.success( $scope.add.contractName+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


