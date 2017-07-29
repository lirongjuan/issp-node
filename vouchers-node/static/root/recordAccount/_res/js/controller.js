var app = angular.module('recordAccount', [{
    files: ['root/recordAccount/_res/js/service.js']
}]);
app.controller('recordAccountCtrl', function ($scope,$state) {
    if ($state.current.url == '/recordAccount') {//默认加载列表
        $state.go('root.recordAccount.voucherGeneration');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('seledIds',function(event,msg) {
        $scope.$broadcast('checkIds', msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,recordSer){
    $scope.navCla='voucherGeneration';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'voucherGeneration';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    recordSer.navPermission().then(function(response){
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
    recordSer.setPermission().then(function(response){
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
        {id:"1",item:"记账凭证",menuList:[{name:'记账凭证生成设置',msg:'voucherGeneration'},{name2:"记账凭证审核",msg:'voucherAudit'},{name3:"已审核凭证",msg:'auditCredentials'},{name4:"已过帐",msg:'posted'},{name5:"结帐记录",msg:'billRecords'},{name6:"记账凭证记录",msg:'voucherRecords'}],showIs:true},
        {id:"2",item:"设置",menuList:[{name7:'设置',msg:'setting'}],showIs:true}
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
                /* angular.forEach(function(item){ showSubAble sublist*/
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
//自定义指令
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
