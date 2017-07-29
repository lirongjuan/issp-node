var app = angular.module('view1', ['toastr']);
app.controller('mviewCtr',function($scope,marketserveSer,toastr,$stateParams,$state) {
    var companyId = {id : $stateParams.id};
   //选择
    $scope.selectList = function(event,val){
        angular.forEach($scope.marketserveLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = val;
    };
    //删除
    $scope.del = function(){
        $scope.marketserveLists.splice($scope.idList,1)
    }
    //添加
    $scope.add = function(){
        var obj = {};
        $scope.marketserveLists.push(obj);
    }
    //提交
    $scope.submit = function(){
        var data = {};
        data.clientInfoNos = [];
        data.clientNames = [];
        data.importanceLevels = [];
        data.marketServeId = $stateParams.id;
        fn($scope.marketserveLists,data.clientInfoNos,data.clientNames,data.importanceLevels);
        marketserveSer.editCustomer(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.marketserve.list[12]');
                toastr.success("此次编辑成功",'温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

    marketserveSer.viewCustomer(companyId).then(function(response){
        if(response.data.code == 0){
            $scope.marketserveLists = response.data.data;
            if(!$scope.marketserveLists){
                $scope.marketserveLists = [];
            }
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
function fn(arr,arr1,arr2,arr3){
    if(arr){
        for(let i=0;i<arr.length;i++){
            if(typeof arr[i] =='object'){
                for( key in arr[i]){
                    if(key == 'clientInfoNo'){
                        arr1.push(arr[i][key]);
                    }else if(key == 'clientName'){
                        arr2.push(arr[i][key]);
                    }else if(key == 'importanceLevel'){
                        arr3.push(arr[i][key]);
                    }
                }
            }
        }
    }
}