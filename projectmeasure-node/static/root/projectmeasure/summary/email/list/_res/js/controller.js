var app = angular.module('emailList', ['ng-pagination','toastr']);
app.controller('emailListCtrl',function($scope,emailSer,toastr,$state,$stateParams,$location) {
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
        $state.go('root.projectmeasure.summary.email.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        emailSer.deleteSummary(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.projectmeasure.summary.email.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.projectmeasure.summary.email.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        emailSer.congealSummary(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.projectmeasure.summary.email.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //分页
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        emailSer.listSummary(listData).then(function(response){
            if(response.data.code==0){
                $scope.emailLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.emailLists.data,function(obj){
                        if(obj.id == $stateParams.id.split('&')[0]){
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
    emailSer.countSummary().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        emailSer.thawSummary(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已解冻", '温馨提示');
                event.status = 'THAW'
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.emailLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page',$location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.emailLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});
//自定义过滤器
app.filter('cov',function(){
    return function(val){
        var result;
        switch (val){
            case 'MINUTE':
                result = "分钟";
                break;
            case 'HOUR':
                result = "小时";
                break;
            case 'DAY':
                result = "天";
                break;
            case 'WEEK':
                result = "周";
                break;
            case 'MONTH':
                result = "月";
                break;
            case 'QUARTER':
                result = "季";
                break;
            case 'YEAR':
                result = "年";
                break;
            case 'NOT':
                result = "无";
                break;
            case 'THAW':
                result = "解冻";
                break;
            case 'CONGEAL':
                result = "冻结";
                break;
        }
        return result;
    }
})