var app = angular.module('workEdit', ['toastr']);
app.controller('workEditCtrl', function($scope, workSer,$stateParams,$state,toastr){
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
    //获取交接人姓名
    // workSer.workName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.handovers = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    //获取被交接人姓名
    // workSer.workedName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.transferreds = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });

    //编辑点击提交
    $scope.workEditFun = function(){
        var vm = $scope;
        // vm.work.handover = angular.element('.handover').val();
        // vm.work.transferred = angular.element('.transferred').val();
        workSer.workEdit(vm.work).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.work.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





