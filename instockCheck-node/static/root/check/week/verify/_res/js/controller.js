var app = angular.module('weekverify', ['toastr','ipCookie']);
app.controller('weekverifyCtrl', function($scope,$state,toastr,weekSer,$stateParams){

    $scope.verifyFun = function(){
        var data = {
            id:$stateParams.id,
            accountStatus:$scope.accountStatus,
        };
        weekSer.verifyWeek(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.week.list[12]');
                toastr.success( "财务模块成功核实！", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


