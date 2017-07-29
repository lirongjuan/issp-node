var app = angular.module('deviceAdd', ['toastr']);
app.controller('deviceAddCtrl', function($scope,deviceSer,$state,toastr){
    //添加
    $scope.workersAddFun = function(){
        var vm = $scope;
        deviceSer.addDeviceWorkers(vm.workers).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.deviceType.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});




