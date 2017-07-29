var app = angular.module('projectacceptanceAdd', ['toastr']);
app.controller('projectacceptanceAddCtrl', function($scope, projectacceptanceSer,$state,toastr){
    //添加公司能力
    $scope.acceptanceAddFun = function(){
        var vm = $scope;
        vm.add.startCheckTime = angular.element('.startCheckTime').val();
        projectacceptanceSer.addProjectAcceptance(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.projectacceptance.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





