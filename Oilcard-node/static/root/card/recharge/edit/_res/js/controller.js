var app = angular.module('rechargeEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('rechargeEditCtrl', function($scope,$state,$stateParams,toastr,rechargeSer){
    var getId = {id:$stateParams.id};
    rechargeSer.getRecharge(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的编号
    rechargeSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.chargeEditFun = function(){
        $scope.edit.rechargeDate=angular.element('.twotime').val();
        rechargeSer.editRecharge($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.card.recharge.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





