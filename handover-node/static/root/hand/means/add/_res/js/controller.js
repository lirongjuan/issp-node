var app = angular.module('meansAdd', ['toastr','ipCookie']);
app.controller('meansAddCtrl', function($scope,$state,toastr,meansSer){
    //获取所有的项目组
    meansSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.meansAddFun = function(){
        meansSer.addMeans($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.means.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


