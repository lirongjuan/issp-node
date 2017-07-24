var app = angular.module('yearsVerify', ['toastr','ipCookie']);
app.controller('yearsVerifyCtrl', function($scope,$state,toastr,yearsSer,$stateParams){

    $scope.verifyFun = function(){
        var data = {
            id:$stateParams.id,
            accountStatus:$scope.accountStatus,
        };
        weekSer.verifyYears(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.years.list[12]');
                toastr.success( "财务模块成功核实！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


