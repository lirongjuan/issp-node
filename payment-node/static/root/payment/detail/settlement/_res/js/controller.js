var app = angular.module('settlement', ['toastr']);
app.controller('settlementCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.settleInfo = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
        $scope.groups = [
              { name: 'A1', progress:[{name: '工程督导和网优单位站点准备'}]},
              { name: 'A2', progress: [{name: '结算站点核对会审'}]},
              { name: 'A3', progress: [{name: '输出会审报告签字'}]},
              { name: 'B1', progress: [{name: '资料制作'}]},
              { name: 'B2', progress: [{name: '资料员签字'}]},
              { name: 'B3', progress: [{name: '工程经理签字'}]},
              { name: 'B4', progress: [{name: '外包主管签字'}]},
              { name: 'C1', progress: [{name: '工作量确认申请'}]},
              { name: 'C2', progress: [{name: '中兴质量经理审批'}]},
              { name: 'C3', progress: [{name: '中兴工程经理审批'}]},
              { name: 'C4', progress: [{name: '预接收提交'}]},
              { name: 'C5', progress: [{name: '中兴工程经理审批，提交扫描件'}]},
              { name: 'C6', progress: [{name: '中兴外包经理审批'}]},
              { name: 'C7', progress: [{name: '中兴办事处副经理审批'}]},
              { name: 'D1', progress: [{name: '开具增值税发票'}]},
              { name: 'D2', progress: [{name: 'ERP系统提交电子版发票审核'}]},
              { name: 'D3', progress: [{name: '邮寄实物发票'}]},
              { name: 'D4', progress: [{name: '电子发票审核完成，显示预计支付时间'}]},
        ];
        $scope.myFunc = function(){
            $scope.selectOptions = $scope.groups.filter(function(group){
                return group.name == $scope.group;
            })[0].progress;
        };
    //编辑点击提交
    $scope.settlementEditFun = function(){
        var vm = $scope;
        var data ={
            id:vm.settleInfo.id,
            group:vm.group,
            progress:vm.progress.name,
        };
        detailSer.listNameGroup(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





