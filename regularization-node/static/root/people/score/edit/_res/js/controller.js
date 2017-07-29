var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, scoreSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    scoreSer.scoreId(webData).then(function(response){
        if(response.data.code==0){
            $scope.score = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.scoreEditFun = function(){
        var vm = $scope;
        scoreSer.scoreEdit(vm.score).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.score.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





