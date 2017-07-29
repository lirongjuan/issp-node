var app = angular.module('workHead', ['toastr']);
app.controller('workHeadCtrl', function($scope, workSer,$stateParams,$state,toastr){
    $scope.showed=true
    var workData ={id: $stateParams.id};
    //获取ID
    workSer.workId(workData).then(function(response){
        if(response.data.code==0){
            $scope.work = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //点击提交
    $scope.workEditFun = function(){
        var vm = $scope;
        
        workSer.workHead(vm.work).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.work.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





