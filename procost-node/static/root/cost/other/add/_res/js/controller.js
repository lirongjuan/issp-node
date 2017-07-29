var app = angular.module('otherAdd', ['toastr']);
app.controller('otherAddCtrl', function($scope, otherSer,$state,toastr){
    $scope.otherAddFun = function(){
        var vm = $scope;
        otherSer.addOther(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.other.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





