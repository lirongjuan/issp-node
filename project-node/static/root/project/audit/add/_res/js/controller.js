var app = angular.module('auditAdd', ['toastr']);
app.controller('auditAddCtrl', function($scope, auditSer,$state,toastr){
    //添加公司能力
    $scope.auditAddFun = function(){
        var vm = $scope;
        auditSer.addAudit(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.audit.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





