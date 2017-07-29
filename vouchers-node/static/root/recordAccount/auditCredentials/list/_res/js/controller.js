var app = angular.module('auditCredentialsList', ['ng-pagination','toastr']);
app.controller('auditCredentialsListCtrl',function($scope,credentialsSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);

    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        credentialsSer.listCredentials(listData).then(function(response){
            if(response.data.code==0){
                $scope.auditedLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.auditedLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
                if($stateParams.ids){
                    var arr = $stateParams.ids.split(',');
                    angular.forEach($scope.auditedLists,function(obj){
                        obj.isV = false;
                        for(var i = 0;i<arr.length;i++){
                            if(obj.id == arr[i]){
                                obj.isV = true;
                                delete arr[i];
                            }
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

    $scope.selectList = function(event){
        angular.forEach($scope.auditedLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.auditedLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    // 多选
    $scope.selected = [];
    $scope.check=function(event){
        event._add = ! event._add;
        if( event._add==true&&$scope.selected.indexOf(event.id)==-1){
            $scope.selected.push(event.id);
        }else if(event._add==false&&$scope.selected.indexOf(event.id)!=-1){
            $scope.selected.splice($scope.selected.indexOf(event.id), 1);
        }
        $scope.$emit('seledIds', $scope.selected.join(','));
    };
    // 过账
    $scope.$on('postId',function(event,postids){
        angular.forEach($scope.auditedLists,function(obj){
            angular.forEach(postids,function (sub) {
                if(obj.id == sub){
                    obj._posting = obj.id
                }
            })

        })
    });
    //反审核
    $scope.$on('antiId',function(event,antid){
        angular.forEach($scope.auditedLists,function(obj){
            if(obj.id == antid){
                obj._posting = antid
            }
        })
    });
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    credentialsSer.countCredentials().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'anti':
                $scope.delShow = true;
                break;
        }
    }
    if($stateParams.ids){
        switch ($stateParams.name){
            case 'posting':
                $scope.billShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消反审核
        $scope.delShow = false;
        $state.go('root.recordAccount.auditCredentials.list[12]',{id:null,name:null});
    };
    $scope.billCancel = function(){//取消过帐
        $scope.billShow = false;
        $state.go('root.recordAccount.auditCredentials.list[12]',{ids:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认反审核
        var data = {
            id:$stateParams.id
        };
        credentialsSer.antiCredentials(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "反审核成功", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.recordAccount.auditCredentials.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.recordAccount.auditCredentials.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.billFn = function(){ //确认过帐

        var billData = {
            ids : $stateParams.ids.split(',')
        };
        credentialsSer.postingCredentials(billData).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "过账成功", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.billShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.recordAccount.auditCredentials.list[12]',{ids:null,name:null});
                }else{
                    $state.go('root.recordAccount.auditCredentials.list[12]',{ids:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

});

