var app = angular.module('recordEdit', ['toastr']);
app.controller('recordEditCtrl', function($scope, recordSer,$state,toastr,$stateParams,$filter){
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
    var recordId = {id : $stateParams.id};
    //获取值
    recordSer.moneyId(recordId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.recordEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.recordDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.data.income).toFixed(2);
        $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        recordSer.moneyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.flow.record.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});