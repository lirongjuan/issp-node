var app = angular.module('firstsubjectEdit', ['toastr']);
app.controller('EditCtrl', function($scope, firstsubjectSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    firstsubjectSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.startTime = angular.element('.startTiming').val();//开始时间
        var data = $scope.data;
        data.id = companyId.id;;
        firstsubjectSer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.initialize.setting.firstsubject.list[12]');
                toastr.success("此次编辑成功",'温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   