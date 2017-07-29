var app = angular.module('checkindexEdit', ['toastr']);
app.controller('checkindexEditCtrl', function($scope, checkindexSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    checkindexSer.getById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });

    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        checkindexSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkindex.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   