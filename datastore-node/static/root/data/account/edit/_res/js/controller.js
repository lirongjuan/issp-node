var app = angular.module('accountEdit', ['toastr']);
app.controller('accountEditCtrl', function($scope, accountSer,$state,toastr,$stateParams){
    var accId = {id : $stateParams.id};
    accountSer.getOneById(accId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.accEditFun = function(){
        var vm = $scope;
        accountSer.editAccount(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.account.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});