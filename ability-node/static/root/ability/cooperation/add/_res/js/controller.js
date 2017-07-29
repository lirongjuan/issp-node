var app = angular.module('cooperationAdd', ['toastr']);
app.controller('cooperationAddCtrl', function($scope, cooperationSer,$state,toastr){
    //添加个人能力
    $scope.cooperationAddFun = function(){
        var vm = $scope;
        cooperationSer.addCooperationAbility(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ability.cooperation.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





