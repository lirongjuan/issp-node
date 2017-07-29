var app = angular.module('collectAdd', ['toastr']);
app.controller('collectAddCtrl', function($scope, collectSer,$state,toastr){
    collectSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.collectAddFun = function(){
        var vm = $scope;
        collectSer.addCollect(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.collect.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





