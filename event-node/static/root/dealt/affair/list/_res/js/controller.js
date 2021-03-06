var app = angular.module('affairList', ['ng-pagination','toastr']);
app.controller('affairListCtrl',function($scope,affairSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    $scope.time = $stateParams.time?$stateParams.time:'';
    $scope.permissionses = $stateParams.permissionses?$stateParams.permissionses:'';
    $scope.eventStatuses = $stateParams.eventStatuses?$stateParams.eventStatuses:'';
    if($stateParams.time || $stateParams.permissionses || $scope.eventStatuses){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //点击搜索功能
    $scope.search = function(){
        $state.go('root.dealt.affair.list[12]',{
            time:angular.element('.Protime').val(),permissionses:$scope.permissionses,eventStatuses:$scope.eventStatuses, page:1
        });
    };

    $scope.selectList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $location.search().page);
    };

    //分页
    $scope.pagination = {
        itemsCount: 3,   //总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        if($scope.standardLists)return
        var pages = {
            page:page||1,
            time: $scope.time || " ",
            permissionses:$scope.permissionses || " " ,
            eventStatuses:$scope.eventStatuses || " " ,
        };
        affairSer.listAffair(pages).then(function(response){
            if(response.data.code==0){
                $scope.standardLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.standardLists,function(obj){
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
    $scope.moreList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    affairSer.countAffair().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.standardLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    $scope.titles = ['日期','分类','处理情况'];

})
;


