var app = angular.module('cost', [{
    files:[
        "root/project/cost/_res/js/service.js"
    ]
}]);
app.controller('costCtrl',function ($scope,$state) {

    if ($state.current.url == '/cost') {//默认加载列表
        $state.go('root.project.cost.list[12]')
    }
}).controller('costMenuCtrl',function($scope,$state,$rootScope,$location,costSer){
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
        costSer.menuPermission(buttonName).then(function(response){
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
    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.project.cost.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.project.cost.list[12]',{id:$scope.getId,name:'delete',page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    $scope.collectPro = function(){
        $scope.menuClass = 'collectProMenu';
        $scope.getId = '';
        $scope.idSocialList=''
    };
    //查看详细信息
    $scope.$on("socialListId", function(event, suId){
        $scope.idSocialList = suId;
    });
    $scope.details = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.details[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailsMenu'
        }
    };
    //项目名称对应明细
    $scope.detailName = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.detailName[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailNameMenu'
        }
    };
    //项目组汇总对应明细
    $scope.detailGroup = function(){
        if($scope.idSocialList){
            $state.go('root.project.cost.detailGroup[12]',{suId:$scope.idSocialList});
            $scope.menuClass = 'detailGroupMenu'
        }
    };

});


