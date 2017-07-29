var app = angular.module('finoddInforList', ['ng-pagination','toastr']);
app.controller('finoddInforListCtrl',function($scope,finoddInforSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'congeal':
                $scope.congealShow = true;
                break;
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
     $scope.cancel = function(){//取消冻结
        $scope.congealShow = false;
        $scope.delShow = false;
        $state.go('root.borrowRefund.refundManage.finoddInfor.list[12]',{id:null,name:null});
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id,
            sureCongel:'是'
        };
        finoddInforSer.congelByOperate(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.borrowRefund.refundManage.finoddInfor.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        finoddInforSer.delData(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.borrowRefund.refundManage.finoddInfor.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.borrowRefund.refundManage.finoddInfor.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.finoddInforLists.data,function(obj){
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
        angular.forEach($scope.finoddInforLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    function activatePage(page) {
        var listData = {
            page:page || 1
        }
        finoddInforSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.finoddInforLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.finoddInforLists.data,function(obj){
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
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    finoddInforSer.allCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id,
            sureCongel:'否'
        };
        finoddInforSer.congelByOperate(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已解冻", '温馨提示');
                event.status = 'THAW'
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
});
//自定义过滤器
app.filter('cover1',function(){
    return function(val){
        var result;
        switch (val){
            case 'THAW':
                result = '未使用';
                break;
            case 'CONGEAL':
                result = '已使用';
                break;
            case 'DELETE':
                result = '删除';
                break;
            case 'NOACTIVE':
                result = '未激活';
                break;
            case 'UNREVIEW':
                result = '未审核';
                break;
        }
        return result;
    }
})