var app = angular.module('dateEdit', ['toastr']);
app.controller('dateEditCtrl', function($scope, dateSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    dateSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.targetDate = angular.element('.targetDate').val();
        dateSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.date.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});