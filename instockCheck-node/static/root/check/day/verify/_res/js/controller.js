var app = angular.module('dayverify', ['toastr','ipCookie']);
app.controller('dayverifyCtrl', function($scope,$state,toastr,daySer,$stateParams){

    $scope.verifyFun = function(){
        var data = {
            id:$stateParams.id,
            accountStatus:$scope.accountStatus,
        };
        daySer.verifyDay(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.day.list[12]');
                toastr.success( "财务模块成功核实！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


