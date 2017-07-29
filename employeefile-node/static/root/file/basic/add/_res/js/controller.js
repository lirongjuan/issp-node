var app = angular.module('basicAdd', ['toastr']);
app.controller('basicAddCtrl', function($scope, basicSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        basicSer.addBasic(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.basic.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





