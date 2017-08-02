var app = angular.module('basicInfoAdd', ['toastr','ipCookie']);
app.controller('basicInfoAddCtrl', function($scope,$state,toastr,basicInfoSer){

    $scope.basicAddFun = function(){
        basicInfoSer.addBasic($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.emption.basicInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


