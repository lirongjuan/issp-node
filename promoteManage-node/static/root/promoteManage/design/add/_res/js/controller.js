var app = angular.module('designAdd', ['toastr']);
app.controller('designAddCtrl', function($scope, designSer,$state,toastr){

    //添加
    $scope.designAddFun = function(){
        var data = $scope.design;
        designSer.adddesign(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.design.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});




