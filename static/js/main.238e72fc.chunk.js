(this.webpackJsonpfaq=this.webpackJsonpfaq||[]).push([[0],{37:function(e,t,a){e.exports=a(51)},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),c=a.n(o),i=(a(42),a(43),a(44),a(11)),r=a(53),s=a(54),u=a(34),m=a(57),h=a(55),f=a(35),d=a(56),p=a(60),g=a(59),y=(a(45),a(61)),w=a(58),E=(a(46),a(24)),k=function(e){var t="#".concat(e.id)===window.location.hash,a=Object(n.useState)(t),o=Object(i.a)(a,2),c=o[0],r=o[1];return l.a.createElement("div",{id:e.id,className:"question ".concat(c?"opened":"")},l.a.createElement("div",{className:"question-title",onClick:function(){return r(!c)},"data-track-section":"question","data-track-action":"click","data-track-label":"view","data-track-value":e.id},e.title),l.a.createElement(w.a,{in:c},l.a.createElement("div",{className:"question-body"},e.content,l.a.createElement("div",{className:"question-footer mt-2 py-1 text-right"},l.a.createElement("span",{className:"text-muted mb-1"},"Did you find this helpful?"),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-light btn-sm mr-2","data-track-section":"question","data-track-action":"click","data-track-label":"unhelpful","data-track-value":e.id,onClick:function(e){return r(!1)}},l.a.createElement(E.a,{className:"icon"}),"No"),l.a.createElement("button",{"data-track-section":"question","data-track-action":"click","data-track-label":"helpful","data-track-value":e.id,className:"btn btn-light btn-sm",onClick:function(e){return r(!1)}},l.a.createElement(E.b,{className:"icon"}),"Yes"))))))},b=(a(49),function(e){return l.a.createElement(p.a,{className:"topic",id:e.id},l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Title,null,e.title),l.a.createElement(y.a,{variant:"flush"},e.questions.map((function(e,t){return l.a.createElement(y.a.Item,{className:"p-0",key:t},l.a.createElement(k,e))})))))}),v={id:"clockface_errors",title:"\ud83d\udd52 Clock face errors",questions:[{id:"clock_error",title:'There is an error message "Clock Error" in my watch. How do I fix it?',content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"This usually occurs if there is an interruption between your watch and phone while installing clock faces. Unfortunately, it appears to be fairly random and not limited to our clock faces. If you restart your watch and force quit the Fitbit app on your phone and try again, it should then install normally."),l.a.createElement("p",null,'If the "Clock Error" message happens by itself after using the clock face for a while, swapping to a different clock face then installing this clock face again should fix it.'))},{id:"install_notcomplete",title:"The installation never completes, it just bounces back and forth.",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The Fitbit connection can be unstable when installing which can make things difficult. The best way to fix this issue is to hold all the button(s) on your watch until the Fitbit logo appears. While your watch is rebooting, turn your phone off and on again. After both devices turn back on, open the Fitbit app and sync and everything should work again."),l.a.createElement("p",null,"If that doesn't work and you're using the new Fitbit update, try to switch clocks using the Clocks app on your watch - this can force the app to finish switching or installing."))},{id:"missing_parts",title:"Some parts of the clock face are missing or displaying incorrectly.",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"This can happen after installing a Fitbit app update or when you install a new version of a clock face. Please go to your clock face in the Fitbit app, and toggle all the permissions off and on again."),l.a.createElement("p",null,"If that doesn't work, please install a different clock face, then install this one again."))},{id:"weather_notupdating",title:"The weather forecast is not updating!",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The weather data is sent to your watch through your phone, so make sure your phone is nearby with Bluetooth turned on, location service enabled and access to the Internet."),l.a.createElement("p",null,"In the Fitbit app you might want to check if the clock face permissions are enabled."),l.a.createElement("p",null,"If you are still facing issues with the weather forest after checking the items above, you can try the following:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Restart your mobile phone Bluetooth (turn it off/on again);"),l.a.createElement("li",null,"Sync your watch with Fitbit;"),l.a.createElement("li",null,"Reinstall the clockface (install a different one and then install it back);")))},{id:"access_settings_msg",title:'What is this "Access the settings page in your mobile device and login using your Fitbit account to use this clockface" message about?',content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"We did try to make our users lives easier in our first clock faces by providing a way for them to avoid having to unlock their clock faces every time they did switch/reinstall them."),l.a.createElement("p",null,"By asking our users to log in using their Fitbit account we have access to an unique identifier which we can use in subsequent installations to identify users back."),l.a.createElement("p",null,"Unfortunately this feature apparently caused more issues than solved them, as some users seem to get stuck with a persistent message even after loging in succesfully."),l.a.createElement("p",null,"We are slowly removing this feature from our clock faces but in the meantime if you are affected by the problem described try the following:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Restart your mobile phone Bluetooth (turn it off/on again);"),l.a.createElement("li",null,"Sync your watch with Fitbit;"),l.a.createElement("li",null,"Reinstall the clockface (install a different one and then install it back);")))},{id:"nothing_working",title:"None of the above works, what else can I try?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"If you swap to another clock face and swap back to this one, it should fix any strange issues you may be having. Please also ensure you have the latest Fitbit app updates and installed any watch updates too."),l.a.createElement("p",null,"There is also a known Fitbit issue when updating the Fitbit app that can change your clock face permissions. Please go to your clock face in the Fitbit app, and toggle all the permissions off and on again."),l.a.createElement("p",null,"Ultimately you can try the following:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Restart your mobile phone Bluetooth (turn it off/on again);"),l.a.createElement("li",null,"Sync your watch with Fitbit;"),l.a.createElement("li",null,"Reinstall the clockface (install a different one and then install it back);")),l.a.createElement("p",null,"If the steps above didn't help you, you might want to try ",l.a.createElement("a",{href:"mailto:kr4ftmail@gmail.com"},"contacting us")," directly."))}]},F=[{id:"purchase_unlock",title:"\ud83d\udcb3 Purchasing & Unlocking",questions:[{id:"how_purchase",title:"How do I purchase a clock face?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"After installing the clock face, a ",l.a.createElement("strong",null,"5-digit code")," will pop up on your watch."),l.a.createElement("p",null,"Access the website shown on your watch ",l.a.createElement("a",{href:"https://kiezelpay.com/code/",target:"_blank",rel:"noopener noreferrer"},"(or click here)")," and type the code in."),l.a.createElement("p",null,"Once purchased, the clock face will instantly unlock for you."))},{id:"bundle_purchase",title:"How do I purchase a bundle?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Bundles are usually a great way of saving money. If a bundle is offered with a clock face, it will probably have a better value for money."),l.a.createElement("p",null,"Not every clock face is part of a bundle, but if the one you are purchasing is you will have the choice to opt in for the bundle during the payment."),l.a.createElement("p",null,"You can also purchase bundles directly from our website at:"),l.a.createElement("ul",{className:"mb-0"},l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.kr4ft.com",target:"_blank",rel:"noopener noreferrer"},"Kr4ft")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.tidalwave.eu",target:"_blank",rel:"noopener noreferrer"},"Tidalwave"))))},{id:"already_paid",title:"I have already paid, do I need to purchase again?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Definitely not, purchases are valid for a lifetime. Once you have purchased a clock face you will have it for as long as you want."),l.a.createElement("p",null,"Unfortunately Fitbit does not always allow us to recognize you again after (re)installing an app or clock face, so our system might think you are a new customer when that happens and might ask you to pay again."),l.a.createElement("p",null,"If that does happen, just access the ",l.a.createElement("a",{href:"https://kiezelpay.com/unlock",target:"_blank",rel:"noopener noreferrer"},"unlock feature"),", type in your email and the ",l.a.createElement("strong",null,"5-digit code")," displayed and you will have access to the clock face again."))},{id:"find_own_clockfaces",title:"How can I find which clock faces do I own?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"It might be hard to keep track of what clock faces you might own, but luckily you can check it up using the ",l.a.createElement("a",{href:"https://kiezelpay.com/lookup",target:"_blank",rel:"noopener noreferrer"},"lookup feature"),"."))},{id:"refund",title:"I'm not satisfied with a purchase and I want a refund!",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"We are deeply sorry to hear about it. If you think there's something we can do to change your mind please ",l.a.createElement("a",{href:"mailto:kr4ftmail@gmail.com"},"contact us")," and we will try our best to sort whatever problems you might be facing."),l.a.createElement("p",null,"If you are decided you want to request a refund you will need to ",l.a.createElement("a",{href:"https://kiezelpay.com/faq/faq-refund",target:"_blank",rel:"noopener noreferrer"},"contact our payment provider")," and they will handle it for you."))}]},v,{id:"settings_configurations",title:"\u2699\ufe0f Settings & Configurations",questions:[{id:"access_settings",title:"How can I access the settings page?",content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"You can access the settings page by following these simple steps:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Open the Fitbit app on your phone;"),l.a.createElement("li",null,"Tap the icon in the top left corner;"),l.a.createElement("li",null,"Select your watch in the list;"),l.a.createElement("li",null,"Select the clockface;"),l.a.createElement("li",null,"Click on ",l.a.createElement("strong",null,"settings"),";")))},{id:"change_temperature",title:"How can I change the temperature from Celsius to Farenheit?",content:l.a.createElement(l.a.Fragment,null)},{id:"change_date_format",title:"How can I display the date in a different format?",content:l.a.createElement(l.a.Fragment,null)},{id:"change_time_format",title:"How can I display the time in a different format?",content:l.a.createElement(l.a.Fragment,null)}]}];var I=function(){var e=F,t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],y=Object(n.useState)(e),w=Object(i.a)(y,2),E=w[0],k=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hero"},l.a.createElement("img",{src:"hero_bg.png",className:"bg",alt:"background"}),l.a.createElement(r.a,{className:"h-100"},l.a.createElement(s.a,{className:"h-100"},l.a.createElement(u.a,{md:12,className:"d-flex flex-column justify-content-center"},l.a.createElement("h1",{className:"mb-3 "},"How can we help?"),l.a.createElement(m.a.Group,{controlId:"formSearch"},l.a.createElement(h.a,{className:"mb-3 searchInput"},l.a.createElement(f.a,{placeholder:"Let us help you to find your answer","aria-label":"Search","aria-describedby":"basic-search",onChange:function(t){var a=t.target.value;c(a);var n=e.filter((function(e){return JSON.stringify(e).toLowerCase().indexOf(a)>=0}))||[];k(n)},value:o}),l.a.createElement(h.a.Append,null,l.a.createElement(d.a,{variant:"primary"},"Search")))))))),l.a.createElement(r.a,null,l.a.createElement(s.a,{className:"mt-4"},l.a.createElement(u.a,{md:4,className:"topics-nav mb-4"},l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"flex-md-column flex-xs-row"},e.map((function(e){return l.a.createElement(g.a.Link,{href:"#".concat(e.id),key:e.id},e.title)}))))),l.a.createElement(u.a,{md:8,className:"topics d-flex flex-column justify-content-center"},E.length>0&&E.map((function(e){return l.a.createElement(b,{id:e.id,key:e.id,title:e.title,questions:e.questions})})),0===E.length&&l.a.createElement("span",{className:"text-center"},"Oh snap! We didn't find an answer to that. Wanna try ",l.a.createElement("a",{href:"mailto:kr4ftmail@gmail.com"},"contacting us")," directly?")))))};var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.238e72fc.chunk.js.map