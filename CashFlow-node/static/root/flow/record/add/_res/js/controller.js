var app = angular.module('recordAdd', ['toastr']);
app.controller('recordAddCtrl', function($scope, recordSer,$state,toastr){
    // 地区
    recordSer.areas().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    // 项目名称
    recordSer.projects().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }
    });
    // 项目组
    recordSer.projectGroups().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
        }
    });
    //添加个人能力
    $scope.recordAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.recordDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.income).toFixed(2);
        $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        recordSer.moneyAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.flow.record.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





