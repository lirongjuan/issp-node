var app = angular.module('voucher', ['toastr']);
app.controller('hasPayVoucherCtrl', function($scope, hasPaySer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    hasPaySer.bVoucher(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});