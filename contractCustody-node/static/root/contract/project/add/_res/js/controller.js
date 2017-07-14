var app = angular.module('projectAdd', ['toastr','ipCookie']);
app.controller('projectAddCtrl', function($scope,$state,toastr,projectSer){

    $scope.basicAddFun = function(){
        $scope.add.times=angular.element('.times').val();
        $scope.add.heirTime=angular.element('.heirTime').val();
        projectSer.addProject($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.project.list[12]');
                toastr.success( $scope.add.contractName+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


