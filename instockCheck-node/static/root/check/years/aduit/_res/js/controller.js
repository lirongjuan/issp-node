var app = angular.module('yearsAduit', ['toastr','ipCookie']);
app.controller('yearsAduitCtrl', function($scope,$state,toastr,yearsSer,$stateParams){

    $scope.aduitFun = function(){
        var data = {
            id:$stateParams.id,
            zjbStatus:$scope.zjbStatus,
        };
        yearsSer.aduitYears(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.years.list[12]');
                toastr.success("总经办已成功审核", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


