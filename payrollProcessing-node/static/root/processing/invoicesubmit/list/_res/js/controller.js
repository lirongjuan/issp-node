var app = angular.module('invoicesubmitList', ['ng-pagination','toastr']);
app.controller('invoicesubmitListCtrl',function($scope,invoicesubmitSer,toastr,$stateParams,$state,$location) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.invoicesubmitLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    //删除
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.processing.invoicesubmit.list[12]',{id:null,name:null});
        $scope.$emit('changeId', null);
    };

    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        invoicesubmitSer.invoicesubmitDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('notarizedId', $scope.deledId);
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.processing.invoicesubmit.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.processing.invoicesubmit.list[12]',{id:null,name:null,page:$stateParams.page-1});
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
        invoicesubmitSer.invoicesubmitList(listData).then(function(response){
            if(response.data.code==0){
                $scope.invoicesubmitLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.invoicesubmitLists,function(obj){
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
        itemsCount: 1, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    invoicesubmitSer.invoicesubmitCount().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.invoicesubmitLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
