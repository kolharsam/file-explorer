(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(12),r=a.n(i),c=a(3),o=a(4),s=a(6),d=a(5),m=a(7),u=a(44),p=a(45),h=a(43),f=a(17),b=a(2),k=a(41),O=a(42),E=(a(28),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={path:e.location.pathname,listItems:[],topLink:""},a.listAndLinkMaker=a.listAndLinkMaker.bind(Object(b.a)(Object(b.a)(a))),a.root=l.a.createElement("div",{className:"list-item",key:"0"},l.a.createElement(k.a,{to:"/",style:{textDecoration:"none",color:"#81878C"}},"root")),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"listAndLinkMaker",value:function(){var e=this.state.path.toString().split("/");e.shift(),this.setState({listItems:Object(f.a)(e)});var t="/";if(""===e[e.length-1]?(e.pop(),e.pop()):e.pop(),0!==e.length)for(var a=0;a<e.length;a++)t+=e[a],a!==e.length-1&&(t+="/");this.setState({topLink:t})}},{key:"componentWillMount",value:function(){this.listAndLinkMaker()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"overall"},l.a.createElement("div",{className:"top-link"},l.a.createElement(k.a,{to:this.state.topLink},l.a.createElement("i",{className:"fa fa-arrow-circle-up",style:{marginTop:"26.9px",marginLeft:"41.9px",fontSize:"24px",color:"#2F363F"}}))),l.a.createElement("div",{className:"breadcrumb"},this.root,this.state.listItems.map(function(e,t){return l.a.createElement("div",{className:"list-item",key:t},l.a.createElement(k.a,{to:"/"+e,style:{textDecoration:"none",color:"#81878C"}},e))}))))}}]),t}(n.Component)),j=Object(O.a)(E),v=(a(32),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={searchText:""},a.handleOnChange=a.handleOnChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleOnChange",value:function(e){var t=this;e.preventDefault(),this.setState({searchText:e.target.value},function(){console.log(t.state.searchText)})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{border:"1px solid #DDE0E4",borderRadius:"8px",paddingLeft:"12px",paddingRight:"12px",position:"fixed",marginLeft:"772px",marginTop:"24px"}},l.a.createElement("i",{className:"fas fa-search",id:"searchIcon",style:{fontSize:"14px",color:"#AFB2B6",position:"relative"}}),l.a.createElement("input",{type:"text",style:{height:"32px",width:"204px",paddingLeft:"8px",border:"none",borderRadius:"8px"},onChange:function(t){e.handleOnChange(t)},value:this.state.searchText,placeholder:"Search for anything"})))}}]),t}(n.Component)),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"24px",alignItems:"baseline"}},l.a.createElement(j,null),l.a.createElement(v,null)))}}]),t}(n.Component),x=a(9),g=[{path:"/",filesAndFoldersPresent:[{filename:"apps",type:"folder",size:"452kB",creatorName:"Sameer",createdDate:"25th Aug, 2018",linkTo:"/apps"},{filename:"pictures",type:"folder",size:"609kB",creatorName:"Sameer",createdDate:"21st Jan, 2018",linkTo:"/pictures"},{filename:"videos",type:"folder",size:"209kB",creatorName:"Sameer",createdDate:"15th Oct, 2018",linkTo:"/videos"},{filename:"docs",type:"folder",size:"512kB",creatorName:"Sameer",createdDate:"2nd Feb, 2019",linkTo:"/docs"},{filename:"a.pdf",type:"file",class:"pdf",size:"2kB",creatorName:"Sameer",createdDate:"12th Jan, 2019"},{filename:"b.jpg",type:"file",class:"image",size:"24kB",creatorName:"Sameer",createdDate:"23rd Nov, 2018"}]},{path:"/apps",filesAndFoldersPresent:[{filename:"some.txt",type:"file",class:"text",size:"24kB",creatorName:"Sameer",createdDate:"23rd Nov, 2018"}]},{path:"/pictures",filesAndFoldersPresent:[{filename:"pic1.jpg",type:"file",class:"image",size:"254kB",creatorName:"Sameer",createdDate:"3rd Nov, 2018"},{filename:"pic2.jpg",type:"file",class:"image",size:"908kB",creatorName:"Sameer",createdDate:"7th Apr, 2018"}]},{path:"/videos",filesAndFoldersPresent:[{filename:"vid1.mp4",type:"file",class:"video",size:"54kB",creatorName:"Sameer",createdDate:"3rd Nov, 2018"},{filename:"vid2.mp4",type:"file",size:"921kB",class:"video",creatorName:"Sameer",createdDate:"7th Apr, 2018"},{filename:"vid3.mp4",type:"file",size:"524kB",class:"video",creatorName:"Sameer",createdDate:"19th Jul, 2018"}]},{path:"/docs",filesAndFoldersPresent:[{filename:"work",type:"folder",size:"32kB",creatorName:"Sameer",createdDate:"25th Aug, 2018",linkTo:"/docs/work"},{filename:"c.pdf",type:"file",class:"pdf",size:"254kB",creatorName:"Sameer",createdDate:"3rd Nov, 2018"},{filename:"d.docx",type:"file",class:"doc",size:"908kB",creatorName:"Sameer",createdDate:"7th Apr, 2018"}]},{path:"/docs/work",filesAndFoldersPresent:[{filename:"e.pdf",type:"file",class:"pdf",size:"254kB",creatorName:"Sameer",createdDate:"3rd Nov, 2018"},{filename:"f.ts",type:"file",class:"file",size:"908kB",creatorName:"Sameer",createdDate:"7th Apr, 2018"}]}],C=(a(33),a(34),document.getElementById("modal-root")),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={fileOrFolder:"file"},a.handleOnClickFile=a.handleOnClickFile.bind(Object(b.a)(Object(b.a)(a))),a.handleOnClickFolder=a.handleOnClickFolder.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleOnClickFile",value:function(e){e.preventDefault(),this.setState({fileOrFolder:"file"},function(){console.log("set to file")})}},{key:"handleOnClickFolder",value:function(e){e.preventDefault(),this.setState({fileOrFolder:"folder"},function(){console.log("set to file")})}},{key:"render",value:function(){var e=this;return r.a.createPortal(l.a.createElement("div",{style:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",marginTop:"50px",marginLeft:"500px"},onClick:this.props.onClose},l.a.createElement("div",{style:{height:"447px",width:"316px",padding:20,background:"#FFFFFF",border:"1px solid rgba(221,224,228,0.70)",boxShadow:"0 16px 64px 0 rgba(0,0,0,0.08)",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("div",{className:"top",style:{clear:"both",marginBottom:"16px"}},l.a.createElement("h3",{style:{marginLeft:"90px",fontSize:"18px",color:"#2F363F",float:"left",fontFamily:"-apple-system"}},"Create New"),l.a.createElement("button",{onClick:this.props.onClose,style:{float:"right",marginLeft:"68px",height:"24px",width:"24px",fontSize:"18px",background:"none",border:"none",outline:"none"}},"X")),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:"btn1",onClick:function(t){return e.handleOnClickFile(t)}},"File"),l.a.createElement("button",{className:"btn2",onClick:function(t){return e.handleOnClickFolder(t)}},"Folder")),l.a.createElement("div",{className:"inputs"},l.a.createElement("input",{className:"input",type:"text",style:{height:"40px",width:"220px",paddingLeft:"16px",borderRadius:"8px"},placeholder:"Name"}),l.a.createElement("input",{className:"input",type:"text",style:{height:"40px",width:"220px",paddingLeft:"16px",borderRadius:"8px"},placeholder:"Creator"}),l.a.createElement("input",{className:"input",type:"text",style:{height:"40px",width:"220px",paddingLeft:"16px",borderRadius:"8px"},placeholder:"Size"}),l.a.createElement("input",{className:"input",type:"text",style:{height:"40px",width:"220px",paddingLeft:"16px",borderRadius:"8px"},placeholder:"Date"})),l.a.createElement("div",{className:"create_button"},l.a.createElement("button",{className:"create"},"Create")))),C)}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleShowMessageClick=function(e){e.preventDefault(),a.setState({showModal:!0})},a.handleCloseModal=function(e){e.preventDefault(),a.setState({showModal:!1})},a.state={showModal:!1},a.handleShowMessageClick=a.handleShowMessageClick.bind(Object(b.a)(Object(b.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{border:"2px #c4c4c4 dashed",height:"113px",width:"96px",textAlign:"center",paddingTop:"28px",fontSize:"42px",color:"#c4c4c4",borderRadius:"6px",title:"Add File or Create Folder",cursor:"pointer"},onClick:this.handleShowMessageClick},"+"),this.state.showModal?l.a.createElement(N,{onClose:function(t){return e.handleCloseModal(t)}}):null)}}]),t}(n.Component),F=document.getElementById("modal-root"),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createPortal(l.a.createElement("div",{style:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",display:"grid",justifyContent:"center",alignItems:"center",marginTop:"30px"},onClick:this.props.onClose},l.a.createElement("div",{style:{padding:20,background:"#fff",borderRadius:"2px",display:"inline-block",minHeight:"447px",margin:"1rem",position:"relative",minWidth:"316px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",justifySelf:"center"}},l.a.createElement("div",{className:"top",style:{clear:"both",marginBottom:"20px"}},l.a.createElement("h3",{style:{marginLeft:"124px",fontSize:"18px",color:"#2F363F",float:"left"}},"File Info"),l.a.createElement("button",{onClick:this.props.onClose,style:{float:"right",marginLeft:"78px",height:"24px",width:"24px",fontSize:"18px",backgroundColor:"#ffffff"}},"X")),this.props.children)),F)}}]),t}(n.Component),D=(a(35),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={showMenu:e.show,showInfoPopup:!1},a.onClickOpen=a.onClickOpen.bind(Object(b.a)(Object(b.a)(a))),a.showGetInfo=a.showGetInfo.bind(Object(b.a)(Object(b.a)(a))),a.hideGetinfo=a.hideGetinfo.bind(Object(b.a)(Object(b.a)(a))),a.onClickDelete=a.onClickDelete.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onClickOpen",value:function(){}},{key:"showGetInfo",value:function(){this.setState({showInfoPopup:!0})}},{key:"hideGetinfo",value:function(){this.setState({showInfoPopup:!1})}},{key:"onClickDelete",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.showMenu?l.a.createElement("div",{className:"menu",style:{borderRadius:"8px"}},"folder"===this.props.fileType?l.a.createElement(k.a,{to:this.props.linkTo,style:{textDecoration:"none",color:"#535B62"}},l.a.createElement("div",{className:"option"},l.a.createElement("div",{className:"menu-text"},"Open"))):l.a.createElement("div",{className:"option",onClick:this.onClickOpen},l.a.createElement("div",{className:"menu-text"},"Open")),l.a.createElement("div",{className:"option",onClick:this.showGetInfo},l.a.createElement("div",{className:"menu-text"},"Get Info")),l.a.createElement("div",{className:"option",onClick:this.onClickDelete},l.a.createElement("div",{className:"menu-text"},"Delete"))):null,this.state.showModal?l.a.createElement(S,{onClose:this.hideGetinfo},"This is the secret modal message!"):null)}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={curPath:e.location.pathname,filesToRender:[],showMenu:[]},a.setFilesToRender=a.setFilesToRender.bind(Object(b.a)(Object(b.a)(a))),a.fileSetter=a.fileSetter.bind(Object(b.a)(Object(b.a)(a))),a.handleDoubleClick=a.handleDoubleClick.bind(Object(b.a)(Object(b.a)(a))),a.handleRightClick=a.handleRightClick.bind(Object(b.a)(Object(b.a)(a))),a.handleClickElsewhere=a.handleClickElsewhere.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setFilesToRender",value:function(){for(var e={},t=0;t<g.length;t++)if(g[t].path===this.state.curPath){e=g[t];break}this.setState({filesToRender:Object(f.a)(e.filesAndFoldersPresent)})}},{key:"componentWillMount",value:function(){this.setFilesToRender()}},{key:"fileSetter",value:function(e,t){var a;if("folder"===e)a=l.a.createElement(x.f,{icon:x.c,height:72,width:51});else if("file"===e)switch(t){case"image":case"video":a=l.a.createElement(x.f,{icon:x.d,height:72,width:51});break;case"doc":case"text":a=l.a.createElement(x.f,{icon:x.a,height:72,width:51});break;case"pdf":a=l.a.createElement(x.f,{icon:x.e,height:72,width:51});break;case"audio":a=l.a.createElement(x.f,{icon:x.d,height:72,width:51});break;default:a=l.a.createElement(x.f,{icon:x.b,height:72,width:51})}else alert("Error: Some unknown file type.");return void 0===a?void 0:a}},{key:"handleDoubleClick",value:function(e,t){t.preventDefault(),""!==e&&this.props.history.push(e)}},{key:"handleRightClick",value:function(e,t){var a=this;e.preventDefault();for(var n=[],l=0;l<this.state.filesToRender.length;l++)n[l]=!1;this.setState({showMenu:[].concat(n)}),t>=0&&(n[t]=!0),this.setState({showMenu:[].concat(n)},function(){document.addEventListener("click",a.handleClickElsewhere,!1)})}},{key:"handleClickElsewhere",value:function(e){var t=this;e.preventDefault();for(var a=[],n=0;n<this.state.filesToRender.length;n++)a[n]=!1;this.state.showMenu&&this.setState({showMenu:[].concat(a)},function(){document.removeEventListener("click",t.handleClickElsewhere,!1)})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-content"},this.state.filesToRender.map(function(t,a){return l.a.createElement("div",{className:"grid-item",key:a},l.a.createElement("div",{className:e.state.showMenu[a]?"icon-blue":"icon",onDoubleClick:function(a){e.handleDoubleClick(t.linkTo,a)},onContextMenu:function(t){e.handleRightClick(t,a)}},e.fileSetter(t.type,t.class)),l.a.createElement("span",{className:"file-name"},t.filename),e.state.showMenu[a]?l.a.createElement(D,{show:e.state.showMenu[a],fileName:t.filename,fileType:t.type,fileSize:t.size,fileCreatorName:t.creatorName,fileCreatedDate:t.createdDate,linkTo:t.linkTo}):void 0)}),l.a.createElement("div",{className:"grid-item"},l.a.createElement(w,null))))}}]),t}(n.Component),M=Object(O.a)(T),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(M,null))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(h.a,{key:"docs1",path:"/docs",exact:!0,component:function(){return l.a.createElement(A,null)}}),l.a.createElement(h.a,{key:"work2",path:"/docs/work",component:function(){return l.a.createElement(I,null)}})))}}]),t}(n.Component),G=[{path:"/",exact:!0,component:function(){return l.a.createElement(z,null)}},{path:"/apps",component:function(){return l.a.createElement(B,null)}},{path:"/pictures",component:function(){return l.a.createElement(R,null)}},{path:"/videos",component:function(){return l.a.createElement(L,null)}},{path:"/docs",exact:!0,component:function(){return l.a.createElement(P,null)}},{path:"/docs/work",component:function(){return l.a.createElement(I,null)}}],J=(a(36),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(p.a,null,G.map(function(e,t){return l.a.createElement(h.a,{key:t,path:e.path,exact:e.exact,component:e.component})}))))}}]),t}(n.Component)),W=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={iconClicked:!1},a.sidebarExpandClicked=a.sidebarExpandClicked.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"sidebarExpandClicked",value:function(e){e.preventDefault(),this.setState({iconClicked:!this.state.iconClicked})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar"},l.a.createElement("p",{className:"font-size-12"},"Root"),l.a.createElement("div",{className:"sidebar-menu"},l.a.createElement(k.a,{to:"/apps",style:{textDecoration:"none"}},l.a.createElement("div",{className:"sidebar-item",key:"1"},l.a.createElement("p",{className:"sidebar-item-text"},"Apps"))),l.a.createElement(k.a,{to:"/pictures",style:{textDecoration:"none"}},l.a.createElement("div",{className:"sidebar-item",key:"2"},l.a.createElement("p",{className:"sidebar-item-text"},"Pictures"))),l.a.createElement(k.a,{to:"/videos",style:{textDecoration:"none"}},l.a.createElement("div",{className:"sidebar-item",key:"3"},l.a.createElement("p",{className:"sidebar-item-text"},"Videos"))),l.a.createElement(k.a,{to:"/docs",style:{textDecoration:"none"}},l.a.createElement("div",{className:"sidebar-item",key:"4"},l.a.createElement("p",{className:"sidebar-item-text"},"Docs"),l.a.createElement("button",{className:this.state.iconClicked?"sidebar-item-extend clicked":"sidebar-item-extend",onClick:this.sidebarExpandClicked},l.a.createElement("i",{className:"fas fa-caret-up"})))),l.a.createElement(k.a,{to:"/docs/work",style:{textDecoration:"none"}},l.a.createElement("div",{className:"sidebar-item inner-item",key:"5"},l.a.createElement("div",{className:"vert-line"}),l.a.createElement("p",{className:"sidebar-item-inner-text"},"Work"))))))}}]),t}(n.Component)),X=(a(38),a(39),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"main-content"},l.a.createElement(W,null),l.a.createElement(J,null))))}}]),t}(n.Component)),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null))}}]),t}(n.Component);r.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7ad4e469.chunk.js.map