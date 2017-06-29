var app = angular.module('directionAdd', ['toastr']);
app.controller('directionAddCtrl', function($scope, directionSer,$stateParams,$state,toastr){

    directionSer.courseGetType().then(function(response){
        if(response.data.code==0){
            $scope.courseType = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.courseAddFun = function(){
        var vm = $scope;
        directionSer.coursedAdd(vm.course).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.other.directionSubjects.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




