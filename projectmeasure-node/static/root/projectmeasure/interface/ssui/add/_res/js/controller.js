var app = angular.module('ssuiAdd', ['toastr']);
app.controller('ssuiAddCtrl', function($scope, ssuiSer,$state,toastr){
    //获取值项目名称
    ssuiSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.companyAddFun = function(){
        var data = $scope.data;
        ssuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.ssui.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
    $scope.interfaceSelectvs = ['CONSTRUCTION','DESIGN','SUPERVISE','SOLUTION_PROVIDER','CONTROL'];
    $scope.projectCategorys = ['projectCategory','projectCategory','projectCategory','projectCategory']
});




