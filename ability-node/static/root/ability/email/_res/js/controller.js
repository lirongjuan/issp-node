var app = angular.module('email', [{
    files:[
        "root/ability/email/_res/js/service.js"
    ]
}]);
app.controller('emailCtrl',function ($scope,$state) {
    if ($state.current.url == '/email') {
        $state.go('root.ability.email.list[12]');
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('emailMenuCtrl',function($scope,$state,$rootScope,$location,emailSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        emailSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.congeal = function(){
        if($scope.idList){
            $state.go('root.ability.email.list[12]',{id:$scope.idList,name:'congeal',page:$scope.page});
            $scope.menuClass = 'congealMenu'
        }
    };
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.ability.email.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.ability.email.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
         $scope.idList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu';
        $scope.idList = ''
    };
    $scope.person = function(){
        $scope.menuClass = 'personMenu';
        $scope.idList = ''
    };
    $scope.cooperationone = function(){
        $scope.menuClass = 'cooperationoneMenu';
        $scope.idList = ''
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
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
            case "INDEPENDENT":
                result = "独立完成";
                break;
            case "COOPER":
                result = "合作完成";
                break;
            case "STAGEPARTICIPATION":
                result = "阶段参与";
                break;
            case "EVERYDAY":
                result = "每天";
                break;
            case "EVERYWEEK":
                result = "每周";
                break;
            case "EVERYMONTH":
                result = "每月";
                break;
            case "0":
                result = "商业能力展示汇总";
                break;
            case "1":
                result = "个人能力展示汇总";
                break;
            case "2":
                result = "合作对象能力汇总";
                break;
        }
        return result;
    }

})

