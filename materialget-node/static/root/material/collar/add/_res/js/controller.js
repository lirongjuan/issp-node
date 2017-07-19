var app = angular.module('collarAdd', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('collarAddCtrl', function($scope,$state,toastr,collarSer,$stateParams){

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
    $scope.CollarAddFun = function(){
        var permitArr = [];
        if($scope.add){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.add.materialNum=permitArr.join(',');
            $scope.add.receiveDate=angular.element('.onetime').val();
            collarSer.addCollar($scope.add).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.material.collar.list[12]');
                    toastr.success($scope.add.materialName + "已成功添加", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        };
    }
});





