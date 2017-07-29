var app = angular.module('businessEdit', ['toastr']);
app.controller('businessEditCtrl', function($scope, businessSer,$stateParams,$state,toastr){
    var businessData ={id: $stateParams.id};

    //获取ID
    businessSer.findbusinessId(businessData).then(function(response){
        if(response.data.code==0){
            $scope.business = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.businessEditFun = function(){
        businessSer.editbusiness($scope.business).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.business.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





