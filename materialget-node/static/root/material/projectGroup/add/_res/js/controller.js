var app = angular.module('projectGroupAdd', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('projectGroupAddCtrl', function($scope,$state,toastr,projectGroupSer){
    //获取所有的用户
    projectGroupSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取所有的入库编号
    projectGroupSer.allGetNo().then(function(response){
        if(response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.positions = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.proAddFun = function(){
        var permitArr = [];
        if($scope.add){
            angular.forEach($scope.positions, function(item){
                permitArr.push(item)
            });
            $scope.add.materialNum = permitArr.join(',');
            $scope.add.receiveTime = angular.element('.onetime').val();
            projectGroupSer.addProject($scope.add).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.material.projectGroup.list[12]');
                    toastr.success($scope.add.materialName + "已成功添加", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }
    }
});





