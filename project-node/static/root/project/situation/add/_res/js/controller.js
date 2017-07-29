var app = angular.module('projectAdd', ['toastr']);
app.controller('projectAddCtrl', function($scope, situationSer,$state,toastr){
    //添加公司能力
    $scope.projectAddFun = function(){
        var vm = $scope;
        vm.add.startWorkTime = angular.element('.startWorkTime').val();
        vm.add.planCompleteTime = angular.element('.planCompleteTime').val();
        vm.add.completeTime = angular.element('.completeTime').val();
        situationSer.addProjectSituation(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.situation.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





