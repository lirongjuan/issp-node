var app = angular.module('businessVipEdit', ['toastr']);
app.controller('businessVipEditCtrl', function($scope, businessVipSer,$stateParams,$state,toastr){
    var businessVipData ={id: $stateParams.id};

    //获取ID
    businessVipSer.findbusinessVipId(businessVipData).then(function(response){
        if(response.data.code==0){
            $scope.businessVip = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.businessVipEditFun = function(){
        businessVipSer.editbusinessVip($scope.businessVip).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.businessVip.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





