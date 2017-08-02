var app = angular.module('standardAdd', ['toastr','ipCookie']);
app.controller('standardAddCtrl', function($scope,$state,toastr,standardSer){

    $scope.standAddFun = function(){
        standardSer.addStand($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.emption.standard.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


