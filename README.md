# WebJS-Library

WebJS is a JavaScript library for developing
Extremely fast webpages, writing lesser HTML code
The primary aim of WebJS is to enable web developers with little knowledge of JavaScript to be able to develop webpages with heavy functions by importing and using it.

# Benefits Of Web.js
<ul>
<ol> (1) No need to create multiple html files, have one html file with more than 100 html pages framed by the library working effectively.</ol>
<ol> (2)  library automatically generates pages based on the number of your site menus, and serves the html pages with the WEB_CARD components, as you will see below.</ol>
<ol> (3)  makes your site fast and light weight, less html files more html pages in one file.</ol>
<ol> (4) improved website speed and efficiency.</ol>
<ol> (5)  good for large websites only, you can only see the power of this library when building large websites.</ol>
<ol> (6) lightweight, html components are created only when the website is in view , making the source file small and quick to execute.</ol>
<ol>  (7) supports ABSTRACTION of PHP MYSQL DATABASE connection.</ol>

</ul>

<i style="color:red"> THIA LIBRARY IS STILL IN DEVELOPMENT BUT CAN BE USED TO BUILD WEBSITES</I>

WebJS has a web based GUI for building web pages, without writing any HTML code
<h3>Installation and Usage</h3>
<p>


<style>
<P>
#home_page{

 Width:100%;
  height:600px;
  background-color:#000;
}</p>

<p>
#second_page{

 Width:100%;
  height:600px;
  background-color:red;
}
</P>
</style>
<script src="Web.js">
<p>
let init = new Components(); //GUI base window
//Make sure to give the html body tag an id of "window".
</p><p>MENU = ["Home"]</p><p>
ICONS = [null]</p>  //if you have icons put them in a folder directory and link them e.g <b> ICONS = ["img/home_icon.png",...]</b>

site_name_color = "#000"
side_bar_bg = "#000"
<h4> How To Create Pages </h4>
<P>
let home_page = init.WEB_CARD(); //creates a new html card element only when this page this visible and destroy when not in view.
</P><p>let second_page = init.WEB_CARD();
</P><p>second_page.id = "second_page"
</P><p>home_page.id = "home_page" //specify id for styling CSS
</P>
<P>
let PAGES = [{
page: home_page,
location:MENU[0]
},</P><p>{
location:MENU[1],
page:second_page
]] </P> //You can add more pages

<P>
init.Navigation("title","custom",PAGES);
</P>
</script>

</p>

<p> I have built few websites with this library, however you can implement this with php for backend</p>
