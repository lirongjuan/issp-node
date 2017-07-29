var app = angular.module('deparList', ['ng-pagination','toastr']);
app.controller('deparListCtrl',function($scope,deparSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //删除
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'salary':
                $scope.salaShow = true;
                break;
            case 'departure':
                $scope.depaShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('' +
            'root.leave.departure.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        deparSer.deparDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.leave.departure.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.leave.departure.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //薪资确认
    $scope.salacel = function(){//取消删除
        $scope.salaShow = false;
        $state.go('' +
            'root.leave.departure.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.salaFn = function(){//确认删除
        // var yes=true;
        var data=$scope;
        data.depar = {
            id:$stateParams.id,
            affirm:true
        };
        
        deparSer.deparSalary(data.depar).then(function(response){


            if(response.data.code==0){
                count++;
                toastr.info( "薪资已确认", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.salaShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.leave.departure.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.leave.departure.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //确定离职
    $scope.depacel = function(){//取消删除
        $scope.depaShow = false;
        $state.go('' +
            'root.leave.departure.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.depaFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        deparSer.deparDeparture(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "离职已确认", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.depaShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.leave.departure.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.leave.departure.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        deparSer.deparList(listData).then(function(response){
            if(response.data.code==0){
                $scope.deparLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.deparLists,function(obj){
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
        angular.forEach($scope.deparLists,function(obj){
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
        angular.forEach($scope.deparLists,function(obj){
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

    deparSer.deparCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

