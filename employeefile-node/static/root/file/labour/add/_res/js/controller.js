var app = angular.module('labourAdd', ['toastr']);
app.controller('labourAddCtrl', function($scope,labourSer,$state,toastr){
    $scope.labourAddFun = function(){
        var vm = $scope;
        labourSer.addLabour(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.labour.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





