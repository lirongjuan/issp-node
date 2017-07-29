var app = angular.module('borrowRecordEdit', ['toastr']);
app.controller('borrowRecordeditCtrl', function($scope, borrowRecordSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据 
    borrowRecordSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //点击提交
    $scope.EditFun =function(){
        if(!$scope.data.returnAccount)return
        $scope.data.returnDate = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        borrowRecordSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.borrowRefund.borrowManage.borrowRecord.list[12]');
                toastr.success('温馨提示',"此次还款成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});
   