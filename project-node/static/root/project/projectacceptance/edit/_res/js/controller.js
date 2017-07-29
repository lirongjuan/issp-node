var app = angular.module('projectacceptanceEdit', ['toastr']);
app.controller('projectacceptanceEditCtrl', function($scope, projectacceptanceSer,$state,toastr,$stateParams){
    var acceptanceId = {id : $stateParams.id};
    //获取值
    projectacceptanceSer.getAcceptanceById(acceptanceId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.acceptanceProjectEditFun = function(){
        var vm = $scope;
        vm.editInfo.startCheckTime = angular.element('.startCheckTime').val();
        projectacceptanceSer.editProjectAcceptance(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.projectacceptance.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});