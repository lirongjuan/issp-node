var app = angular.module('collarEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('collarEditCtrl', function($scope,$state,$stateParams,toastr,collarSer){

    var getId = {id:$stateParams.id};
    collarSer.getCollar(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
            $scope.positions = $scope.edit.materialNo.split(",");
        }
    });
    //获取所有的用户
    collarSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
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
    //获取所有的项目组
    collarSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的入库编号
    collarSer.allGetNo().then(function(response){

        if(response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.positions = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.EditFun = function(){
        var permitArr = [];
        if($scope.edit){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.edit.materialNum = permitArr.join(',');
            $scope.edit.receiveDate = angular.element('.onetime').val();
            collarSer.editCollar($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.material.collar.list[12]');
                    toastr.success($scope.edit.materialName + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
        }
    };
});





