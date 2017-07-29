var app = angular.module('companyEdit', ['toastr']);
app.controller('companyEditCtrl', function($scope, coststatusSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    coststatusSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //获取所有的项目名称
    coststatusSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else {
             toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.backDate = angular.element('.backDate').val();
        var data = $scope.data;
        data.id = companyId.id;
        coststatusSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.coststatus.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   