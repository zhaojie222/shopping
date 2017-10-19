//Controller控制器
//Directive指令
//Service服务
//View网页
//app.js路由
//指令-控制器-自己服务-ajax服务
var app=angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("car",{
        url:"/car",
        templateUrl:"./App/View/homepage.html",
        controller:"carController"
    })
    //默认路由
    $urlRouterProvider.otherwise("/car");
})