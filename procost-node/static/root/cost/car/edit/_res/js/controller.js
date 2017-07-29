var app = angular.module('carEdit', ['toastr']);
app.controller('carEditCtrl', function($scope, carSer,$state,toastr,$stateParams){
    var carId = {id : $stateParams.id};
    //获取值
    carSer.getOneById(carId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.carEditFun = function(){
        var vm = $scope;
        carSer.editCar(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.car.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});