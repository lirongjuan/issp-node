var app = angular.module('businessVipAdd', ['toastr']);
app.controller('businessVipAddCtrl', function($scope, businessVipSer,$state,toastr){
    //添加
    $scope.businessVipAddFun = function(){
        businessVipSer.addbusinessVip($scope.businessVip).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.businessVip.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




