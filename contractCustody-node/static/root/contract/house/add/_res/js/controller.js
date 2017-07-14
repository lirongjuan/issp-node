var app = angular.module('houseAdd', ['toastr','ipCookie']);
app.controller('houseAddCtrl', function($scope,$state,toastr,houseSer){

    $scope.basicAddFun = function(){
        $scope.add.times=angular.element('.times').val();
        $scope.add.heirTime=angular.element('.heirTime').val();
        houseSer.addHouse($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.house.list[12]');
                toastr.success( $scope.add.contractName+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


