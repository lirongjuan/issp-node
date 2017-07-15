var app = angular.module('materialAdd', ['toastr','ipCookie']);
app.controller('materialAddCtrl', function($scope,$state,toastr,materialSer,ipCookie,$location){

    $scope.materialAddFun = function(){
        $scope.add.suitableDateStart=angular.element('.starttime').val();
        $scope.add.suitableDateEnd=angular.element('.endtime').val();
        materialSer.addMaterial($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.material.list[12]');
                toastr.success( $scope.add.customerName+"已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





