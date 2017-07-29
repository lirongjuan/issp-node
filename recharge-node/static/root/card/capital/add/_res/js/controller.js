var app = angular.module('capitalAdd', ['toastr']);
app.controller('capitalAddCtrl', function($scope, capitalSer,$state,toastr){
    $scope.capAddFun = function(){
        var vm = $scope;
        capitalSer.addCapital(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.card.capital.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





