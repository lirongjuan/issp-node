var app = angular.module('competitor', [{
    files:[
        "root/compete/competitor/_res/js/service.js"
    ]
}]);
app.controller('competitorCtrl',function ($scope,$state) {
    if ($state.current.url == '/competitor') {//默认加载列表
        $state.go('root.compete.competitor.list[12]');
    }
}).controller('competitorMenuCtrl',function($scope,$state,$rootScope,$location,competitorSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        competitorSer.menuPermission(buttonName).then(function(response){
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
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.compete.competitor.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu';
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.compete.competitor.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //组织
    $scope.organize = function(){
        if($scope.idList){
            $state.go('root.compete.competitor.organize[12]',{id:$scope.idList});
            $scope.menuClass = 'organizeMenu';
        }
    }
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.compete.competitor.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.compete.competitor.view[12]',{id:$scope.idList,view:1});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu'
    };
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
        }
        return result;
    }

});
//自定义过滤器
app.filter('coverEdit', function(){
    return function(val){
        var result;
        switch(val){
            case "COMMUNICATE":
                result = "通信类";
                break;
            case "SOFTWARE":
                result = "软件类";
                break;
            case "MARKETINGPLAN":
                result = "营销策划类";
                break;
            case "INTELLIGENTIZE":
                result = "智能化类";
                break;
            case "ELECTRONICCOMMERCE":
                result = "电子商务类";
                break;
            case "REALTY":
                result = "房地产类";
                break;
            case "FINANCIAL":
                result = "理财类";
                break;
            case "FOOD":
                result = "食品类";
                break;
        }
        return result;
    }


});

