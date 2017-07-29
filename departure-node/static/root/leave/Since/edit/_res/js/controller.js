var app = angular.module('sinEdit', ['toastr']);
app.controller('sinEditCtrl', function($scope, sinSer,$stateParams,$state,toastr){
    $scope.showed=true
    var sinData ={id: $stateParams.id};
    //获取ID
    sinSer.deparId(sinData).then(function(response){
        if(response.data.code==0){
            $scope.sin = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    // //离职人员姓名
    // sinSer.sinName().then(function(response){
    //     if(response.data.code==0){
    //         $scope.sinNames = response.data.data;
    //     }else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });

    //编辑点击提交
    $scope.sinEditFun = function(){
        var vm = $scope;
        vm.sin.applyDate = angular.element('.time1').val();
        vm.sin.advanceDate = angular.element('.time2').val();
        vm.sin.dimissionDate = angular.element('.time3').val();
        sinSer.deparEdit(vm.sin).then(function(response){
            if(response.data.code == 0){
                $state.go('root.leave.Since.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





