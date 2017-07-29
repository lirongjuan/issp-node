var app = angular.module('otherAdd', ['toastr']);
app.controller('otherAddCtrl', function($scope, otherSer,$state,toastr){
    
    //添加
    $scope.otherAddFun = function(){
        $scope.other.useDate = angular.element('.useDate').val();//使用时间
        otherSer.addother($scope.other).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.other.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




