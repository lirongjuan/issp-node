var app = angular.module('currencyEdit', ['toastr']);
app.controller('currenyEditCtrl', function($scope, currencySer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    currencySer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.monthList = [1,2,3,4,5,6,7,8,9,10,11,12];//月份
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        // $scope.data.target = Number($scope.target).toFixed(2);//目标费用
        // $scope.data.actual = Number($scope.actual).toFixed(2);//实际费用
        currencySer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.otherexpenses.expenses.message.list[12]');
                toastr.success("此次编辑成功",'温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示' );
            }
        })
    }
    
});
   