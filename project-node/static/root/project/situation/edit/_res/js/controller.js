var app = angular.module('projectEdit', ['toastr']);
app.controller('projectEditCtrl', function($scope, situationSer,$state,toastr,$stateParams){
    var projectId = {id : $stateParams.id};
    //获取值
    situationSer.getOneById(projectId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }
    });
    $scope.projectEditFun = function(){
        var vm = $scope;
        vm.editInfo.startWorkTime = angular.element('.startWorkTime').val();
        vm.editInfo.planCompleteTime = angular.element('.planCompleteTime').val();
        vm.editInfo.completeTime = angular.element('.completeTime').val();
        situationSer.editProjectSituation(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.situation.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});