var app = angular.module('confirmed', [{
    files:[
        "root/processing/confirmed/_res/js/service.js"
    ]
}]);
app.controller('confirmedCtrl',function ($scope,$state) {
    if ($state.current.url == '/confirmed') {
        $state.go('root.processing.confirmed.list[12]');
    }
}).controller('confirmedMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}

    }
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //编辑
    $scope.first = function(){
        if($scope.idList){
            $state.go('root.processing.confirmed.list[12]',{id:$scope.idList,name:'first',page:$scope.page});
            $scope.menuClass = 'firstMenu'
        }
    };
    $scope.second = function(){
        if($scope.idList){
            $state.go('root.processing.confirmed.list[12]',{id:$scope.idList,name:'second',page:$scope.page});
            $scope.menuClass = 'secondMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
});
//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "YES":
               result = "是";
               break;
           case "NOT":
               result = "否";
               break;
            case "WAIT":
               result = "等待确认薪资";
               break;
            case "CONFIRM":
               result = "已确认薪资";
               break;
            case "PAYED":
               result = "已付薪资";
               break;
            case "RECEIVED":
               result = "已确认收款薪资";
               break;
       }
       return result;
   }

});