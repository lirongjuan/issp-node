var app = angular.module('collarEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('collarEditCtrl', function($scope,$state,$stateParams,toastr,collarSer){
    var getId = {id:$stateParams.id};
    collarSer.getCollar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
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
    //获取所有的编号
    collarSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.getNo=response.data.data
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
    $scope.collarEditFun = function(){
        $scope.edit.receiveDate=angular.element('.twotime').val();
        collarSer.editCollar($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.card.collar.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





