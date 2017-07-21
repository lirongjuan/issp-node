var app = angular.module('repertoryEdit', ['toastr','ipCookie']);
app.controller('repertoryEditCtrl', function($scope,$state,$stateParams,toastr,repertorySer){
    //获取所有的地区
    repertorySer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    repertorySer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    var getId = {id:$stateParams.id};
    repertorySer.getRep(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    $scope.RepEditFun = function(){
        repertorySer.editRep($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.stock.repertory.list[12]');
                toastr.success( $scope.edit.projectGroup+"已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





