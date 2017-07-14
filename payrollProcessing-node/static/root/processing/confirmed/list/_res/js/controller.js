var app = angular.module('confirmedList', ['ng-pagination','toastr']);
app.controller('confirmedListCtrl',function($scope,confirmedSer,toastr,$stateParams,$state,$location) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.confirmedLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    //第一次付款
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'first':
                $scope.delShow1 = true;
                break;
        }
    }
    var count=0;
    $scope.delFn1 = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        confirmedSer.confirmedFirst(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('notarizedId', $scope.deledId);
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.processing.confirmed.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.processing.confirmed.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //第二次付款
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'second':
                $scope.delShow2 = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.processing.confirmed.list[12]',{id:null,name:null});
        $scope.$emit('changeId', null);
    };

    var count=0;
    $scope.delFn2 = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        confirmedSer.confirmedSecond(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('notarizedId', $scope.deledId);
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.processing.confirmed.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.processing.confirmed.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page || 1
        }
        confirmedSer.confirmedList(listData).then(function(response){
            if(response.data.code==0){
                $scope.confirmedLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.confirmedLists,function(obj){
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
    confirmedSer.countConfirmed().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.abili = {
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    // 确定1
    $scope.$on('FirstId',function(event,delid){
        angular.forEach($scope.confirmedLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    // 确定2
    $scope.$on('SecondId',function(event,delid){
        angular.forEach($scope.confirmedLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //查寻更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
});
