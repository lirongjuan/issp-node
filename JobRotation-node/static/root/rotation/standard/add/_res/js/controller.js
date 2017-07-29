var app = angular.module('standardAdd', ['toastr']);
app.controller('standardAddCtrl', function($scope, standSer,$state,toastr){
    //添加
    $scope.standardAddFun = function(){

        var vm = $scope;
        //只取两位小数
        vm.stand.standard = Number($scope.standard).toFixed(2);
        standSer.standAdd(vm.stand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.standard.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});




