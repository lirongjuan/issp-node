var app = angular.module('controlAdd', ['toastr']);
app.controller('controlAddCtrl', function($scope, controlSer,$state,toastr){
    $scope.controlAddFun = function(){
        var vm = $scope;
        controlSer.addControl(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.control.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





