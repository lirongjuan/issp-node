var app = angular.module('settingList', ['ng-pagination','toastr']);
app.controller('settingListCtrl',function($scope,settingSer,toastr,$stateParams,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page || 1
        };
        settingSer.listSetting(pages).then(function(response){
            if(response.data.code==0){
                $scope.settingLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.settingLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
                $scope.operators = response.data.data.cusOperateVO
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    }
    settingSer.countSetting().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.settingLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $location.search().page);
    }

});


