var app = angular.module('numberAdd', ['toastr']);
app.controller('numberAddCtrl', function($scope, numberSer,$state,toastr){
    $scope.numberAddFun = function(){
        var vm = $scope;
        numberSer.addNumber(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.number.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





