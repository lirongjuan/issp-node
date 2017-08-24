var app = angular.module('basicInfoAdd', ['toastr','ipCookie']);
app.controller('basicInfoAddCtrl', function($scope,$state,toastr,basicInfoSer){
    $scope.basicAddFun = function(){
        $scope.add.handlingDate=angular.element('.onetime').val();
        basicInfoSer.addBasic($scope.add).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.card.basicInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


