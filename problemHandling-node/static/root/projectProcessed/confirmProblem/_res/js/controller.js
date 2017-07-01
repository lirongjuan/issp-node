var app = angular.module('confirmProblem', [{
    files:[
        "root/projectProcessed/confirmProblem/_res/js/service.js",
    ]
}]);
app.controller('confirmCtrl',function ($scope,$state) {
    if ($state.current.url == '/confirmProblem') {//默认加载列表
        $state.go('root.projectProcessed.confirmProblem.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('confirmMenuCtrl',function($scope,$state,$rootScope,$location,confirmSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        confirmSer.confirmPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.confirmProblem.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.confirmProblem.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //---------------------------
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.confirmProblem.upload[12]',{id:$scope.idListd});
            $scope.menuClass = 'uploadMenu'
        }
    }
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.projectProcessed.confirmProblem.view[12]',{id:$scope.idListd});
            $scope.menuClass = 'viewMenu'
        }
    }
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "FINANCIALDEPARTMENTBUDGET":
                result = "财务部门-预算";
                break;
            case "FINANCIALDEPARTMENTACCOUNT":
                result = "财务部门-账务";
                break;
            case "FINANCIALDEPARTMENTMONEY":
                result = "财务部门-资金";
                break;
            case "COMPREHENSIVERESOURCESWELFARE":
                result = "综合资源部-福利";
                break;
            case "COMPREHENSIVERESOURCESLITERACY":
                result = "综合资源部-素养";
                break;
            case "COMPREHENSIVERESOURCESPLAN":
                result = "综合资源部-规划";
                break;
            case "IMPLEMENTATIONSYSTEMPROJECTGROUP":
                result = "一线实施体系-项目组";
                break;
            case "IMPLEMENTATIONSYSTEMDEVELOPDEPARTMENT":
                result = "一线实施体系-研发部";
                break;
            case "BUSINESSDEVELOPCUSTOMER":
                result = "商务发展部-客户管理";
                break;
            case "BUSINESSDEVELOPBUSINESS":
                result = "商务发展部-业务管理";
                break;
            case "BUSINESSDEVELOPPROGRESS":
                result = "商务发展部-进度管理";
                break;
            case "COMPLETE":
                result = "完成";
                break;
            case "UNFINISHED":
                result = "未完成";
                break;
                
        }
        return result;
    }
});
