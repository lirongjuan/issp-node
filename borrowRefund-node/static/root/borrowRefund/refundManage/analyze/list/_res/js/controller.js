var app = angular.module('analyzeList', ['ng-pagination','toastr']);
app.controller('analyzeListCtrl',function($scope,analyzeSer,toastr,$stateParams,$state,$location) {
     $scope.$emit('changeId', null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.borrowRefund.refundManage.analyze.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        businessSer.deletebusiness(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.borrowRefund.refundManage.analyze.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.analyzeLists.data,function(obj){
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
        angular.forEach($scope.analyzeLists.data,function(obj){
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
        analyzeSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.analyzeLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.analyzeLists.data,function(obj){
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
    analyzeSer.allCount().then(function(response){
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
            id :event.id
        };
        analyzeSer.thaw(data).then(function(response){
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
app.filter('cover',function(){
    return function(val){
        var result;
        switch (val){
            case 'status':
                result = '解冻';
                break;
            case 'CONGEAL':
                result = '冻结';
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