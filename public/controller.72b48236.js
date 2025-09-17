function e(e,i,t,a){Object.defineProperty(e,i,{get:t,set:a,enumerable:!0,configurable:!0})}var i=globalThis.parcelRequire8ea6,t=i.register;t("aDlaE",function(t,a){e(t.exports,"NewsController",()=>s);var n=i("aMyGe"),o=i("8EzGk");class s{constructor(){console.log("news controller working"),this.model=new(0,o.NewsModel),this.view=new(0,n.NewsView),this.view.creating_and_render_news_articles(this.model.getMockNewsData())}}}),t("aMyGe",function(i,t){e(i.exports,"NewsView",()=>a);class a{constructor(){this.news_main_section1_nav1_ul_li_hover(),this.articles=[]}creating_and_render_news_articles=e=>{e.forEach(e=>{let i=document.createElement("article"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),s=document.createElement("span"),u=document.createElement("span"),l=document.createElement("h3"),r=document.createElement("h4"),d=document.createElement("h5"),c=document.createElement("img"),m=document.createElement("p");document.getElementById("news-main-section1-section1").appendChild(i),i.append(t,a),t.append(s,u),s.appendChild(r),u.appendChild(l),a.append(n,o),n.append(c,d),o.appendChild(m),i.classList.add("news-main-section1-section1-article"),t.classList.add("news-main-section1-section1-article-div1"),s.classList.add("news-main-section1-section1-article-div1-span"),s.id="news-main-section1-section1-article-div1-span1",r.classList.add("news-main-section1-section1-article-div1-span1-h4"),u.classList.add("news-main-section1-section1-article-div1-span"),u.id="news-main-section1-section1-article-div1-span2",l.classList.add("news-main-section1-section1-article-div1-span1-h3"),a.classList.add("news-main-section1-section1-article-div2"),n.classList.add("news-main-section1-section1-article-div2-div1"),c.classList.add("news-main-section1-section1-article-div2-div1-img"),d.classList.add("news-main-section1-section1-article-div2-div1-h5"),o.classList.add("news-main-section1-section1-article-div2-div2"),m.classList.add("news-main-section1-section1-article-div2-div2-p"),r.textContent=`Date Published: ${e.event_date_published}`,l.textContent=e.event_news_headline,d.textContent=`Category: ${e.event_category}`,r.textContent=`Date Published: ${e.event_date_published}`,m.textContent=e.event_text,c.src="#",this.articles=[...this.articles,i]}),console.log(this.articles)};news_main_section1_nav1_ul_li_hover=()=>{Array.from(document.getElementsByClassName("news-main-section1-nav1-ul-li")).forEach(e=>{e.addEventListener("mouseenter",()=>{if("news-main-section1-nav1-ul-li1"===e.id){let i=document.getElementById("news-main-section1-nav1-ul-li-ul1");i.style.display="block",e.addEventListener("mouseleave",()=>{i.style.display="none"});let t=Array.from(document.getElementsByClassName("news-main-section1-nav1-ul-li-ul-li1"));i.addEventListener("mouseleave",()=>{i.style.display="none"}),t.forEach(e=>{e.addEventListener("click",()=>{console.log("click"),i.style.display="none"})})}else if("news-main-section1-nav1-ul-li2"===e.id){let i=document.getElementById("news-main-section1-nav1-ul-li-ul2");i.style.display="block",e.addEventListener("mouseleave",()=>{i.style.display="none"});let t=Array.from(document.getElementsByClassName("news-main-section1-nav1-ul-li-ul-li2"));i.addEventListener("mouseleave",()=>{i.style.display="none"}),t.forEach(e=>{e.addEventListener("click",()=>{console.log("click"),i.style.display="none"})})}})})}}}),t("8EzGk",function(i,t){e(i.exports,"NewsModel",()=>a);class a{constructor(){this.mockNewsData=[{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,0,0)),event_image:!1,event_news_headline:"news headline 1",event_category:"updates",event_text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,4,12)),event_image:!1,event_news_headline:"news headline 2",event_category:"services",event_text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2025,0,0)),event_image:!1,event_news_headline:"news headline 3",event_category:"updates",event_text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2025,1,1)),event_image:!1,event_news_headline:"news headline 4",event_category:"services",event_text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,2,2)),event_image:!1,event_news_headline:"news headline 5",event_category:"services",event_text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`}]}getMockNewsData=()=>this.mockNewsData;formatDateToDDMMYYYY(e=new Date){return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).format(e).replace(/\//g,"-")}}});
//# sourceMappingURL=controller.72b48236.js.map
