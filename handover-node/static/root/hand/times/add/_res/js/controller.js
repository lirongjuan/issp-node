var app = angular.module('timesAdd', ['toastr','ipCookie']);
app.controller('timesAddCtrl', function($scope,$state,toastr,timesSer){

    $scope.TimesAddFun = function(){
        timesSer.addTimes($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.times.list[12]');
                toastr.success("已成功添加!", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


