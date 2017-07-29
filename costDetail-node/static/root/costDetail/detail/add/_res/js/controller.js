var app = angular.module('detailAdd', ['toastr']);
app.controller('detailAddCtrl', function($scope, detailSer,$state,toastr){

    detailSer.getDepartment().then(function(response){
            if(response.data.code == 0){
                $scope.allDepartment = response.data.data;
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    var parNode = ['劳务成本','公司借入','实收资本','公司借出','主营业务收入'];
    $scope.allName = [];
    //获取所有的数据
    detailSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.allData = response.data.data;
            for(var i = 0; i < $scope.allData.length;i++){
                $scope.allName.push($scope.allData[i]);
                if($scope.allData[i].costDetailsAddReturnBOS){
                    var arr = $scope.allData[i].costDetailsAddReturnBOS;
                    for(var j = 0;j < arr.length;j++){
                        var o = arr[j];
                        o.a = $scope.allData[i].categoryName;
                        $scope.allName.push(o);
                    }
                }
            }
        }else {  
            toastr.error( response.data.msg, '温馨提示');
        }
    });
        
    
    //添加
    $scope.addFun = function(){
        var data = {};
        var lw = 0;//劳务成本
        var gj = 0;//公司借入
        var sz = 0;//实收资本
        var pCount = 0;//公司借出
        var zs = 0;//主营业务收入
        data.costBeginMoneyTO = {};
        data.costBusinessMoneyTO = {};
        data.costLaborMoneyTO = {};
        data.costForeMoneyTO = {};
        data.costActualMoneyTO = {};
        data.costBorrowMoneyTO = {};
        data.costPaidMoneyTO = {};
        data.costLendMoneyTO = {};
        data.costBalanceMoneyTO = {};
        data.costIncomeMoneyTO = {};
        data.costIncomeMoneyTO = {};
        data.costPayeMoneyTO = {};
        data.laborCostDetailTOList = [];
        data.companyBorrowedDetailTOList = [];
        data.paidCapitalDetailTOList = [];
        data.companyLendDetailTOList = [];
        data.businessIncomeDetailTOList = [];
        // if($scope.allName){
            for(var i = 0; i < $scope.allName.length;i++){
                if($scope.allName[i].categoryName == '期初余额'){
                    data.costBeginMoneyTO.name = '期初余额';
                    data.costBeginMoneyTO.beginBalanceSum = $scope.allName[i].sum;
                }else if($scope.allName[i].categoryName == '营业成本'){
                    data.costBusinessMoneyTO.costBusinessName = '营业成本';
                }else if($scope.allName[i].categoryName == '预估应收账款'){
                    data.costForeMoneyTO.costForeName = '预估应收账款';
                    data.costForeMoneyTO.forecastAccountTen = $scope.allName[i].tenMoney;
                    data.costForeMoneyTO.forecastAccountFift = $scope.allName[i].fifMoney;
                    data.costForeMoneyTO.forecastAccountTwtenty = $scope.allName[i].twethMoney;
                    data.costForeMoneyTO.forecastAccountThirty = $scope.allName[i].thityMoney;
                }else if($scope.allName[i].categoryName == '实际资金缺口'){
                    data.costActualMoneyTO.costForeName = '实际资金缺口';
                }else if($scope.allName[i].categoryName == '按时回款预估结余资金'){
                    data.costBalanceMoneyTO.costBalanceName = '按时回款预估结余资金';
                }else if($scope.allName[i].categoryName == '应交税金'){
                    data.costPayeMoneyTO.costPayeName = '应交税金';
                     data.costPayeMoneyTO.payableTaxTen = $scope.allName[i].tenMoney;
                    data.costPayeMoneyTO.payableTaxFift = $scope.allName[i].fifMoney;
                    data.costPayeMoneyTO.payableTaxTwtenty = $scope.allName[i].twethMoney;
                    data.costPayeMoneyTO.payableTaxThirty = $scope.allName[i].thityMoney;
                }else if($scope.allName[i].categoryName == '劳务成本'){
                    data.costLaborMoneyTO.costLaborName = '劳务成本';
                }else if($scope.allName[i].a == '劳务成本'){
                    data.laborCostDetailTOList[lw] = {};
                    data.laborCostDetailTOList[lw].typeName = $scope.allName[i].categoryName;
                    data.laborCostDetailTOList[lw].laborCostTen = $scope.allName[i].tenMoney;
                    data.laborCostDetailTOList[lw].laborCostFift = $scope.allName[i].fifMoney;
                    data.laborCostDetailTOList[lw].laborCostTwtenty = $scope.allName[i].twethMoney;
                    data.laborCostDetailTOList[lw].laborCostThirty = $scope.allName[i].thityMoney;
                    lw ++;
                }else if($scope.allName[i].categoryName == '公司借入'){
                    data.costBorrowMoneyTO.costBorrowName = '公司借入';
                }else if($scope.allName[i].a == '公司借入'){
                    data.companyBorrowedDetailTOList[gj] = {};
                    data.companyBorrowedDetailTOList[gj].typeName = $scope.allName[i].categoryName;
                    data.companyBorrowedDetailTOList[gj].companyBorrowedTen = $scope.allName[i].tenMoney;
                    data.companyBorrowedDetailTOList[gj].companyBorrowedFift = $scope.allName[i].fifMoney;
                    data.companyBorrowedDetailTOList[gj].companyBorrowedTwtenty = $scope.allName[i].twethMoney;
                    data.companyBorrowedDetailTOList[gj].companyBorrowedThirty = $scope.allName[i].thityMoney;
                    gj++;
                }else if($scope.allName[i].categoryName == '实收资本'){
                    data.costPaidMoneyTO.costPaidName = '实收资本';
                }else if($scope.allName[i].a == '实收资本'){
                    data.paidCapitalDetailTOList[sz] = {};
                    data.paidCapitalDetailTOList[sz].typeName = $scope.allName[i].categoryName;
                    data.paidCapitalDetailTOList[sz].paidCapitalTen = $scope.allName[i].tenMoney;
                    data.paidCapitalDetailTOList[sz].paidCapitalFift = $scope.allName[i].fifMoney;
                    data.paidCapitalDetailTOList[sz].paidCapitalTwtenty = $scope.allName[i].twethMoney;
                    data.paidCapitalDetailTOList[sz].paidCapitalThirty = $scope.allName[i].thityMoney;
                    sz++;
                }else if($scope.allName[i].categoryName == '公司借出'){
                    data.costLendMoneyTO.costLendName = '公司借出';
                }else if($scope.allName[i].a == '公司借出'){
                    data.companyLendDetailTOList[pCount] = {};
                    data.companyLendDetailTOList[pCount].typeName = $scope.allName[i].categoryName;
                    data.companyLendDetailTOList[pCount].companyLendTen = $scope.allName[i].tenMoney;
                    data.companyLendDetailTOList[pCount].companyLendFift = $scope.allName[i].fifMoney;
                    data.companyLendDetailTOList[pCount].companyLendTwtenty = $scope.allName[i].twethMoney;
                    data.companyLendDetailTOList[pCount].companyLendThirty = $scope.allName[i].thityMoney;
                    pCount++;
                }else if($scope.allName[i].categoryName == '主营业务收入'){
                    data.costIncomeMoneyTO.costIncomeName = '主营业务收入';
                }else if($scope.allName[i].a == '主营业务收入'){
                    data.businessIncomeDetailTOList[zs] = {};
                    data.businessIncomeDetailTOList[zs].typeName = $scope.allName[i].categoryName;
                    data.businessIncomeDetailTOList[zs].businessIncomeTen = $scope.allName[i].tenMoney;
                    data.businessIncomeDetailTOList[zs].businessIncomeFift = $scope.allName[i].fifMoney;
                    data.businessIncomeDetailTOList[zs].businessIncomeTwtenty = $scope.allName[i].twethMoney;
                    data.businessIncomeDetailTOList[zs].businessIncomeThirty = $scope.allName[i].thityMoney;
                    zs++;
                }  
            // }
        }
        data.costTime = angular.element('.time').val();
        data.department = $scope.department;
        var uploadData = converFormData(data);
        detailSer.adddetail(uploadData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.costDetail.detail.list[12]');
                toastr.success("已成功添加", '温馨提示');
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

