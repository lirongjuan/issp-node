var app = angular.module('carAdd', ['toastr']);
app.controller('carAddCtrl', function($scope, carSer,$state,toastr){
    $scope.carAddFun = function(){
        var vm = $scope;
        carSer.addCar(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.car.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





