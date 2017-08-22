var app = angular.module('setting', [{
    files:[
        "root/dealt/setting/_res/js/service.js"
    ]
}]);
app.controller('settingCtrl',function ($scope,$state) {

    if ($state.current.url == '/setting') {//默认加载列表
        $state.go('root.dealt.setting.list[12]')
    }

}).controller('settingMenuCtrl',function($scope,$state,$rootScope,$location){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }

    $scope.$on('passId',function(event,id){
        $scope.getId=id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.list = function(){
        $state.go('root.dealt.setting.list[12]');
        $scope.menuClass = 'listMenu'
    };
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.dealt.setting.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }

    }
});

app.filter('cover3', function(){
    return function(val){
        var result;
        switch(val){
            case "LEVEL":
                result = "层级";
                break;
            case "MODULE":
                result = "模块";
                break;
            case "POSITION":
                result = "岗位";
                break;
            case "DEPART":
                result = "部门";
                break;
        }
        return result;
    }

});


