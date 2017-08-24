var app = angular.module('rechargeAdd', ['toastr','ipCookie']);
app.controller('rechargeAddCtrl', function($scope,$state,toastr,rechargeSer){
    rechargeSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.chargeAddFun = function(){
        $scope.add.rechargeDate=angular.element('.twotime').val();
        rechargeSer.addRecharge($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.card.recharge.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


