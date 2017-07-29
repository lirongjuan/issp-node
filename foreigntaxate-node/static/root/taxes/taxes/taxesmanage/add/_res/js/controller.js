var app = angular.module('messageAdd', ['toastr']);
app.controller('taxesmanageAddCtrl', function($scope, taxesmanageSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        $scope.data.month = angular.element('.month').val();//月份
        taxesmanageSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.taxes.taxes.taxesmanage.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    
});



