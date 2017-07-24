var app = angular.module('dayaduit', ['toastr','ipCookie']);
app.controller('dayaduitCtrl', function($scope,$state,toastr,daySer,$stateParams){

    $scope.aduitFun = function(){
        var data = {
            id:$stateParams.id,
            zjbStatus:$scope.zjbStatus,
        };
        daySer.aduitDay(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.day.list[12]');
                toastr.success("总经办已成功审核", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


