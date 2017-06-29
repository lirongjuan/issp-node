var app = angular.module('weekPlanList', ['ng-pagination','toastr']);
app.controller('weekPlanListCtrl',function($scope,weekPlanSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);

    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        weekPlanSer.weekPlanList(listData).then(function(response){
            if(response.data.code==0){
                $scope.weekPlanLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.weekPlanLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    $scope.selectList = function(event){
        angular.forEach($scope.weekPlanLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    $scope.moreList = function(event){
        angular.forEach($scope.weekPlanLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 3, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    weekPlanSer.countWeek().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取id 删除
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){ //取消删除
        $scope.delShow = false;
        $state.go('root.developProgress.plan.weekPlan.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){ //确认删除
        var data = {
            id:$stateParams.id
        };
        weekPlanSer.deleteWeekplan(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.developProgress.plan.weekPlan.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.developProgress.plan.weekPlan.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});


