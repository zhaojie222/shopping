//Controller������
//Directiveָ��
//Service����
//View��ҳ
//app.js·��
//ָ��-������-�Լ�����-ajax����
var app=angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("car",{
        url:"/car",
        templateUrl:"./App/View/homepage.html",
        controller:"carController"
    })
    //Ĭ��·��
    $urlRouterProvider.otherwise("/car");
})