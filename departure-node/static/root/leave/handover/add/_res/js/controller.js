var app = angular.module('handoverAdd', ['toastr']);
app.controller('handoverAddCtrl', function ($scope, handoverSer, $state, toastr) {
    $scope.showed=true
    
    //添加
    $scope.handAddFun = function () {
        var vm = $scope;
        
        handoverSer.handoverAdd(vm.handover).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.leave.handover.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




