var app = angular.module('checkincomeEdit', ['toastr']);
app.controller('checkincomeeditCtrl', function($scope, checkincomeSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    checkincomeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.time = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        checkincomeSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkincome.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
   