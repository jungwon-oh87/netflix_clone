(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{10:function(e,t,a){},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),l=a.n(c),i=(a(27),a(16)),r=a(17),s=a(21),m=a(20),u=(a(28),a(29),function(e){var t=e.movie.release_date.split("-",1);return o.a.createElement("div",null,o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.movie.poster_path)}),o.a.createElement("span",{className:"rate"},o.a.createElement("span",{className:"star-icon"},"\u2605")," ",e.movie.vote_average,"/10")),o.a.createElement("div",{className:"info"},o.a.createElement("span",{className:"title"},e.movie.original_title),o.a.createElement("span",{className:"year"},t)))}),v=(a(30),function(e){return o.a.createElement("div",{className:"movie-list"},e.movies.map((function(e){return o.a.createElement(u,{key:e.id,movie:e})})))}),p=(a(10),function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Upcoming Movies"),o.a.createElement("div",{className:"content"},o.a.createElement(v,{movies:e.movies})))}),h=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Now Playing"),o.a.createElement("div",{className:"content"},o.a.createElement(v,{movies:e.movies})))},f=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Popular Movies"),o.a.createElement("div",{className:"content"},o.a.createElement(v,{movies:e.movies})))},E=function(e){return o.a.createElement("div",null,o.a.createElement(p,{movies:e.data.now_playing_movies}),o.a.createElement(h,{movies:e.data.upcoming_movies}),o.a.createElement(f,{movies:e.data.popular_movies}))},d=a(7),g=(a(31),function(e){var t=document.querySelector(".activated");null!==t&&t.classList.remove("activated"),e.target.classList.add("activated")}),_=function(){return o.a.createElement("header",{className:"list-container",onClick:g},o.a.createElement("ul",{className:"ul"},o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/",className:"activated"},"Movies")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/tv"},"TV")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/netflix_clone/search"},"Search"))))},N=a(5),w="abb3f81c787fcd5247ca9d191581eeb7",y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).showMoviePage=function(){return o.a.createElement(E,{data:e.state})},e.state={now_playing_movies:[],upcoming_movies:[],popular_movies:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(w)).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(w)).then((function(e){return e.json()})),fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(w)).then((function(e){return e.json()}))]).then((function(t){e.setState({now_playing_movies:t[0].results,upcoming_movies:t[1].results,popular_movies:t[2].results},(function(){console.log("after fetched, only popular movies: ",e.state.popular_movies)}))}))}},{key:"showTvPage",value:function(){return o.a.createElement("h1",{className:"temp-text"},"TV Page coming soon...")}},{key:"showSearchPage",value:function(){return o.a.createElement("h1",{className:"temp-text"},"Search Page coming soon...")}},{key:"showNotFound",value:function(){return console.log("not found called"),o.a.createElement("h1",{className:"temp-text"},"404 Page")}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(_,null),o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/netflix_clone/",component:this.showMoviePage,exact:!0}),o.a.createElement(N.a,{path:"/netflix_clone/tv",component:this.showTvPage}),o.a.createElement(N.a,{path:"/netflix_clone/search",component:this.showSearchPage}),o.a.createElement(N.a,{component:this.showNotFound}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e946a96a.chunk.js.map