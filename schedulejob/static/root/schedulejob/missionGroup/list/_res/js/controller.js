var app = angular.module('missionGroupList', ['ng-pagination','toastr']);
app.controller('missionGroupListCtrl',function($scope,missionGroupSer,toastr,$state,$stateParams) {
    $scope.$emit('changeId', null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除/冻结
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.schedulejob.missionGroup.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        missionGroupSer.deletemissionGroup(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.schedulejob.missionGroup.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id,
            enable:false
        };
        missionGroupSer.congealmissionGroup(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已关闭", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.schedulejob.missionGroup.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

    //分页
    function activatePage(page) {
        var listData = {
            page:page
        };
        missionGroupSer.listAbilitymissionGroup(listData).then(function(response){
            if(response.data.code==0){
                $scope.missionGroupLists = response.data;
                if($stateParams.id){
                    angular.forEach($scope.missionGroupLists.data,function(obj){
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
    missionGroupSer.countmissionGroup().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //开启
    $scope.thaw = function(event){
        var data = {
            id :event.id,
            enable:true
        };
        missionGroupSer.congealmissionGroup(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已开始", '温馨提示');
                event.enable = true
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.missionGroupLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.missionGroupLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});
