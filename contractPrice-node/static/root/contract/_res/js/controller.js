var app = angular.module('business', [
    {files:[
    "root/contract/_res/js/service.js"
]}
]);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/contract') {//默认加载列表
        $state.go('root.contract.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on("changeId",function(event,id){
        $scope.$broadcast("passId",id)
    });
    $scope.$on("changePositionId",function(event,id){
        $scope.$broadcast("passPositionId",id)
    })

}).controller('navCtrl',function($scope,$state,$location,contractSer){
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
       $scope.navCla=name
    };

  contractSer.navPermission().then(function(response){   //权限设置
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
            $scope.isHide= false;
        }
    });
    contractSer.setPermission().then(function(response){ //权限设置
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
        {id:"1",item:"合同单价管理",menuList:[{name1:"合同项目基本信息",msg:'basicinfo'},{name2:"合同单价资料信息",msg:'material'},{name3:"节点标准信息",msg:'standard'}],showIs:true},
        {id:"2",item:"设置",menuList:[{name4:'设置',msg:'setting'}],showIs:false}
    ];
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

