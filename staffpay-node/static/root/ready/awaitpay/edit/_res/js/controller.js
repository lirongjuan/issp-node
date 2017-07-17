var app = angular.module('awaitpayEdit', ['toastr','ipCookie']);
app.controller('awaitpayEditCtrl', function($scope,$state,$stateParams,toastr,awaitpaySer){

    var getId = {id:$stateParams.id};
    awaitpaySer.getAwaitpay(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.waitEditFun = function(){
        $scope.edit.startPaidCycle=angular.element('.starttime').val();
        $scope.edit.endPaidCycle=angular.element('.endtime').val();
        $scope.edit.firstPayTime=angular.element('.onetime').val();
        $scope.edit.secondPayTime=angular.element('.twotime').val();

        awaitpaySer.editAwaitpay($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.ready.awaitpay.list[12]');
                toastr.success( $scope.edit.name+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





