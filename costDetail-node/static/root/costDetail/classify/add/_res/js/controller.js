var app = angular.module('classifyAdd', ['toastr']);
app.controller('classifyAddCtrl', function($scope, classifySer,$state,toastr){
    //添加
    $scope.addFun = function(){
        var data = $scope.data;
        classifySer.addclassify(data).then(function(response){
            if(response.data.code == 0){
                toastr.success("已成功添加", '温馨提示');
                $state.go('root.costDetail.classify.add[12]');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});

