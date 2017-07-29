var app = angular.module('implementationAdd', ['toastr']);
app.controller('implementationAddCtrl', function($scope, implementationSer,$state,toastr){
        $scope.projectCarryFun = function(){
        var vm = $scope;
        implementationSer.addProjectCarry(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.implementation.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





