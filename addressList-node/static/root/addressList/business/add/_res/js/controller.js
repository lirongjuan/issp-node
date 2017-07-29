var app = angular.module('businessAdd', ['toastr']);
app.controller('businessAddCtrl', function($scope, businessSer,$state,toastr){
    //添加
    $scope.businessAddFun = function(){
        if($scope.business.isSend == 'true'){$scope.business.sendObject = $scope.objLists;};
        businessSer.addbusiness($scope.business).then(function(response){
            if(response.data.code == 0){
                $state.go('root.addressList.business.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




