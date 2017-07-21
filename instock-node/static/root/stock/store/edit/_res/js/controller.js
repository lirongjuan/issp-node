var app = angular.module('storeEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('storeEditCtrl', function($scope,$state,$stateParams,toastr,storeSer){

    var getId = {id:$stateParams.id};
    storeSer.getStore(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    storeSer.getUserAll().then(function (response){
        if(response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的地区
    storeSer.getAreaAll().then(function (response){
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
    $scope.StoreEditFun = function(){
            $scope.edit.instockDate=angular.element('.instock').val();
            $scope.edit.lendDate=angular.element('.lend').val();
            $scope.edit.buyDate=angular.element('.buy').val();
            $scope.edit.purchaseDate=angular.element('.purchase').val();
            storeSer.editStore($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.stock.store.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





