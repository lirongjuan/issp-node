var app = angular.module('invoicesubmitAdd', ['toastr']);
app.controller('invoicesubmitAddCtrl', function($scope, invoicesubmitSer,$state,toastr){
    //添加
    $scope.invoicesubmitAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.submitDate=d;
        //后台没写选项中的例子
        invoicesubmitSer.invoicesubmitAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.processing.invoicesubmit.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





