var app = angular.module('voucher', ['toastr']);
app.controller('voucherCtrl', function($scope, borrowRecordSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    borrowRecordSer.bVoucher(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
app.filter('cover',function(){
    return function(val){
        var result;
        switch (val){
            case 'PAY':
                result = '付';
                break;
            case 'TURN':
                result = '转';
                break;
            case 'GIVEWAY':
                result = '让';
                break;
            case 'COLLECT':
                result = '收';
                break;
        }
        return result;
    }
})