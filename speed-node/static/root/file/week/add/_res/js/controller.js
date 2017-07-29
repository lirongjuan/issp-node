var app = angular.module('weekAdd', ['toastr']);
app.controller('weekAddCtrl', function($scope, weekSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        weekSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.week.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





