var app = angular.module('areaMonth', [{
    files:[
        "root/budget/areaMonth/_res/js/service.js"
    ]
}]);
app.controller('areaMonthCtrl',function ($scope,$state) {

    if ($state.current.url == '/areaMonth') {//默认加载列表
        $state.go('root.budget.areaMonth.list')
    }

}).controller('areaMonthMenuCtrl',function($scope,$state,$rootScope,$location,areaMonthSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        areaMonthSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.theMonth = function(){
        if($scope.getId){
            $state.go('root.budget.areaMonth.theMonth[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='theMonthMenu';
        }
    };
       $scope.list = function(){
        $scope.menuClass = 'listMenu';
           $scope.getId = ''
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.getId = ''
    };
});


