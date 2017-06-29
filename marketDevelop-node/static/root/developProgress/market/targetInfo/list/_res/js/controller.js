var app = angular.module('targetInfoList', ['ng-pagination','toastr']);
app.controller('targetInfoListCtrl',function($scope,targetInfoSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        targetInfoSer.targetInfoList(listData).then(function(response){
            if(response.data.code==0){
                $scope.targetLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.targetLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }

    $scope.selectList = function(event){
        angular.forEach($scope.targetLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };

//分页
    $scope.custom = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    targetInfoSer.countTarget().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else {
            toastr.error(response.data.msg,'温馨提示')
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
        $state.go('root.developProgress.market.targetInfo.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){ //确认删除
        var data = {
            id:$stateParams.id
        };
        targetInfoSer.deleteTargetInfo(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.developProgress.market.targetInfo.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.developProgress.market.targetInfo.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

