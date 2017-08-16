var app = angular.module('waitpayPay', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('waitpayPayCtrl', function($scope,$state,$stateParams,toastr,waitpaySer){


    var getId = {id:$stateParams.id};
    waitpaySer.getWait(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });


    waitpaySer.getMoneyAll().then(function (response){
        if (response.data.code==0){
            $scope.money= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.payWaitFun = function(){
        waitpaySer.PayWait($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.ready.waitpay.list[12]');
                    toastr.success("已成功付款！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





