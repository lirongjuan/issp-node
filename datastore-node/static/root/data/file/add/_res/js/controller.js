var app = angular.module('fileAdd', ['toastr']);
app.controller('fileAddCtrl', function($scope, fileSer,$state,toastr){
    $scope.fileAddFun = function(){
        var vm = $scope;
        vm.add.releaseTime=angular.element('.releaseTime').val();
        vm.add.updateTime=angular.element('.updateTime').val();
        fileSer.addFile(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.file.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





