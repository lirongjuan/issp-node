var app = angular.module('annexAdd', ['toastr']);
app.controller('annexAddCtrl', function($scope,annexSer,$state,toastr){
    $scope.annexAddFun = function(){
        var vm = $scope;
        annexSer.addAnnex(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.annex.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





