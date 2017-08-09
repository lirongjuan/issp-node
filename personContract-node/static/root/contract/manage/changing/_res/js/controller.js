var app = angular.module('manageChanging', ['toastr','ipCookie']);
app.controller('manageChangingCtrl', function($scope,$state,toastr,manageSer,$stateParams){
    var getId = {id:$stateParams.id};
    $scope.AddFun = function(){
        $scope.add.contractId=getId;
        $scope.add.change = angular.element('.change').val();
        manageSer.addchange($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.manage.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


