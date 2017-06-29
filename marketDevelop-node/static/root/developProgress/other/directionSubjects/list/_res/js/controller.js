var app = angular.module('subjectsList', ['ng-pagination','toastr']);
app.controller('subjectsListCtrl',function($scope,directionSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        directionSer.listCourse(listData).then(function(response){
            if(response.data.code==0){
                $scope.courseLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.courseLists,function(obj){
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
        angular.forEach($scope.courseLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };

    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        directionSer.thawCourse(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    };

//分页
    $scope.custom = {
        itemsCount: 6, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    directionSer.countCourse().then(function(response){
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
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除/冻结
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.developProgress.other.directionSubjects.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        directionSer.courseDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.developProgress.other.directionSubjects.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.developProgress.other.directionSubjects.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        directionSer.congealCourse(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.developProgress.other.directionSubjects.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});
//自定义过滤
app.filter('other', function(){
    return function (val) {
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }
});
