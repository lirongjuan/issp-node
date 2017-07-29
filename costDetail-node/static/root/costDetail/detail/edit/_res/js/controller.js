var app = angular.module('detailEdit', ['toastr']);
app.controller('detailEditCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var detailData ={id: $stateParams.id};
  
    //获取ID
    detailSer.finddetailId(detailData).then(function(response){
        if(response.data.code==0){
            $scope.detailEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.detailEditFun = function(){
        var data = {};
        var _just = $scope.detailEdit;
        data.costBeginMoneyTO = {};
        data.costBeginMoneyTO.name = '初期余额';
        data.costBeginMoneyTO.beginBalanceSum = _just.beginBalanceSum;
        data.costBusinessMoneyTO = {};
        data.costBusinessMoneyTO.costBusinessName = '营业成本';
        data.costLaborMoneyTO = {};
        data.costLaborMoneyTO.costLaborName = '劳务成本';
        data.laborCostDetailTOList = [];
        for(var i=0;i<_just.businessIncomeDetailList.length;i++){
            data.laborCostDetailTOList[i] = {};
            data.laborCostDetailTOList[i].typeName = _just.businessIncomeDetailList[i].typeName;
            data.laborCostDetailTOList[i].laborCostTen = _just.businessIncomeDetailList[i].businessIncomeTen;
            data.laborCostDetailTOList[i].laborCostFift = _just.businessIncomeDetailList[i].businessIncomeFift;
            data.laborCostDetailTOList[i].laborCostTwtenty = _just.businessIncomeDetailList[i].businessIncomeTwtenty;
            data.laborCostDetailTOList[i].laborCostThirty = _just.businessIncomeDetailList[i].businessIncomeThirty;
        }
        data.costPayeMoneyTO = {};
        data.costPayeMoneyTO.costPayeName = '应交税金';
        data.costPayeMoneyTO.payableTaxTen = _just.payableTaxTen;
        data.costPayeMoneyTO.payableTaxFift = _just.payableTaxFift;
        data.costPayeMoneyTO.payableTaxTwtenty = _just.payableTaxTwtenty;
        data.costPayeMoneyTO.payableTaxThirty = _just.payableTaxThirty;
        data.costBorrowMoneyTO = {};
        data.costBorrowMoneyTO.costBorrowName = '公司借入';
        data.companyBorrowedDetailTOList = [];
        for(var i=0;i<_just.companyBorrowedDetailList.length;i++){
            data.companyBorrowedDetailTOList[i] = {};
            data.companyBorrowedDetailTOList[i].typeName = _just.companyBorrowedDetailList[i].typeName;
            data.companyBorrowedDetailTOList[i].companyBorrowedTen = _just.companyBorrowedDetailList[i].companyBorrowedTen;
            data.companyBorrowedDetailTOList[i].companyBorrowedFift = _just.companyBorrowedDetailList[i].companyBorrowedFift;
            data.companyBorrowedDetailTOList[i].companyBorrowedTwtenty = _just.companyBorrowedDetailList[i].companyBorrowedTwtenty;
            data.companyBorrowedDetailTOList[i].companyBorrowedThirty = _just.companyBorrowedDetailList[i].companyBorrowedThirty;
        }
        data.costPaidMoneyTO = {};
        data.costPaidMoneyTO.costPaidName = '实收资本';
        data.paidCapitalDetailTOList = [];
        for(var i=0;i<_just.paidCapitalDetailList.length;i++){
            data.paidCapitalDetailTOList[i] = {};
            data.paidCapitalDetailTOList[i].typeName = _just.paidCapitalDetailList[i].typeName;
            data.paidCapitalDetailTOList[i].paidCapitalTen = _just.paidCapitalDetailList[i].paidCapitalTen;
            data.paidCapitalDetailTOList[i].paidCapitalFift = _just.paidCapitalDetailList[i].paidCapitalFift;
            data.paidCapitalDetailTOList[i].paidCapitalTwtenty = _just.paidCapitalDetailList[i].paidCapitalTwtenty;
            data.paidCapitalDetailTOList[i].paidCapitalThirty = _just.paidCapitalDetailList[i].paidCapitalThirty;
        }
        data.costLendMoneyTO = {};
        data.costLendMoneyTO.costLendName = '公司借出';
        data.companyLendDetailTOList = [];
        for(var i=0;i<_just.companyLendDetailList.length;i++){
            data.companyLendDetailTOList[i] = {};
            data.companyLendDetailTOList[i].typeName = _just.companyLendDetailList[i].typeName;
            data.companyLendDetailTOList[i].companyLendTen = _just.companyLendDetailList[i].companyLendTen;
            data.companyLendDetailTOList[i].companyLendFift = _just.companyLendDetailList[i].companyLendFift;
            data.companyLendDetailTOList[i].companyLendTwtenty = _just.companyLendDetailList[i].companyLendTwtenty;
            data.companyLendDetailTOList[i].companyLendThirty = _just.companyLendDetailList[i].companyLendThirty;
        }
        data.costIncomeMoneyTO = {};
        data.costIncomeMoneyTO.costIncomeName = '主营业务收入';
        data.businessIncomeDetailTOList = [];
        for(var i=0;i<_just.businessIncomeDetailList.length;i++){
            data.businessIncomeDetailTOList[i] = {};
            data.businessIncomeDetailTOList[i].typeName = _just.businessIncomeDetailList[i].typeName;
            data.businessIncomeDetailTOList[i].businessIncomeTen = _just.businessIncomeDetailList[i].businessIncomeTen;
            data.businessIncomeDetailTOList[i].businessIncomeFift = _just.businessIncomeDetailList[i].businessIncomeFift;
            data.businessIncomeDetailTOList[i].businessIncomeTwtenty = _just.businessIncomeDetailList[i].businessIncomeTwtenty;
            data.businessIncomeDetailTOList[i].businessIncomeThirty = _just.businessIncomeDetailList[i].businessIncomeThirty;
        }
        data.costForeMoneyTO = {};
        data.costForeMoneyTO.costForeName = '预估应收账款';
        data.costForeMoneyTO.forecastAccountTen = _just.forecastAccountTen;
        data.costForeMoneyTO.forecastAccountFift = _just.forecastAccountFift;
        data.costForeMoneyTO.forecastAccountTwtenty = _just.forecastAccountTwtenty;
        data.costForeMoneyTO.forecastAccountThirty = _just.forecastAccountThirty;
        data.costActualMoneyTO = {};
        data.costActualMoneyTO.costForeName = '实际资金缺口';
        data.costBalanceMoneyTO = {};
        data.costBalanceMoneyTO.costBalanceName = '按时回款预估结余资金';
        var uploadData = converFormData(data);
        uploadData.id = detailData.id;
        detailSer.editdetail(uploadData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.costDetail.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
function converFormData() {
    var objToFormData = function(obj,obj2,sec){
        if(obj){
            var count = 0;
            for(var name in obj){
                var val = obj[name];
                if(val instanceof Array){
                    val.forEach(function (item,index) {
                        for(var name2 in item){
                            var val2 = item[name2];
                            if(val2 instanceof Array){
                                val2.forEach(function (dItem,dIndex) {
                                    objToFormData(dItem,obj,name+'['+index+'].'+name2);
                                });
                            }else{
                                if((typeof val2)!='function'){
                                    obj[name+'['+index+'].'+name2] = val2;
                                }
                            }
                        }
                    });
                    delete obj[name];
                }else if(sec){
                    if((typeof val)!='function'){
                        obj2[sec+'['+count+'].'+name] = val;
                        count++;
                    }
                }else if(typeof val == 'object'){
                    for(var key in val){
                        obj[name + '.' + key] = val[key];
                    }
                    delete obj[name];
                }
            }
        }

    }
    var _obj = $.extend(true,{},arguments[0]);
    objToFormData(_obj);
    return _obj;
}



