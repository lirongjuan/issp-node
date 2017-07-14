var app = angular.module('courseCollectEdit', ['toastr']);
app.controller('courseCollectEditCtrl', function($scope, courseCollectSer,$state,toastr,$stateParams,$filter){
    var courseCollectId = {id : $stateParams.id};
    //获取值
    courseCollectSer.subjectsId(courseCollectId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.courseCollectEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.submitDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.data.income).toFixed(2);
        $scope.data.expenditure = Number($scope.data.expenditure).toFixed(2);
        courseCollectSer.subjectsEdit(data).then(function(response){
            
            if(response.data.code == 0){
                $state.go('root.subjectSummary.courseCollect.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});