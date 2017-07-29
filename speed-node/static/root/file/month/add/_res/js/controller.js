var app = angular.module('monthAdd', ['toastr']);
app.controller('monthAddCtrl', function($scope, monthSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        monthSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.month.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





