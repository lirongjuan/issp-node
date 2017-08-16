var app = angular.module('capitalAdd', ['toastr','ipCookie']);
app.controller('capitalAddCtrl', function($scope,$state,toastr,capitalSer){
    $scope.CapAddFun = function(){
        $scope.add.time=angular.element('.time').val();
        capitalSer.addCap($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ready.capital.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


