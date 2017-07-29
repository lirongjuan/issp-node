var app = angular.module('recomAdd', ['toastr']);
app.controller('recomAddCtrl', function ($scope, recomSer, $state, toastr) {
    $scope.showed=true
    recomSer.gitName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });

    recomSer.gitLevel().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });
    //添加
    $scope.recomAddFun = function () {
        var vm = $scope;
        vm.recom.username = angular.element('.na').val();
        vm.recom.applyLevelId = angular.element('.le').val();
        recomSer.recomAdd(vm.recom).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.rotation.recommended.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




