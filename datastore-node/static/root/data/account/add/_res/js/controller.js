var app = angular.module('accountAdd', ['toastr']);
app.controller('accountAddCtrl', function($scope, accountSer,$state,toastr){
    $scope.accAddFun = function(){
        var vm = $scope;
        accountSer.addAccount(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.account.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





