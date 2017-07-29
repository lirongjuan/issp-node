var app = angular.module('Predict', ['toastr','angularjs-dropdown-multiselect']);
app.controller('rwaitPaymentPredictCtrl', function($scope, rwaitPaymentSer,$state,toastr,$stateParams){
    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'runNum',idProperty: 'id'};
    rwaitPaymentSer.listInfor().then(function(response){
        if(response.data.code==0){
            $scope.workOptions= response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击提交
    $scope.payFun =function(){
        $scope.data.budgetPayTime = angular.element('.time').val();
        $scope.data.reimNumbers = [];
        for(var i = 0; i< $scope.positions.length;i++){
            $scope.data.reimNumbers[i] = $scope.positions[i].runNum;
        }
        var data = $scope.data;
        rwaitPaymentSer.predictPay(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.refundManage.rwaitPayment.list[12]');
                toastr.success("此次编辑成功",'温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   