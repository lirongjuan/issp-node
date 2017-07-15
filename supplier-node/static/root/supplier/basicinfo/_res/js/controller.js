var app = angular.module('basicinfo', [{
    files:[
        "root/supplier/basicinfo/_res/js/service.js",
    ]
}]);
app.controller('basicinfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/basicinfo') {  //默认加载列表
        $state.go('root.supplier.basicinfo.list[12]')
    }

}).controller('basicinfoMenuCtrl',function($scope,$state,$rootScope,$location, basicinfoSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + '?id=Menu'}
    }

 $scope.menuCheck = function (name){
        var buttonName = name;
        $scope.buttonShow = true;
       basicinfoSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
       $scope.idListd = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }

    $scope.winning = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.winning',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'winningMenu'
        }
    };
    $scope.qualification = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.qualification',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'qualificationMenu'
        }
    };
    $scope.contact = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.contact',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'contactMenu'
        }
    };
    $scope.cooperation = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.cooperation',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'cooperationMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };

    $scope.details = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.details[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'detailsMenu'
        }
    };
    $scope.rewardAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.rewardAdd[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'rewardAddMenu'
        }
    };
    $scope.qualifiAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.qualifiAdd[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'qualifiAddMenu'
        }
    };
    $scope.contactAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.contactAdd[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'contactAddMenu'
        }
    };
    $scope.cooperationAdd = function(){
        if($scope.idListd){
            $state.go('root.supplier.basicinfo.cooperationAdd[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'cooperationAddMenu'
        }
    };

});

//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "WINN":
                result = "获奖情况";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "REWARDADD":
                result = "获奖情况添加";
                break;
            case "QUALIFICATION":
                result = "企业资质";
                break;
            case "QUALIFIADD":
                result = "企业资质添加";
                break;
            case "CONTACT":
                result = "联系情况";
                break;
            case "CONTACTADD":
                result = "联系情况添加";
                break;
            case "COOPERATION":
                result = "合作情况";
                break;
            case "COOPERATIONADD":
                result = "合作情况添加";
                break;
            case "DETAILS":
                result = "详细信息";
                break;
        }
        return result;
    }

});
