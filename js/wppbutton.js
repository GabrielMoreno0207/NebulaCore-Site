
var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?39738';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
    "backgroundColor":"#8b5cf6",
    "ctaText":"Converse conosco",
    "borderRadius":"25",
    "marginLeft": "0",
    "marginRight": "20",
    "marginBottom": "20",
    "ctaIconWATI":false,
    "position":"right"
},
"brandSetting":{
    "brandName":"Nebula Core",
    "brandSubTitle":"undefined",
    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText":"Estamos prontos para conversar!",
    "messageText":"Ola, gostaria de conversar sobre seus serviços!",
    "backgroundColor":"#8b5cf6",
    "ctaText":"Converse conosco",
    "borderRadius":"25",
    "autoShow":false,
    "phoneNumber":"18998244817"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
