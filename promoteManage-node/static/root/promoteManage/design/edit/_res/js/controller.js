var app = angular.module('designEdit', ['toastr']);
app.controller('designEditCtrl', function($scope, designSer,$stateParams,$state,toastr){
    var designData ={id: $stateParams.id};

    
    //获取ID
    designSer.finddesignId(designData).then(function(response){
        if(response.data.code==0){
            $scope.design = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.designEditFun = function(){
        designSer.editdesign($scope.design).then(function(response){
            if(response.data.code == 0){
                $state.go('root.promoteManage.design.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





