(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),c=a.n(i),r=(a(26),a(9)),l=a(10),s=a(12),m=a(11),d=(a(27),a(5)),u=(a(28),function(e){var t;return"movie"===e.category&&(t=e.data.release_date.split("-",1)),"tv"===e.category&&(t=e.data.first_air_date.split("-",1)),o.a.createElement("div",null,o.a.createElement("div",{className:"image-container"},o.a.createElement(d.b,{to:{pathname:"/detail",state:{data:e.data,category:e.category}}},o.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w200/".concat(e.data.poster_path)}),o.a.createElement("span",{className:"rate"},o.a.createElement("span",{className:"star-icon"},"\u2605")," ",e.data.vote_average,"/10"))),o.a.createElement("div",{className:"info"},o.a.createElement("span",{className:"title"},"movie"===e.category?e.data.original_title:e.data.original_name),o.a.createElement("span",{className:"year"},t)))}),p=(a(34),function(e){return o.a.createElement("div",{className:"list-container"},e.data.map((function(t){return o.a.createElement(u,{key:t.id,data:t,category:e.category})})))}),h=(a(35),function(e){return o.a.createElement("div",{className:"section-container"},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"section-content"},o.a.createElement(p,{data:e.data,category:e.category})))}),v=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(h,{title:"Now Playing",data:e.data.now_playing_movies,category:"movie"}),o.a.createElement(h,{title:"Upcoming Movies",data:e.data.upcoming_movies,category:"movie"}),o.a.createElement(h,{title:"Popular Movies",data:e.data.popular_movies,category:"movie"}))},_=(a(36),"abb3f81c787fcd5247ca9d191581eeb7"),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={id:"",info:{},video_info:{},year:"",runtime_hr:-1,runtime_min:0,genres:[],video_key:"",title:"",countries:[]},e.openTab=function(e){for(var t=document.querySelectorAll(".detail_grid_content"),a=0;a<t.length;a++)t[a].classList.remove("show");document.getElementById(e).classList.add("show")},e.addDefaultSrc=function(e){e.target.src="https://dummyimage.com/600x400/000/ffffff.png&text=Image+Not+Found"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.category;console.log("movie data: ",this.props.location.state.data),this.setState({id:this.props.location.state.data.id},(function(){Promise.all([fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(e.state.id,"?api_key=").concat(_,"&language=en-US")).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(e.state.id,"/videos?api_key=").concat(_,"&language=en-US")).then((function(e){return e.json()}))]).then((function(a){return e.setState({info:a[0],video_info:a[1]},(function(){console.log("after fetched, movie_info: ",e.state.info),console.log("after fetched, video_info: ",e.state.video_info);var a,n="",o="",i=-1,c="",r=[];"movie"===t?(n=e.state.info.original_title,o=e.state.info.release_date.split("-",1),i=e.state.info.runtime,e.state.info.production_countries.forEach((function(e){return r.push(e.iso_3166_1)}))):(n=e.state.info.original_name,o=e.state.info.first_air_date.split("-",1),i=e.state.info.episode_run_time[0],r=e.state.info.origin_country),a=e.state.info.genres.map((function(e){return e.name})),c=e.state.video_info.results.length>0?e.state.video_info.results[0].key:"";var l=Math.floor(i/60),s=Math.floor(i%60);e.setState({year:o,runtime_hr:l,runtime_min:s,genres:a,video_key:c,title:n,countries:r})}))}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{marginTop:"50px"},className:"detail_container"},o.a.createElement("div",{className:"detail_poster_container"},o.a.createElement("div",{className:"detail_poster_inner_container"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(this.state.info.poster_path),className:"detail_poster"}))),o.a.createElement("div",{className:"detail_main_container"},o.a.createElement("div",{className:"detail_main_inner_container"},o.a.createElement("div",{className:"detail_info"},o.a.createElement("h2",null,this.state.title),o.a.createElement("div",{className:"detail_sub_info"},this.state.year," \u2022",0!==this.state.runtime_hr&&"".concat(this.state.runtime_hr,"hr")," ",0!==this.state.runtime_min&&"".concat(this.state.runtime_min,"min"),"\u2022",o.a.createElement("button",{className:"detail_button"},o.a.createElement("a",{href:"https://www.imdb.com/title/".concat(this.state.info.imdb_id),target:"_blank"},"IMDB"))),o.a.createElement("div",{className:"detail_overview"},o.a.createElement("p",null,this.state.info.overview)),o.a.createElement("div",{className:"detail_grid_container"},o.a.createElement("div",{className:"detail_tab_row"},o.a.createElement("div",{className:"detail_tab_col show",onClick:function(t){e.openTab("b1"),t.target.parentNode.lastChild.classList.remove("show"),t.target.classList.add("show")}},"Video"),o.a.createElement("div",{className:"detail_tab_col",onClick:function(t){e.openTab("b2"),t.target.parentNode.firstChild.classList.remove("show"),t.target.classList.add("show")}},"Production")),o.a.createElement("div",{className:"detail_grid_content show",id:"b1"},o.a.createElement("h2",null,"Teaser videos"),o.a.createElement("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/".concat(this.state.video_key)})),o.a.createElement("div",{className:"detail_grid_content",id:"b2"},o.a.createElement("div",{className:"detail_company_container"},o.a.createElement("h2",null,"Companies"),o.a.createElement("div",{className:"detail_companies"},this.state.info.production_companies&&this.state.info.production_companies.map((function(t){return o.a.createElement("div",{className:"detail_company",key:t.id},o.a.createElement("div",{className:"detail_logo_container"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(t.logo_path),onError:e.addDefaultSrc,className:"detail_logo"})),o.a.createElement("p",{className:"detail_company_name"},t.name))})))),o.a.createElement("div",{className:"detail_country_container"},o.a.createElement("h2",null,"Countries"),o.a.createElement("div",{className:"detail_country_img_container"},this.state.countries.map((function(e){return o.a.createElement("img",{src:"https://www.countryflags.io/".concat(e,"/shiny/64.png"),alt:e})}))))))))))}}]),a}(o.a.Component),g=function(e){return console.log("Airing TV in TV page component: ",e.data.air_tv),o.a.createElement(n.Fragment,null,o.a.createElement(h,{title:"Top Rated Shows",data:e.data.top_rated_tv,category:"tv"}),o.a.createElement(h,{title:"Poplular Shows",data:e.data.popular_tv,category:"tv"}),o.a.createElement(h,{title:"Airing Today",data:e.data.air_tv,category:"tv"}))},E=(a(37),function(e){var t=document.querySelector(".activated");null!==t&&t.classList.remove("activated"),e.target.classList.add("activated")}),y=function(){return o.a.createElement("header",{className:"nav-list-container",onClick:E},o.a.createElement("ul",{className:"nav-ul"},o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/",className:"nav-activated"},"Movies")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/tv"},"TV")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/search"},"Search"))))},b=a(6),N="abb3f81c787fcd5247ca9d191581eeb7",w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).showMoviePage=function(){return o.a.createElement(v,{data:e.state})},e.showTvPage=function(){return o.a.createElement(g,{data:e.state})},e.state={now_playing_movies:[],upcoming_movies:[],popular_movies:[],top_rated_tv:[],popular_tv:[],air_tv:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(N)).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(N)).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(N)).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(N,"&language=en-US&page=1")).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(N,"&language=en-US&page=1")).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(N,"&language=en-US&page=1")).then((function(e){return e.json()}))]).then((function(t){e.setState({now_playing_movies:t[0].results,upcoming_movies:t[1].results,popular_movies:t[2].results,top_rated_tv:t[3].results,popular_tv:t[4].results,air_tv:t[5].results})}))}},{key:"showSearchPage",value:function(){return o.a.createElement("h1",{className:"temp-text"},"Search Page coming soon...")}},{key:"showNotFound",value:function(){return console.log("not found called"),o.a.createElement("h1",{className:"temp-text"},"404 Page")}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(y,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/netflix_clone/",component:this.showMoviePage,exact:!0}),o.a.createElement(b.a,{path:"/netflix_clone/tv",component:this.showTvPage}),o.a.createElement(b.a,{path:"/netflix_clone/search",component:this.showSearchPage}),o.a.createElement(b.a,{path:"/detail",component:f}),o.a.createElement(b.a,{component:this.showNotFound}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5af3c767.chunk.js.map