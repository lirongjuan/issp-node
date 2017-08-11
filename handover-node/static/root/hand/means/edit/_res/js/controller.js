var app = angular.module('meansEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('meansEditCtrl', function($scope,$state,$stateParams,toastr,meansSer){

    var getId = {id:$stateParams.id};
    meansSer.getMeans(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的项目组
    meansSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.meansEditFun = function(){
        meansSer.editMeans($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.means.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





