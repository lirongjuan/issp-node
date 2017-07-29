var app = angular.module('developModule', [{
    files: ['root/developProgress/_res/js/service.js']
}]);
app.controller('progressCtrl', function ($scope,$state) {
    if ($state.current.url == '/developProgress') {//默认加载列表
        $state.go('root.developProgress.plan');
    }

}).controller('navCtrl',function($scope,$state,$location,developSer){
    $scope.navCla='yearPlan';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'yearPlan';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    developSer.navPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    developSer.setPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList = [
        {id:"1",item:"计划管理",menuList:[{name:'年计划',msg:'yearPlan'},{name2:"月计划",msg:'monthPlan'},{name3:"周计划",msg:'weekPlan'},{name4:"日计划",msg:'dayPlan'}],showIs:false},
        {id:"2",item:"市场管理",menuList:[{name5:'市场需求分析',msg:'demandAnalysis'},{name6:"目标信息",msg:'targetInfo'},{name7:"市场挖掘",msg:'marketMining'},{name8:"市场调研",msg:'marketMeasured'},{name9:"市场测算",msg:'directionSubjects'}],showIs:false},
        {id:"3",item:"其他",menuList:[{name10:'业务类型管理',msg:'businessType'},{name11:"业务方向科目",msg:'directionSubjects'}],showIs:false},
        {id:"4",item:"设置",menuList:[{name12:'设置',msg:'setting'}],showIs:false}
    ];
    if(active){
        for(var i = 0; i < $scope.showsList.length; i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0; j < n.length; j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});

app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});