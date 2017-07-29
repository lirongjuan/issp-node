var app = angular.module('marketservecustomerAdd', ['toastr']);
app.controller('marketserveAddcustomerCtrl', function($scope, marketserveSer,$state,toastr,$stateParams){

    //添加
    $scope.customerAddFun = function(){
        $scope.data.marketServeId = $stateParams.id;
        var data = $scope.data;
        marketserveSer.addCustomerinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        });
    };
});




