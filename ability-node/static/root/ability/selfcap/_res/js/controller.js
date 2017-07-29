var app = angular.module('selfcap', [{
    files:[
        "root/ability/selfcap/_res/js/service.js"
    ]
}]);
app.controller('selfcapCtrl',function ($scope,$state) {
    if ($state.current.url == '/selfcap') {
        $state.go('root.ability.selfcap.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('selfcapMenuCtrl',function($scope,$state,$rootScope,$location,selfcapSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
        if($location.path().split('/').slice(-1)=='socialList[12]' && window.location.href.indexOf('subId=') == -1){
            $scope.menuClass = 'socialListMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    if (window.location.href.split('subId=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idSocialList = window.location.href.split('subId=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        selfcapSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    $scope.menuCheck2 = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        selfcapSer.menuPermission2(buttonName).then(function(response){
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
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, subId){
        $scope.idSocialList = subId;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.list[12]',{id:$scope.idList,names:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
     //个人社交添加
    $scope.social = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.social[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'socialMenu'
        }
    };
    //个人社交列表
    $scope.socialList = function(){
        if($scope.idList){
            $state.go('root.ability.selfcap.socialList[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'socialListMenu';
        }
    };
    //个人社交删除
    $scope.socialDelete = function(){
        if($scope.idSocialList){
            $state.go('root.ability.selfcap.socialList[12]',{subId:$scope.idSocialList,name:'socialDelete',page:$scope.page});
            $scope.menuClass = 'socialDeleteMenu';
        }
    };
    //个人社交编辑
    $scope.socialEdit = function(){
        if($scope.idSocialList){
            $state.go('root.ability.selfcap.socialEdit[12]',{subId:$scope.idSocialList,id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'socialEditMenu'
        }
    }
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "WOMAN":
                result = "女";
                break;
            case "MAN":
                result = "男";
                break;
            case "VIP":
                result = "VIP";
                break;
            case "OLD":
                result = "老客户";
                break;
            case "COOPERATOR":
                result = "合作伙伴";
                break;
            case "ORDINARY":
                result = "普通客户";
                break;
            case "COMPLETEPROJECT":
                result = "已完成项目客户";
                break;
            case "PROJECTING":
                result = "现项目客户";
                break;
            case "POTENTIAL":
                result = "潜在客户";
                break;
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

})

