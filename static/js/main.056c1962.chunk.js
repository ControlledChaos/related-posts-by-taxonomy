(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){var a={"./classes.json":[192,19],"./functions.json":[193,20],"./hooks.json":[194,21],"./methods.json":[195,22],"./version.json":[196,23]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=113,e.exports=r},188:function(e,t,n){var a={"./includes-back-compat-deprecated.json":[197,3],"./includes-class-cache.json":[198,4],"./includes-class-debug.json":[199,5],"./includes-class-defaults.json":[200,6],"./includes-class-lazy-loading.json":[201,7],"./includes-class-plugin.json":[202,8],"./includes-class-rest-api.json":[203,9],"./includes-class-widget.json":[204,10],"./includes-functions.json":[205,11],"./includes-gallery.json":[206,12],"./includes-query.json":[207,13],"./includes-settings.json":[208,14],"./includes-shortcode.json":[209,15],"./includes-template-loader.json":[210,16],"./includes-template-tags.json":[211,17],"./related-posts-by-taxonomy.json":[212,18]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=188,e.exports=r},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(75),o=n.n(s),l=n(215),i=n(216),c=n(214),u=n(14),h=n.n(u),p=n(9),m=n(10),d=n(12),f=n(11),g=n(13),v=n(48),y=n(3),E=n.n(y),_=r.a.createContext(),b=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchData=function(e){if(a.setState({status:"searching",postType:e}),E()(a.state[e]))try{n(113)("./"+e+".json").then(function(t){var n;a.setState((n={},Object(v.a)(n,e,t),Object(v.a)(n,"status","done"),n))})}catch(t){a.setState({status:"error"})}else a.setState({status:"done"})},a.state={functions:{},classes:{},hooks:{},methods:{}},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(_.Provider,{value:{postType:this.state.postType,postTypeData:this.state,fetchData:this.fetchData}},this.props.children)}}]),t}(r.a.Component);function j(e){return function(t){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(g.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(_.Consumer,null,function(n){n.postType;var a=n.postTypeData,s=n.fetchData;return r.a.createElement(e,Object.assign({},t.props,{postType:t.props.postType,postTypeData:a,fetchData:s}))})}}]),n}(a.Component)}var O=n(49),T=n(213),S=n(18),w=n(217),k=n(76),C=n.n(k),$=n(33),x=n.n($),N=n(19);function D(e){return h()(e,"/").split("/").filter(function(e){return""!==e})}function R(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(function(e,t){var n=t.split("="),a=Object(N.a)(n,2),r=a[0],s=a[1];return e[r]=s?decodeURIComponent(s.replace(/\+/g," ")):"",e},{}):{}}function L(e,t){var n=R(e);return n.hasOwnProperty(t)&&n[t].length?n[t]:""}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.length?"/"+(e=h()(e," /"))+(""===(t=h()(t," /"))?"":"/")+t:e}function P(e){if(!e.length||!function(e){return 1===["functions","hooks","classes","methods"].filter(function(t){return e===t}).length}(e))return"";var t=e.substring(0,e.length-1);return"classe"===t?"class":t}function U(e,t){var n="",a=D(e);return t<=a.length&&(n=a[t]),n}function F(e,t){return t===D(e).length}function M(e,t){return e=e.title,t=t.title,e.length!==t.length?e.length-t.length:e<t?-1:1}var H=function(e,t){return RegExp(I(t.trim()),"i").test(e)},I=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")};function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.trim().toLowerCase()).length?e.length?e.filter(function(e){return function(e,t){if(H(e,t))return!0;var n=I(e.trim().toLowerCase().replace(/[_\-\s]+/g," ")),a=I(t.trim().toLowerCase().replace(/[_\-\s]+/g," "));if(H(n,a))return!0;var r=(a=a.split(" ")).length;if(1>=r)return!1;for(var s=0,o=0;o<r;o++)-1!==n.indexOf(a[o].trim())&&s++;if(s===r)return!0;return!1}(e.title.toLowerCase(),t)}).sort(M):[]:e}var Q=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onChange=function(e,t){var a=t.newValue;n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.loadSuggestions(t)},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n.state={value:"",suggestions:[],isLoading:!1},n.lastRequestId=null,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=q(this.props.home,this.props.postType),a=this.props.postTypeData[this.props.postType],r=x()(a.content,function(e){return e.title===t.state.value});n=-1!==r?n+"/"+a.content[r].slug:n+"/?search="+this.state.value.trim().replace(/\s+/g,"+"),this.props.history.push(n)}},{key:"loadSuggestions",value:function(e){var t=this.props.postType;if(this.setState({isLoading:!0}),this.props.fetchData(t),E()(this.props.postTypeData[t]));else{var n=this.props.postTypeData[t].content;this.setState({isLoading:!1,suggestions:V(n,e)})}}},{key:"renderSuggestion",value:function(e){return r.a.createElement("div",null,e.title)}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a=this.props.postType,s={placeholder:this.props.strings[a+"_search"],value:t,onChange:this.onChange};return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(C.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:function(e){return e.title},renderSuggestion:this.renderSuggestion,inputProps:s}),r.a.createElement("input",{type:"submit",value:this.props.strings.submit,id:"submit"}))}}]),t}(a.Component),W=Object(w.a)(Q),B=n(23),G=function(e){var t=e.referenceData,n=t.parsed_name,a=t.parsed_version,s=t.app_description,o=e.page,l=e.postType,i=e.home,c="methods"===l?"classes":l,u=e.strings.page_title;n.length&&(u=n,u+=a.length?" "+a:"","home"!==o&&(u=r.a.createElement(O.a,{to:i},u)));var h="";return s.length&&(h=r.a.createElement("p",{className:"site-description"},s)),r.a.createElement("header",{className:"site-header"},r.a.createElement("h1",{className:"site-title"},u),h,-1!==B.indexOf(c)&&r.a.createElement(W,Object.assign({},e,{postType:c})),r.a.createElement("nav",null,r.a.createElement(T.a,{to:i,exact:!0,activeClassName:"active"},e.strings.home),B.map(function(t,n){var a=q(i,t);return"methods"!==t&&r.a.createElement(T.a,{to:a,key:n,activeClassName:"active"},e.strings[t])})))},J=n(2),z=function(e){var t=e.page,n=e.children,a="hfeed site devhub-wrap",s=t?a+" "+t:a;return window.scrollTo(0,0),r.a.createElement("div",{id:"page",className:s},r.a.createElement(G,Object.assign({},e,{strings:J})),r.a.createElement("div",{id:"content",className:"site-content"},r.a.createElement("div",{id:"content-area",className:"code-reference"},r.a.createElement("main",{id:"main",className:"site-main",role:"main"},n))))},A=function(e){var t=e.referenceData,n=t.parsed_name,a=t.repo_url,s=t.app_url,o=t.parsed_type,l="";n.length&&(l=J.page_title);var i=J.repo?J.repo:"GitHub",c=o.length?o:J.code_base,u="";c.length&&(u=J.home_desc.replace("%1$s",c));var h="";s&&n&&(h=r.a.createElement("li",null,r.a.createElement("a",{href:s},n)));var p="";return a&&i.length&&(p=r.a.createElement("li",null,r.a.createElement("a",{href:a},i))),r.a.createElement("div",null,l&&r.a.createElement("h2",null,l),r.a.createElement("p",null,u," ",J["home_desc-2"]),(h||p)&&r.a.createElement("ul",null,h,p))},K=j(function(e){return r.a.createElement(z,Object.assign({},e,{page:"home"}),r.a.createElement(A,e))}),X=n(77),Y=n(79),Z=n(7),ee=n.n(Z);function te(e,t,n,a){var r=n.length,s="undocumented"===e,o=P(t),l=!a||1<a?t:o;t=J[l].toLowerCase();var i=a?"%2$s":"%1$s",c=a?"%3$s":"%2$s",u=a?"%2$s":"%1$s",h=a?"":"not_",p=e.length?"filter_version_".concat(h,"found"):"".concat(h,"found"),m=J[p];return(r||s)&&(n=s?J.undocumented:n,p="filter_type_".concat(h,"found"),e.length&&!s&&(p="filter_all_".concat(h,"found"),c=a?"%4$s":"%3$s"),i=a?"%3$s":"%2$s",m=J[p].replace(u,n)),a&&(m=m.replace("%1$d",a)),m.replace(i,l).replace(c,e)}function ne(e){var t=e.terms,n=e.version,s=e.postType,o=e.filter,l=e.postCount,i="undocumented"===n;if(E()(t))return null;var c=t.map(function(e,t){return r.a.createElement("option",{key:t,value:e},"undocumented"===e?J.undocumented_version:e)}),u=te(n,s,o,l);return r.a.createElement(a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",null,J.filter_by_version,r.a.createElement("select",{value:n,onChange:function(t){e.onChangeVersion(t.target.value)}},r.a.createElement("option",{key:"none",value:""},J.none),c)),!i&&r.a.createElement("label",null,J.filter_by_type,r.a.createElement("select",{value:o,onChange:function(t){e.onChangeType(t.target.value)}},r.a.createElement("option",{value:"none"},J.none),r.a.createElement("option",{value:"introduced"},J.introduced),r.a.createElement("option",{value:"modified"},J.modified),r.a.createElement("option",{value:"deprecated"},J.deprecated)))),l?"":r.a.createElement("hr",null),r.a.createElement("p",null,u)," ",l?r.a.createElement("hr",null):"")}function ae(e){return 1===["introduced","modified","deprecated"].filter(function(t){return e===t}).length}function re(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),s=n[0],o=n[1];if(Object(a.useEffect)(function(){var e=setTimeout(function(){o(!0)},500);return function(){return clearTimeout(e)}},[s]),!s)return null;var l=e.hasOwnProperty("message")?e.message:"";return l.length?r.a.createElement("div",null,l):r.a.createElement("div",{className:"loader"},J.loading)}var se=function(e){return function(t){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(g.a)(n,t),Object(m.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.postType!==this.props.postType&&E()(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"componentDidMount",value:function(){E()(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"render",value:function(){var t=ee()(this.props,"postTypeData."+this.props.postType+".content",[]);return E()(t)?r.a.createElement(re,null):(t=t.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0}),r.a.createElement(e,Object.assign({},this.props,{content:t})))}}]),n}(r.a.Component)},oe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={type:"",version:"",terms:{},failedRequest:!1},n.handleChangeType=n.handleChangeType.bind(Object(S.a)(n)),n.handleChangeVersion=n.handleChangeVersion.bind(Object(S.a)(n)),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"setStateFromQuery",value:function(){var e=this.getStateFromQuery();this.setState(e)}},{key:"getStateFromQuery",value:function(){var e=this.props.location.search,t=L(e,"type"),n=this.isSearch();return{type:!n&&ae(t)?t:"",version:n?"":L(e,"since")}}},{key:"isSearch",value:function(){var e,t=this.props.location.search;return e="search",!!R(t).hasOwnProperty(e)}},{key:"getSearch",value:function(){return L(this.props.location.search,"search").replace(/\++/g," ").toLowerCase()}},{key:"get_versions",value:function(){var e=this;if(E()(this.state.terms))try{n.e(24).then(n.t.bind(null,218,3)).then(function(t){e.setState({terms:t})})}catch(t){this.setState({failedRequest:!0})}}},{key:"update_query_string",value:function(){var e=this.props.home+"/"+this.props.postType,t=ae(this.state.type)?this.state.type:"",n=this.props.location.search,a=this.state.version.length?"since="+this.state.version+"&":"";(a+=t.length?"type="+t+"&":"",this.isSearch())&&(a="search="+L(n,"search"));((a=a.replace(/\s+/g,"+")).length||n)&&(a="?"+h()(a," &")).length&&n!==a&&(this.props.history.push(e+a),this.props.history.replace({pathname:this.props.location.pathname,search:a,state:this.state}))}},{key:"componentDidUpdate",value:function(e,t){var n=t.version!==this.state.version,a=t.type!==this.state.type;if(n||a)this.update_query_string();else{var r=this.getStateFromQuery(),s=r.version!==this.state.version,o=r.type!==this.state.type;(s||o)&&this.setState(r)}}},{key:"componentDidMount",value:function(){this.setStateFromQuery(),this.get_versions()}},{key:"handleChangeType",value:function(e){(e=ae(e)?e:"")!==this.state.type&&this.setState({type:e})}},{key:"handleChangeVersion",value:function(e){e!==this.state.version&&this.setState({version:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.postType,a=t.home,s=t.content,o=ee()(this.state.terms,n,{}),l=(P(n),this.isSearch()),i=this.getSearch(),c=J.results_for.replace("%1$s",i),u=J[n],h=[],p="",m="";return E()(o)||E()(this.state.version)||(p=-1===o.indexOf(this.state.version)?"":this.state.version),l?(u=J.search_results,h=V(s,i),m=te("",n,"",h.length)):h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=!t.length;return a&&!n.length?e:e=e.filter(function(e){var r=-1!==e.terms.indexOf(t),s=-1!==e.terms.indexOf(e.introduced),o=-1!==e.terms.indexOf(e.deprecated),l=-1!==e.terms.indexOf("undocumented");switch(n){case"deprecated":return a?e.deprecated:e.deprecated===t;case"introduced":return a?e.introduced:e.introduced===t;case"modified":if(a){var i=e.terms.length;return!(!i||l)&&(i=s?--i:i,0<(i=o?--i:i))}var c=s&&e.introduced===t,u=o&&e.deprecated===t;return r&&!(c||u)}return!!a||r})}(s,p,this.state.type),r.a.createElement("div",null,r.a.createElement("h2",null,u),l?r.a.createElement("p",null,c):"",l&&!h.length?r.a.createElement("hr",null):"",l?r.a.createElement("p",null,m):"",l&&h.length?r.a.createElement("hr",null):"",!this.isSearch()&&!this.state.failedRequest&&!E()(o)&&r.a.createElement(ne,{onChangeType:function(t){return e.handleChangeType(t)},onChangeVersion:function(t){return e.handleChangeVersion(t)},postType:n,terms:o,version:p,filter:this.state.type,postCount:h.length}),h.map(function(t,s){var o="",l=q(a,n+"/"+t.slug);if(t.deprecated){var i=J.deprecated_in.replace("%1$s",t.deprecated);o=r.a.createElement("span",null," \u2014 ",r.a.createElement("span",{className:"deprecated-item"},i))}return r.a.createElement("article",{key:s,className:e.props.postClass},r.a.createElement("h1",null,r.a.createElement(O.a,{to:l},t.title),o),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.summary}}),r.a.createElement("div",{className:"sourcefile"},r.a.createElement("p",null,J.source_file.replace("%1$s",t.source_file))))}))}}]),t}(r.a.Component),le=Object(Y.a)(se,w.a)(oe),ie=function(e){return e.data.hasOwnProperty("signature")&&e.data.signature.length?r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.data.signature}}):null},ce=function(e){return e.element.hasOwnProperty("summary")&&e.element.summary.length?r.a.createElement("section",{className:"summary",dangerouslySetInnerHTML:{__html:e.element.summary}}):null},ue=function(e){return e.data.hasOwnProperty("html")&&e.data.html.length?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.html}}):null},he=function(e){var t=e.element,n=t.line_num,a=t.source_file,s=t.parent,o=t.namespace,l=e.referenceData.repo_release_url;if(!a.length)return null;var i=J.source_file.replace("%1$s",a),c="",u="",p=!1,m="",d="",f="";if(l.length&&(u=J.view_source_file,c=h()(l,"/")+"/"+a,n.length&&(u=J.view_source,c+="#L"+n)),s&&"methods"===e.postType){d=s;var g=e.slug.split("::");2===g.length&&(d=r.a.createElement(O.a,{to:q(e.home,"/classes/"+g[0])},s)),m=r.a.createElement("li",null,J.class,": ",d)}return o.length&&"global"!==o.toLowerCase()&&(f=r.a.createElement("li",null,J.namespace.replace("%1$s",o))),c.length&&u?(p=r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},u),r.a.createElement("ul",{className:"source-info"},m,f,r.a.createElement("li",null,i," \u2014 ",p))):r.a.createElement("ul",{className:"source-info"},m,f,r.a.createElement("li",null,i))},pe=function(e){var t=ee()(e,"data.related.uses",{}),n=ee()(e,"data.related.used_by",{});if(E()(t)&&E()(n))return null;var a="";E()(t)||(a=r.a.createElement("article",{className:"uses"},r.a.createElement("h3",null,J.uses),r.a.createElement("ul",null,t.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("span",null,t.source)," ",r.a.createElement(O.a,{to:e.home+t.url},t.text))}))));var s="";return E()(n)||(s=r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("article",{className:"used-by"},r.a.createElement("h3",null,J.used_by),r.a.createElement("ul",null,n.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("span",null,t.source)," ",r.a.createElement(O.a,{to:e.home+t.url},t.text))}))))),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"related"},r.a.createElement("h2",null,J.related),a,s))},me=function(e){var t=e.data.changelog,n=e.archiveUrl;return E()(e.data.changelog)?null:r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"changelog"},r.a.createElement("h3",null,J.changelog),r.a.createElement("table",null,r.a.createElement("caption",{className:"screen-reader-text"},J.changelog),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"changelog-version"},J.version),r.a.createElement("th",{className:"changelog-desc"},J.description))),r.a.createElement("tbody",null,t.map(function(e,t){var a=e.version;return E()(n)||(a=r.a.createElement(O.a,{to:n+"?since="+a},a)),r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.description}}))})))))},de=function(e){return e.data.hasOwnProperty("methods")?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"class-methods"},r.a.createElement("h2",null,J.methods),r.a.createElement("ul",null,e.data.methods.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(O.a,{to:q(e.home,t.url)},t.title)," \u2014 ",r.a.createElement("div",{className:"class-methods-excerpt",dangerouslySetInnerHTML:{__html:t.excerpt}}))})))):null},fe=function(e){return e.data.hasOwnProperty("notice")&&e.data.notice.length?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.notice}}):null};var ge=se(function(e){var t=e.postType,s=e.home,o=e.slug,l=e.content,i={},u=x()(l,function(e){return e.slug===o});if(-1===u)return r.a.createElement(c.a,{to:s});var h=-1!==u?l[u]:{},p=ee()(h,"json_file","");if(p.length&&(i=function(e){var t=Object(a.useState)(e),r=Object(N.a)(t,2),s=r[0],o=r[1],l=Object(a.useState)(!1),i=Object(N.a)(l,2),c=i[0],u=i[1];return Object(a.useEffect)(function(){try{n(188)("./"+e+".json").then(function(e){o(e),u(!1)})}catch(t){o(null),u(!0)}},[e]),{data:s,failedRequest:c}}(p)),E()(i.data)||E()(h))return i.failedRequest?r.a.createElement(c.a,{to:s}):r.a.createElement(re,null);var m=ee()(h,"slug",""),d=ee()(h,"line_num","");if(!m.length||!d.length)return null;var f=ee()(i.data,m+"-"+d,{});if(E()(f))return null;var g="";"classes"===t&&(g=r.a.createElement(de,{element:h,data:f,home:s}));var v=q(s,t);return"methods"===t&&(v=""),r.a.createElement("article",{className:e.postClass},r.a.createElement(fe,{element:h,data:f}),r.a.createElement(ie,{element:h,data:f}),r.a.createElement(ce,{element:h,data:f}),r.a.createElement(he,Object.assign({element:h},e)),r.a.createElement(ue,{element:h,data:f}),r.a.createElement(me,{element:h,data:f,archiveUrl:v}),g,r.a.createElement(pe,{element:h,data:f,home:s}))});var ve=j(function(e){var t=e.location.pathname,n=e.routeIndex,a=e.route.postType,s=q(e.home,e.route.path),o=e.match.isExact?1:2,l=F(t,n+o),u=U(t,o);if(l||"classes"!==a||(l=F(t,n+ ++o),a=l?"methods":a),!l)return r.a.createElement(c.a,{to:e.home});"methods"===a&&(u+="::"+U(t,o));var h=function(e){var t=P(e);return t.length?"wp-parser-"+t:""}(a),p=e.match.isExact?"archive":"single";return r.a.createElement(z,Object.assign({},e,{postType:a,page:p}),r.a.createElement(i.a,null,r.a.createElement(X.a,{path:s,exact:!0,render:function(t){return r.a.createElement(le,Object.assign({},e,{postType:a,postClass:h}))}}),r.a.createElement(X.a,{path:s+"/:slug",render:function(t){return r.a.createElement(ge,Object.assign({},e,{postType:a,postClass:h,slug:u}))}})))}),ye=[{path:"/",postType:"functions",component:K,exact:!0},{path:"/hooks",postType:"hooks",component:ve,exact:!1},{path:"/functions",postType:"functions",component:ve,exact:!1},{path:"/classes",postType:"classes",component:ve,exact:!1}],Ee=n(51),_e=(n(189),n(190),function(e){var t=Ee.app_basename,n=h()("/"+t),a={appName:t,referenceData:Ee,home:n,routeIndex:"/"===n?0:1};return r.a.createElement(l.a,null,r.a.createElement(i.a,null,ye.map(function(e){return function(e,t){var n=q(t.home,e.path);if(t.home!==n&&-1===B.indexOf(e.postType))return null;var a=e.component;return r.a.createElement(X.a,{path:n,key:n,exact:e.exact,render:function(n){return r.a.createElement(a,Object.assign({},n,t,{postType:e.postType,route:e}))}})}(e,a)}),r.a.createElement(c.a,{to:a.home})))}),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(b,null,r.a.createElement(_.Consumer,null,function(e){var t=e.fetchData;return r.a.createElement(_e,{fetchData:t})})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/related-posts-by-taxonomy",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/related-posts-by-taxonomy","/service-worker.js");be?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):je(e)})}}()},2:function(e){e.exports={page_title:"Search The Code Reference!",home_desc:"Want to know what's going on inside this %1$s.","home_desc-2":"Search the Code Reference for more information about functions, classes, methods, and hooks.",home:"Home",functions:"Functions",function:"Function",classes:"Classes",class:"Class",hooks:"Hooks",hook:"Hook",methods:"Methods",method:"Method",search_results:"Search Results",results_for:"Search Results for: %1$s",functions_search:"Search functions",classes_search:"Search classes",hooks_search:"Search hooks",methods_search:"Search methods",source:"Source",source_file:"Source: %1$s",view_source:"View source",view_source_file:"View source file",submit:"Search",repo:"GitHub Repository",docs:"Documentation",related:"Related",used_by:"Used By",uses:"Uses",changelog:"Changelog",version:"Version",version_label:"Version: %1$s",description:"Description",code_base:"code base",loading:"Loading...",retry:"Retry",timeout:"Taking a long time...",error:"Error!",namespace:"Namespace: %1$s",filter_by_version:"Since version:",filter_by_type:"Type:",none:"none",modified:"modified",introduced:"introduced",deprecated:"deprecated",deprecated_in:"deprecated in version: %1$s",undocumented:"undocumented",undocumented_version:"undocumented version",found:"%1$d %2$s found",filter_version_found:"%1$d %2$s found with version %3$s",filter_type_found:"%1$d %2$s %3$s found",filter_all_found:"%1$d %2$s %3$s found with version %4$s",not_found:"No %1$s found",filter_version_not_found:"No %1$s found with version %2$s",filter_type_not_found:"No %1$s %2$s found",filter_all_not_found:"No %1$s %2$s found with version %3$s"}},23:function(e){e.exports=["functions","hooks","classes","methods"]},51:function(e){e.exports={homepage:"https://keesiemeijer.github.io/related-posts-by-taxonomy",app_basename:"related-posts-by-taxonomy",app_description:"Plugin Code Reference",app_url:"https://wordpress.org/plugins/related-posts-by-taxonomy",app_docs_url:"",repo_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy",repo_release_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy/tree/2.6.0",repo_gh_pages:"https://github.com/keesiemeijer/related-posts-by-taxonomy.git",parsed_name:"Related Posts by Taxonomy",parsed_version:"v2.6.0",parsed_type:"plugin"}},80:function(e,t,n){e.exports=n(191)}},[[80,1,2]]]);
//# sourceMappingURL=main.056c1962.chunk.js.map