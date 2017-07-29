var app = angular.module('numberEdit', ['toastr']);
app.controller('numberEditCtrl', function($scope, numberSer,$state,toastr,$stateParams){
    var numId = {id : $stateParams.id};
    numberSer.getOneById(numId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.numberEditFun = function(){
        var vm = $scope;
        numberSer.editNumber(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.data.number.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});