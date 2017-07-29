var app = angular.module('otherEdit', ['toastr']);
app.controller('otherEditCtrl', function($scope, otherSer,$state,toastr,$stateParams){
    var carId = {id : $stateParams.id};
    //获取值
    otherSer.getOneById(carId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.otherEditFun = function(){
        var vm = $scope;
        otherSer.editOther(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.other.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});