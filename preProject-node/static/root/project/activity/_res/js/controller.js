var app = angular.module('activity', [{
    files:[
        "root/project/activity/_res/js/service.js"
    ]
}]);
app.controller('activityCtrl',function ($scope,$state) {

    if ($state.current.url == '/activity') {//默认加载列表
        $state.go('root.project.activity.list[12]')
    }

}).controller('activityMenuCtrl',function($scope,$state,$rootScope,$location,activitySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    if (window.location.href.split('suId=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idSocialList = window.location.href.split('suId=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        activitySer.menuPermission(buttonName).then(function(response){
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
     $scope.list = function(){
        $scope.menuClass = 'listMenu';
         $scope.getId = '';
         $scope.idSocialList=''
    };
    $scope.firstSummary = function(){
        $scope.menuClass = 'firstSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.secondSummary = function(){
        $scope.menuClass = 'secondSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''

    };
    $scope.thirdSummary = function(){
        $scope.menuClass = 'thirdSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.areasSummary = function(){
        $scope.menuClass = 'areasSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.projectSummary = function(){
        $scope.menuClass = 'projectSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.projectNameSummary = function(){
        $scope.menuClass = 'projectNameSummaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    //查看详细信息
    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    $scope.firstDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.firstDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'firstDetailsMenu'
        }
    };
    $scope.secondDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.secondDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'secondDetailsMenu'
        }
    };
    $scope.thirdDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.thirdDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'thirdDetailsMenu'
        }
    };
    $scope.areasDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.areasDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'areasDetailsMenu'
        }
    };
    $scope.projectDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.projectDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'projectDetailsMenu'
        }
    };
    $scope.projectNameDetails = function(){
        if($scope.idSocialList){
            $state.go('root.project.activity.projectNameDetails[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'projectNameDetailsMenu'
        }
    };
});


