var app = angular.module('applylendList', ['ng-pagination','toastr']);
app.controller('applylendListCtrl',function($scope,applylendSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    //获取搜索
    $scope.lender = $stateParams.lender?$stateParams.lender:'';
    $scope.charger = $stateParams.charger?$stateParams.charger:'';
    $scope.lendDate = $stateParams.lendDate?$stateParams.lendDate:'';
    $scope.estimateLendDate = $stateParams.estimateLendDate?$stateParams.estimateLendDate:'';
    if($stateParams.lender || $stateParams.charger || $stateParams.lendDate || $stateParams.estimateLendDate){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.borrowRefund.borrowManage.applylend.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        applylendSer.deleteData(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.borrowRefund.borrowManage.applylend.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.borrowRefund.borrowManage.applylend.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.applylendLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.applylendLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //搜索
    $scope.search = function(){
        var lendDate =$scope.lendDate || angular.element('.lendDate').val();
        var estimateLendDate =$scope.estimateLendDate || angular.element('.estimateLendDate').val();
        $state.go('root.borrowRefund.borrowManage.applylend.list[12]',{lender:$scope.lender,charger:$scope.charger,page:1,lendDate:lendDate,estimateLendDate: estimateLendDate});
    }

    function activatePage(page) {
        var lendDate =$scope.lendDate || angular.element('.lendDate').val();
        var estimateLendDate =$scope.estimateLendDate || angular.element('.estimateLendDate').val();
        var listData = {
            page:page || 1,
            lender:$scope.lender || " ",
            charger:$scope.charger || " ",
            lendDate:lendDate || " " ,
            estimateLendDate: estimateLendDate || " "
        }
        applylendSer.allCount(listData).then(function(response){
            if(response.data.code == 0){
                $scope.abili.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        applylendSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.applylendLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.applylendLists.data,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数n  v 
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.titles = ['借款人','借款日期','负责人','预计借款日期'];
});
