var app = angular.module('courseCollectAdd', ['toastr']);
app.controller('courseCollectAddCtrl', function($scope, courseCollectSer,$state,toastr){
    //添加
    $scope.courseCollectAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.courseCollectDate=d;
        //只取两位小数
        $scope.data.income = Number($scope.income).toFixed(2);
        $scope.data.expenditure = Number($scope.expenditure).toFixed(2);
        //后台没写选项中的例子
        courseCollectSer.subjectsAudit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.processing.courseCollect.list');
                toastr.success( "公司已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





