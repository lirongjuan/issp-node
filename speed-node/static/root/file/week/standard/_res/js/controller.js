var app = angular.module('weekStandard', ['toastr']);
app.controller('weekStandardCtrl', function($scope, weekSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    weekSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        weekSer.editStand(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.week.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});