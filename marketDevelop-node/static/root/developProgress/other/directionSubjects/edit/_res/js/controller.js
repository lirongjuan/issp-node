var app = angular.module('directionEdit', ['toastr']);
app.controller('directionEditCtrl', function($scope, directionSer,$stateParams,$state,toastr){
    var measuredData ={courseId: $stateParams.id};

    //获取ID
    directionSer.findCourseId(measuredData).then(function(response){
        if(response.data.code== 0){
            $scope.editCourse= response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.CourseEditFun = function(){
        var vm = $scope;
        directionSer.courseEdit(vm.editCourse).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.other.directionSubjects.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





