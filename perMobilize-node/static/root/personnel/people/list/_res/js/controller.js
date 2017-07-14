var app = angular.module('peopleList', ['ng-pagination','toastr']);
app.controller('peopleListCtrl',function($scope,peopleSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
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
        $state.go('' +
            'root.personnel.people.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        peopleSer.popDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.personnel.people.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.personnel.people.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };





    //审核
    //获取id
    
    // if($stateParams.id){
    //     switch ($stateParams.name){
    //         case 'audit':
    //             $scope.audShow = true;
    //             break;
    //     }
    // }
    // $scope.audCel = function(){//取消
    //     $scope.audShow = false;
    //     $state.go('' +
    //         'root.personnel.people.list[12]',{id:null,name:null});
    // };
    // var count=0;
    // $scope.audFn = function(){//确认

    //     var data = {
    //         id:$stateParams.id
    //     };
    //     peopleSer.popAudit(data).then(function(response){
    //         if(response.data.code==0){
    //             count++;
    //             toastr.info( "信息已审核", '温馨提示');
    //             $scope.deledId = $stateParams.id;
    //             $scope.$emit('changeId', null);
    //             $scope.audShow = false;
    //             if(($scope.custom.itemsCount-count)%10){
    //                 $state.go('root.personnel.people.list[12]',{id:null,name:null});
    //             }else{
    //                 $state.go('root.personnel.people.list[12]',{id:null,name:null,page:$stateParams.page-1});
    //             }
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     });
    // };
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        peopleSer.popList(listData).then(function(response){
            if(response.data.code==0){
                $scope.answerLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.answerLists,function(obj){
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
        angular.forEach($scope.answerLists,function(obj){
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
        angular.forEach($scope.answerLists,function(obj){
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

    peopleSer.popCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

