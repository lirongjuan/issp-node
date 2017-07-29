var app = angular.module('workPeople', ['toastr']);
app.controller('workPeopleCtrl', function($scope, workSer,$stateParams,$state,toastr){
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
        workSer.workPeople(vm.work).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.work.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





