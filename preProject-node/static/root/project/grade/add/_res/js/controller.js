var app = angular.module('gradeAdd', ['toastr']);
app.controller('gradeAddCtrl', function($scope,$state,toastr,gradeSer){
    $scope.gradeAddFun = function(){
        gradeSer.addGrade($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.grade.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





