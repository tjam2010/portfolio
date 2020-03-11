(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/landing.fa652fee.jpg"},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(20),l=a.n(c),r=(a(30),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=a(8),h=a(11),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"menu"},o.a.createElement("div",{id:"divider"}),o.a.createElement("h1",null,o.a.createElement(d.b,{activeClassName:"active",id:"title",className:"link",exact:!0,to:"/portfolio",onClick:function(){document.getElementById("landing").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"TJ Gascho")),o.a.createElement("h3",{className:"link-wrap-header"},o.a.createElement(d.b,{className:"link parent-link",to:"/work",onClick:function(){document.getElementById("work").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"My Work")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/work/understand",onClick:function(){document.getElementById("work").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"understanding")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/work/communicate",onClick:function(){document.getElementById("work").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"communicating")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/work/design",onClick:function(){document.getElementById("work").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"designing")),o.a.createElement("h3",{className:"link-wrap-header"},o.a.createElement(d.b,{className:"link parent-link",to:"/story",onClick:function(){document.getElementById("about").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"My Story")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/story/about",onClick:function(){document.getElementById("about").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"about")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/story/resume",onClick:function(){document.getElementById("resume").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"resume")),o.a.createElement("h5",{className:"link-wrap"},o.a.createElement(d.b,{className:"link",to:"/story/contact",onClick:function(){document.getElementById("contact").scrollIntoView({behavior:"smooth"}),console.log("scrolling")}},"contact")))}}]),t}(n.Component),E=a(23),b=a.n(E),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"page",id:"landing"},o.a.createElement("div",{className:"content",id:"landing-content"},o.a.createElement("div",{id:"landing-caption"},"I am a Sustainability-Focused Storyteller."),o.a.createElement("img",{id:"landing-img",src:b.a,alt:"TJ taking photos of some lush green trees on Monkey Mountain in Taiwan."})))}}]),t}(n.Component),f=a(24),v=a.n(f),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=o.a.createElement(v.a,null,o.a.createElement("div",null,"Work 1"),o.a.createElement("div",null,"Work 2"),o.a.createElement("div",null,"Work 3"));return o.a.createElement("section",{className:"page",id:"work"},o.a.createElement("div",{className:"content",id:"work-content"},o.a.createElement("div",{className:"title",id:"work-caption"},"my work"),e))}}]),t}(n.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"page",id:"about"},o.a.createElement("div",{className:"content",id:"about-content"},o.a.createElement("div",{className:"title",id:"about-caption"},"about")))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"page",id:"resume"},o.a.createElement("div",{className:"content",id:"resume-content"},o.a.createElement("div",{className:"title",id:"resume-caption"},"resume")))}}]),t}(n.Component),y=a(14),O=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).resetForm=function(){e.setState({message:"",name:"",email:""})},e.state={message:"",name:"",email:""},e.handleSubmit=e.handleSubmit.bind(Object(y.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log("submit"),e.preventDefault();this.sendMessage("tj_portfolio",{message_html:this.state.message,from_name:this.state.name,reply_to:this.state.email}),this.resetForm()}},{key:"sendMessage",value:function(e,t){window.emailjs.send("gmail",e,t).then((function(e){console.log("Email successfully sent!"),alert("Email sent- thanks for reaching out!")})).catch((function(e){console.error("Error sending:",e),alert("An error ocurred- please try again later or use my direct e-mail: tjam2010@uw.edu")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"form-spacer"},o.a.createElement("form",{id:"form"},o.a.createElement("div",{className:"input-wrap"},o.a.createElement("input",{placeholder:"Name",type:"text",onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name,required:!0})),o.a.createElement("div",{className:"input-wrap"},o.a.createElement("input",{placeholder:"E-mail Address",type:"email",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,required:!0}),o.a.createElement("span",{className:"validation-text"},"Please enter a valid email address.")),o.a.createElement("div",{className:"flex input-wrap"},o.a.createElement("textarea",{placeholder:"Message",rows:"5",onChange:function(t){return e.setState({message:t.target.value})},value:this.state.message,required:!0})),o.a.createElement("button",{id:"contact-button",onClick:this.handleSubmit},"Send")))}}]),t}(n.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"page",id:"contact"},o.a.createElement("div",{className:"content",id:"contact-content"},o.a.createElement("div",{className:"title",id:"contact-caption"},"contact"),o.a.createElement("div",{id:"form-wrapper"},o.a.createElement("div",{id:"address"},o.a.createElement("div",{id:"address-name"},"TJ Gascho"),o.a.createElement("a",{className:"page-link",href:"mailto:tjam2010@uw.edu"},"tjam2010@uw.edu")),o.a.createElement(O,null))),o.a.createElement("div",{id:"footer"}))}}]),t}(n.Component),C=(n.Component,a(36),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",{className:"wave"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none",width:"100%",height:"150"},o.a.createElement("path",{fill:"#2E6AF3",fillOpacity:"1",d:"M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,181.3C672,224,768,256,864,245.3C960,235,1056,181,1152,133.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))),o.a.createElement(k,null),o.a.createElement(w,null),o.a.createElement(j,null),o.a.createElement(N,null))}}]),t}(n.Component)),I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(h.a,{exact:!0,strict:!0,path:"/portfolio",component:C}),o.a.createElement(h.a,{strict:!0,path:"/work",component:C}),o.a.createElement(h.a,{exact:!0,strict:!0,path:"/story",component:C}),o.a.createElement(h.a,{path:"/story/about",component:C}),o.a.createElement(h.a,{strict:!0,path:"/story/resume",component:C}),o.a.createElement(h.a,{strict:!0,path:"/story/contact",component:C})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.35172fab.chunk.js.map