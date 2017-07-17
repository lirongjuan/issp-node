var app = angular.module('awaitpayAdd', ['toastr','ipCookie']);
app.controller('awaitpayAddCtrl', function($scope,$state,toastr,awaitpaySer){

    $scope.waitAddFun = function(){
        $scope.add.startPaidCycle=angular.element('.starttime').val();
        $scope.add.endPaidCycle=angular.element('.endtime').val();
        $scope.add.firstPayTime=angular.element('.onetime').val();
        $scope.add.secondPayTime=angular.element('.twotime').val();
        awaitpaySer.addAwaitpay($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ready.awaitpay.list[12]');
                toastr.success( $scope.add.name+"已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





