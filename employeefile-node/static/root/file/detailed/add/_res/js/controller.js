var app = angular.module('detailedAdd', ['toastr']);
app.controller('detailedAddCtrl', function($scope, detailedSer,$state,toastr){
    detailedSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.detailedAddFun = function(){
        var vm = $scope;
        detailedSer.addDetailed(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.detailed.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





