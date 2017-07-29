var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, scoringSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    scoringSer.scoringId(webData).then(function(response){
        if(response.data.code==0){
            $scope.scoring = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.scoringEditFun = function(){
        var vm = $scope;
        scoringSer.scoringEdit(vm.scoring).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.scoring.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





