var app = angular.module('statiEdit', ['toastr']);
app.controller('statiEditCtrl', function($scope, statiSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    statiSer.gitName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });

    statiSer.gitTier().then(function(response){
        if(response.data.code == 0){
            $scope.applyLevelIds = response.data.data;
        }
    });
    //获取ID
    statiSer.statId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.stst = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.ststEditFun = function(){
        var vm = $scope;
        vm.stst.username = angular.element('.na').val();
        vm.stst.arrangementId = angular.element('.le').val();
        vm.stst.subsidyStart = angular.element('.time1').val();
        vm.stst.subsidyEnd = angular.element('.time2').val();
        vm.stst.occupyStart = angular.element('.time3').val();
        vm.stst.occupyEnd = angular.element('.time4').val();
        statiSer.statEdit(vm.stst).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.statistical.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





