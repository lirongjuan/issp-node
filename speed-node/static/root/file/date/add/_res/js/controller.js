var app = angular.module('dateAdd', ['toastr']);
app.controller('dateAddCtrl', function($scope, dateSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.targetDate = angular.element('.targetDate').val();
        dateSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.date.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





