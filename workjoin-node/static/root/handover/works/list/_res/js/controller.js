var app = angular.module('worksList', ['ng-pagination','toastr']);
app.controller('worksListCtrl',function($scope,worksSer,toastr) {

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.worksLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //分页
    function activatePage(page) {
        var listData = {
            page:page
        }
        worksSer.worksList(listData).then(function(response){
            if(response.data.code==0){
                $scope.worksLists = response.data.data
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
    worksSer.worksCount().then(function(response){
        if(response.data.code == 0){;
            $scope.abili.itemsCount = response.data.data;
        }else{
                toastr.error( response.data.msg, '温馨提示');
            }
    });
    // 删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.worksLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //查询更多
    $scope.moreList = function(event){
        angular.forEach($scope.registeredLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };



    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        worksSer.worksThaw(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已解冻", '温馨提示');
                event.status = true
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.worksLists.data,function(obj){
            if(obj.id == conid){
                obj._selectList = false;
                obj.status = false
            }
        })
    });
});
