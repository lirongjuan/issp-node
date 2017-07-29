var app = angular.module('statiList', ['ng-pagination','toastr']);
app.controller('statiListCtrl',function($scope,statiSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        statiSer.opinList(listData).then(function(response){
            if(response.data.code==0){
                $scope.statiLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.statiLists,function(obj){
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

    $scope.selectList = function(event){
        angular.forEach($scope.statiLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page',$location.search().page);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.statiLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    // statiSer.opinCount().then(function(response){
    //     if(response.data.code==0){
    //         $scope.custom.itemsCount = response.data.data;
    //         $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
    //     }else{
    //         toastr.error( response.data.msg, '温馨提示');
    //     }
    // })

});

