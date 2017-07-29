var app = angular.module('proWeekList', ['ng-pagination','toastr']);
app.controller('proWeekListCtrl',function($scope,proWeekSer,toastr,$stateParams,$location,$state){
    $scope.$emit('changeId', null);
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.budget.proWeek.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        proWeekSer.deleteProWeek(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.budget.proWeek.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.budget.proWeek.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.selectList = function(event){
        angular.forEach($scope.proWeekLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $location.search().page);
    };
    //分页
    $scope.pagination = {
        itemsCount: 2,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page||1
        };
        proWeekSer.listProWeek(pages).then(function(response){
            if(response.data.code==0){
                $scope.proWeekLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.proWeekLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.proWeekLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    proWeekSer.countProWeek().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    proWeekSer.warningCostProjects().then(function(response){
        var sortArr=[];
        if(response.data.code == 0){
            $scope.warningData = response.data.data;
            angular.forEach($scope.warningData,function (item) {
                sortArr.push(item.warnValue);
            });
            $scope.maxNum=sortArr.sort(function (a,b) {
                return b-a
            })[0];
        }
    });

});


