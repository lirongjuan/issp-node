var app = angular.module('readyAdd', ['toastr']);
app.controller('readyAddCtrl', function($scope, readySer,$state,toastr){
    $scope.readyAddFun = function(){
        var vm = $scope;
        readySer.addReady(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.bonus.ready.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





