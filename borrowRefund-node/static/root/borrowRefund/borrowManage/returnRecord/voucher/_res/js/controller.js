var app = angular.module('voucherC', ['toastr']);
app.controller('voucherCtrl', function($scope, returnRecordSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    returnRecordSer.rVoucher(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
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