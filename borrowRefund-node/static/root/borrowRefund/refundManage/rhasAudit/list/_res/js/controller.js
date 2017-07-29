var app = angular.module('rhasAuditList', ['ng-pagination','toastr']);
app.controller('rhasAuditListCtrl',function($scope,rhasAuditSer,toastr,$stateParams,$state,$location) {
   $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    //获取搜索字段
    $scope.reimer = $stateParams.reimer?$stateParams.reimer:'';
    $scope.reimNumber = $stateParams.reimNumber?$stateParams.reimNumber:'';
    $scope.startTime = $stateParams.startTime?$stateParams.startTime:'';
    $scope.endTime = $stateParams.endTime?$stateParams.endTime:'';
    if($stateParams.reimer || $stateParams.reimNumber || $stateParams.startTime || $stateParams.endTime){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.rhasAuditLists.data,function(obj){
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
        angular.forEach($scope.rhasAuditLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.cancel = function(){//取消冻结
        $scope.congealShow = false;
        $state.go('root.borrowRefund.refundManage.rhasAudit.list[12]',{id:null,name:null});
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id,
            sureCongel:true
        };
        rhasAuditSer.congelByOperate(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.$emit('moreId', null);
                $scope.congealShow = false;
                $state.go('root.borrowRefund.refundManage.rhasAudit.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //搜索
    $scope.search = function(){
        var startTime =$scope.startTime || angular.element('.startTime').val();
        var endTime =$scope.endTime || angular.element('.endTime').val();
        $state.go('root.borrowRefund.refundManage.rhasAudit.list[12]',{reimer:$scope.reimer,reimNumber:$scope.reimNumber,page:1,startTime:startTime,endTime: endTime});
    }

    function activatePage(page) {
        var startTime = angular.element('.startTime').val();
        var endTime = angular.element('.endTime').val();
        var listData = {
            page:page || 1,
            reimer:$scope.reimer || " ",
            reimNumber:$scope.reimNumber || " ",
            startTime:startTime || " " ,
            endTime: endTime || " "
        }
        rhasAuditSer.allCount(listData).then(function(response){
            if(response.data.code == 0){
                $scope.abili.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        rhasAuditSer.allList(listData).then(function(response){
            if(response.data.code==0){
                $scope.rhasAuditLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.rhasAuditLists.data,function(obj){
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
    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id,
            sureCongel:true
        };
        rhasAuditSer.congelByOperate(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已解冻", '温馨提示');
                event.lendStatus = 'CHARGENOTPASS'
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
   $scope.titles = ['报销人','报销开始时间','报销单号','报销结束时间'];
});
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch (val){
            case 'CHARGEPASS':
                result = '负责人审核通过';
                break;
            case 'NONE':
                result = '未处理';
                break;
            case 'CHARGENOTPASS':
                result = '负责人审核不通过';
                break;
            case 'FINACEPASS':
                result = '财务运营审核通过';
                break;
            case 'FINACENOTPASS':
                result = '财务运营审核不通过';
                break;
            case 'FINACECONGEL':
                result = '财务运营冻结';
                break;
            case 'CHARGESURECONGEL':
                result = '负责人确认冻结';
                break;
            case 'MANAGEPASS':
                result = '总经办审核通过';
                break;
            case 'MANAGENOTPASS':
                result = '总经办审核不通过';
                break;
            case 'LISTERROR':
                result = '申请单有误';
                break;
        }
        return result;
    }
})