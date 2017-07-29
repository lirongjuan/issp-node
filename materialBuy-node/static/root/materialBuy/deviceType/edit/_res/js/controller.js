var app = angular.module('deviceEdit', ['toastr']);
app.controller('deviceEditCtrl', function($scope, deviceSer,$stateParams,$state,toastr){
    var deviceData ={id: $stateParams.id};

    //获取ID
    deviceSer.findDeviceId(deviceData).then(function(response){
        if(response.data.code==0){
            $scope.editDevice = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.deviceEditFun = function(){
        var vm = $scope;
        deviceSer.editDispatchDevice(vm.editDevice).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.deviceType.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





