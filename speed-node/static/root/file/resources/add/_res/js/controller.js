var app = angular.module('resourcesAdd', ['toastr']);
app.controller('resourcesAddCtrl', function($scope, resourcesSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        resourcesSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.resources.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





