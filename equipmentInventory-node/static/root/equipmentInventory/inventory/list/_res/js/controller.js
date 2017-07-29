var app = angular.module('inventoryListM', ['ng-pagination','toastr']);
app.controller('inventoryListCtrl',function($scope,inventorySer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    $scope.stockEncodings = [];
    if($stateParams.num){
        $scope.stockEncodings = $stateParams.num;
    }
    inventorySer.allNum().then(function(response){
        if(response.data.code == 0){
            $scope.allGetNum = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
});
    function activatePage() {
        if($scope.stockEncodings[0]){
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                stockEncodings: $scope.stockEncodings
            };
            inventorySer.countInventory(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                    $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                stockEncodings: $scope.stockEncodings,
            };
            inventorySer.inventoryList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.inventoryLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        }
        //编号选中
        $scope.collect  = function(val){
            if(!val)return;
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                stockEncodings: $scope.stockEncodings
            };
            inventorySer.countInventory(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                    $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                stockEncodings: $scope.stockEncodings,
            };
            inventorySer.inventoryList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.inventoryLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            $state.go('root.equipmentInventory.inventory.list[12]',{num:$scope.stockEncodings});
        };
    }
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.inventoryLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.selectList = function(event){
        angular.forEach($scope.inventoryLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };
});

