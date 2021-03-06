var app = angular.module('infoList', ['ng-pagination','toastr','ipCookie']);
app.controller('infoListCtrl',function($scope,infoSer,toastr,ipCookie,$location,$stateParams,$state){

    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page ||1
        };
        infoSer.listInfo(pages).then(function(response){
            if(response.data.code==0){
                $scope.infoLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.infoLists, function(obj){
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
    infoSer.countInfo().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount=response.data.data
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }
    });
    $scope.selectList = function(event){
        angular.forEach($scope.infoLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page', $stateParams.page);
    };

    $scope.$on("deletedId",function(event,id){
       angular.forEach($scope.infoLists,function(item){
            if(item.id==id){
                item._delete=true
            }
       })
    })

    //--------------------------------------------------------
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
        $state.go('root.statement.info.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        infoSer.delInfo(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.statement.info.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.statement.info.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});


