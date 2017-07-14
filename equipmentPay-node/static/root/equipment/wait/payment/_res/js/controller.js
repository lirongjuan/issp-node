var app = angular.module('waitPayment', ['toastr']);
app.controller('waitPaymentCtrl', function($scope, waitSer,$stateParams,$state,toastr){
$scope.showed=true
    if($stateParams.id){
        switch ($stateParams.name){
            case 'payment':
                $scope.payShow = true;
                break;
        }
    }
    //点击提交
    $scope.paymentFun = function(){
        var data={
            payTime:angular.element('.time').val(),
            id:$stateParams.id
        }
        waitSer.paymentWait(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.equipment.wait.list[12]');
                toastr.success( "成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





