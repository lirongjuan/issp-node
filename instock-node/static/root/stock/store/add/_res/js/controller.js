var app = angular.module('storeAdd', ['toastr','ipCookie']);
app.controller('storeAddCtrl', function($scope,$state,toastr,storeSer){

    //获取所有的用户
    storeSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的地区
    storeSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    storeSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.StoreAddFun = function(){
        if($scope.add){
            $scope.add.instockDate=angular.element('.instock').val();
            $scope.add.lendDate=angular.element('.lend').val();
            $scope.add.buyDate=angular.element('.buy').val();
            $scope.add.purchaseDate=angular.element('.purchase').val();
            storeSer.addStore($scope.add).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.stock.store.list[12]');
                    toastr.success($scope.add.projectGroup + "已成功添加", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        };
    }
});





