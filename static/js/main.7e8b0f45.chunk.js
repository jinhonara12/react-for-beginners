(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(10),i=n.n(s),a=n(6),j=n(1),o=n(5),u=n.n(o),b=n(7),d=n(4),O=n(2);var h=function(e){var t=e.coverImg,n=e.title,r=e.summary,c=e.genres,s=e.id;return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t,alt:n}),Object(O.jsx)("h2",{children:Object(O.jsx)(a.b,{to:"react-for-beginners/movie/".concat(s),children:n})}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("ul",{children:c.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})]})};var m=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(d.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,j(n.data.movies),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),Object(O.jsx)("div",{children:n?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsx)("div",{children:a.map((function(e){return Object(O.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var x=function(){var e=Object(j.g)().id,t=Object(r.useState)(!0),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)([]),a=Object(d.a)(i,2),o=a[0],h=a[1],m=function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,h(n.data.movie),s(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:o.title}),Object(O.jsx)("h2",{children:o.runtime})]})})};var l=function(){return Object(O.jsx)(a.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"react-for-beginners/",element:Object(O.jsx)(m,{})}),Object(O.jsx)(j.a,{path:"/react-for-beginners/movie/:id",element:Object(O.jsx)(x,{})})]})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7e8b0f45.chunk.js.map