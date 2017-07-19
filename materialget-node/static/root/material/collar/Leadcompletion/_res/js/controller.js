var app = angular.module('Leadcompletion', ['toastr','ipCookie']);
app.controller('LeadcompletionCtrl', function($scope,$state,$stateParams,toastr,collarSer){

    var getId = {id:$stateParams.id};
    collarSer.getCollar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }
    });
    //获取所有的地区
    collarSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的用户
    collarSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.LeadFun = function(){
        collarSer.LeadCollar($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.collar.list[12]');
                toastr.success( $scope.edit.handler+"已成功领用！", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





