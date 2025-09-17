function e(e,i,t,n){Object.defineProperty(e,i,{get:t,set:n,enumerable:!0,configurable:!0})}var i=globalThis.parcelRequire8ea6,t=i.register;t("fJlDI",function(t,n){e(t.exports,"EventsController",()=>s);var a=i("eNqOo"),o=i("ewoyE");class s{constructor(){this.view=new(0,a.EventsView),this.model=new(0,o.EventsModel),this.view.creating_and_render_event_articles(this.model.getMockEventsData())}}}),t("eNqOo",function(i,t){e(i.exports,"EventsView",()=>n);class n{constructor(){this.events_main_section1_nav1_ul1_li_hover(),this.articles=[]}creating_and_render_event_articles=e=>{e.forEach(e=>{let i=document.createElement("article"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("span"),u=document.createElement("span"),l=document.createElement("span"),r=document.createElement("span"),d=document.createElement("h3"),c=document.createElement("h4"),m=document.createElement("p"),p=document.createElement("p"),v=document.createElement("div");document.getElementById("events-main-section1-section1").appendChild(i),i.append(t,n),t.append(s,u),n.append(a,o),a.append(c,v,m),v.append(l,d),o.append(r,p),i.classList.add("events-main-section1-section1-article"),t.classList.add("events-main-section1-section1-article-div1"),s.classList.add("events-main-section1-section1-article-span"),s.id="events-main-section1-section1-article-span1",u.classList.add("events-main-section1-section1-article-span"),u.id="events-main-section1-section1-article-span2",n.classList.add("events-main-section1-section1-article-div2"),a.classList.add("events-main-section1-section1-article-div2-div1"),c.classList.add("events-main-section1-section1-article-div2-div1-h4"),v.id="events-main-section1-section1-article-div2-div1-div1",l.classList.add("events-main-section1-section1-article-div2-div1-div1-span"),d.classList.add("events-main-section1-section1-article-div2-div1-div1-h3"),m.classList.add("events-main-section1-section1-article-div2-div1--p"),o.classList.add("events-main-section1-section1-article-div2-div2"),r.classList.add("events-main-section1-section1-article-div2-div2-span"),p.classList.add("events-main-section1-section1-article-div2-div2-p"),s.textContent=`Event Date: ${e.event_date_published}`,u.textContent=e.event_news_headline,c.textContent=`Event Time: ${e.event_time}`,l.textContent="Event Address:",d.textContent=e.event_address,m.textContent=`Event Type: ${e.event_category}`,p.textContent=e.event_description,r.textContent="Event Description",this.articles=[...this.articles,i]}),console.log(this.articles)};events_main_section1_nav1_ul1_li_hover=()=>{Array.from(document.getElementsByClassName("events-main-section1-nav1-ul1-li")).forEach(e=>{e.addEventListener("mouseenter",()=>{if("events_main_section1_nav1_ul1_li2"===e.id){let i=document.getElementById("events-main-section1-nav1-ul1-li-ul1");i.style.display="block",e.addEventListener("mouseleave",()=>{i.style.display="none"});let t=Array.from(document.getElementsByClassName("events-main-section1-nav1-ul1-li-ul-li"));i.addEventListener("mouseleave",()=>{i.style.display="none"}),t.forEach(e=>{e.addEventListener("click",()=>{console.log("click"),i.style.display="none"})})}else if("events_main_section1_nav1_ul1_li3"===e.id){let i=document.getElementById("events-main-section1-nav1-ul1-li-ul2");i.style.display="block",e.addEventListener("mouseleave",()=>{i.style.display="none"});let t=Array.from(document.getElementsByClassName("events-main-section1-nav1-ul1-li-ul-li"));i.addEventListener("mouseleave",()=>{i.style.display="none"}),t.forEach(e=>{e.addEventListener("click",()=>{console.log("click"),i.style.display="none"})})}})})}}}),t("ewoyE",function(i,t){e(i.exports,"EventsModel",()=>n);class n{constructor(){this.mockEventsData=[{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,0,0)),event_news_headline:"Event headline 1",event_category:"Community fun days",event_time:this.formatTimeHHMM(new Date(2024,0,0,1,30,0)),event_address:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute`,event_description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,4,12)),event_news_headline:"Event headline 2",event_category:"Fundrasing",event_time:this.formatTimeHHMM(new Date(2024,4,12,0,30,0)),event_address:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute`,event_description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2025,0,0)),event_news_headline:"Event headline 3",event_category:"Fundrasing",event_time:this.formatTimeHHMM(new Date(2025,0,0,12,59,50)),event_address:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute`,event_description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2025,1,1)),event_news_headline:"Event headline 4",event_category:"Meetings",event_time:this.formatTimeHHMM(new Date(2025,1,1,19,30,0)),event_address:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute`,event_description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  mollit anim id est laborum.`},{event_date_published:this.formatDateToDDMMYYYY(new Date(2024,2,2)),event_news_headline:"Event headline 5",event_category:"Meetings",event_time:this.formatTimeHHMM(new Date(2024,2,2,16,30,1)),event_address:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute`,event_description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  mollit anim id est laborum.`}]}getMockEventsData=()=>this.mockEventsData;formatDateToDDMMYYYY(e=new Date){return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).format(e).replace(/\//g,"-")}formatTimeHHMM(e=new Date){let i=String(e.getHours()).padStart(2,"0"),t=String(e.getMinutes()).padStart(2,"0");return`${i}:${t}`}}});
//# sourceMappingURL=controller.c15f0c11.js.map
