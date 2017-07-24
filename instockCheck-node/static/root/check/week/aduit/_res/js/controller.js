var app = angular.module('weekaduit', ['toastr','ipCookie']);
app.controller('weekaduitCtrl', function($scope,$state,toastr,weekSer,$stateParams){

    $scope.aduitFun = function(){
        var data = {
            id:$stateParams.id,
            zjbStatus:$scope.zjbStatus,
        };
        weekSer.aduitWeek(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.week.list[12]');
                toastr.success("总经办已成功审核", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


