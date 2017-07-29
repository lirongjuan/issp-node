var app = angular.module('artificialAdd', ['toastr']);
app.controller('artificialAddCtrl', function($scope, artificialSer,$state,toastr){
    $scope.artAddFun = function(){
        var vm = $scope;
        artificialSer.addArtificial(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.artificial.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





