


window.navigation_bg = ''
window.sidebar_bg = 'white'
window.site_name_color = 'white'
window.site_name_bold = false
window.site_name_font = 'sans-serif'
window.sidebar_position ='left'
window.menu_font = 'sans-serif'
window.menu_links_color = 'black'
window.ENABLE_MENU_HOVER_INDICATOR_OVERIDE = true
window.ENABLE_MENU_HOVER_INDICATOR_COLOR = 'black'
window.menu_links_hover_color = '#ddd'
window.menu_links_text_hover_color = '#ddd'

window.ICONS = [null]
window.MENU = [null]
window.close_navigation_color_hover = 'black'
window.menu_link_bold = false
window.WEB_BAR_BG = 'white'
window.close_button_bar = 'black'
window.icon_bg="white"
window.top_bar_border = 'white'
window.sticky_header = false
window.PAGE_LAYOUTS = [null]
window.clicked_page = ''
window.website_page_name_size = 18
window.show_search = false
window.use_logo = false
window.search_icon_link = ''
window.show_logo = false
window.logo_link = ''
window.use_loader = false
window.animation = ""
window.animation_bg = "white"
class Components{
  constructor(_data_, system_icons){
    this.text = null
    this.container = document.createElement("div")
    this.container.style.width = "100%"
    this.container.style.height = "auto"
    this.menu = _data_
    this.SYSTEM_ICONS = [
      'home_icon.jpg',
     'clipper.png',
     'headphone.png'
    ]

    this.USER_DEFINED_ICONS = system_icons
    this.RESPONSE = []
    this.WEBSITE_PAGES = []
    this.slide = 0;
     this.dragger = document.createElement("div")
     this.clientX = 0;
     this.handler_value = null
     this.SERVE_DATA = [null]
     this.OPENED_CONTENT = {}
     this.extra = null
this.footer_value = null
  }
  
Menu(){
  return this.menu
}


CONNECT_DATABASE(server){
fetch(server, {method:'GET', headers:{
  'Content-Type': 'application/json',

}}).then((e)=> e.json()).then((txt)=> alert(txt)).catch((err)=> alert(err))



}

Emit(component){
  this.extra = component
}

HANDLER_PAGE(STRUCT){
  
  const DATA = STRUCT
  
  
  for(var posts in this.SERVE_DATA){
    if(DATA.id == posts && DATA.type == "async"){
      this.OPENED_CONTENT = {
        id: this.SERVE_DATA[posts].post_id,
        title:this.SERVE_DATA[posts].title,
        thumbnail: this.SERVE_DATA[posts]. thumbnail,
        thriller: this.SERVE_DATA[posts].thriller,
        publisher: this.SERVE_DATA[posts].publisher,
        time: this.SERVE_DATA[posts].time,
        genre: this.SERVE_DATA[posts].genre,
        size: this.SERVE_DATA[posts].size,
        release_date: this.SERVE_DATA[posts].release_date,
        description: this.SERVE_DATA[posts].description
      }
    }
  }
  for(var open_page = 0; open_page<=this.WEBSITE_PAGES.length-1; open_page++){
     
         this.container.appendChild(this.WEBSITE_PAGES[open_page].page)

      this.container.removeChild(this.WEBSITE_PAGES[open_page].page)

     
  }
  
  const HANDLER_CONTENT = document.createElement("div")
  
  HANDLER_CONTENT.id = "handler"
  let MOVIE_DESCRIPTION = document.createElement("textarea")
  MOVIE_DESCRIPTION.value = this.OPENED_CONTENT.description
  
  const DETAILS = document.createElement("div")
  HANDLER_CONTENT.style.width = "100%"
  HANDLER_CONTENT.style.height = "550px"
  HANDLER_CONTENT.style.marginTop = "10px"
  DETAILS.style.width = "100%"
  DETAILS.style.height = "40px"
  DETAILS.style.textAlign = "center"
  
  HANDLER_CONTENT.style.backgroundColor = "white"
  HANDLER_CONTENT.style.whiteSpace = "nowrap"
  HANDLER_CONTENT.style.overflowY = "auto"
  HANDLER_CONTENT.style.overflowX = "hidden"
  
  
  const THUMBNAIL = document.createElement("img")
  const POST_TITLE = this.Heading(4,this.OPENED_CONTENT.title)
  const VIDEO = this.Iframe(this.OPENED_CONTENT.thriller)
  
  VIDEO.width = "320px"
  VIDEO.height = "200px"
  VIDEO.style.transform = "translateX(20px)"
  VIDEO.style.backgroundColor = "black"
  VIDEO.style.border = "1px solid transparent"
  VIDEO.style.margin = "center"
  POST_TITLE.style.fontSize = "20px"
  POST_TITLE.style.textAlign = "center"
  POST_TITLE.style.fontFamily = "Radio Canada"
  
  THUMBNAIL.id = "system-post-thumbnail"
  THUMBNAIL.style.width = "300px"
  THUMBNAIL.style.height = "300px"
  THUMBNAIL.style.border = "0px solid #ddd"
  THUMBNAIL.style.transform = "translateX(27px)"
  THUMBNAIL.src = this.OPENED_CONTENT.thumbnail
  
  let POSTER_DETAILS = [{name:this.OPENED_CONTENT.publisher,time:"   on "+ this.OPENED_CONTENT.time}]
  
  let MOVIE_DETAILS = this.WEB_CARD()
  MOVIE_DETAILS.style.height = "auto"
  MOVIE_DETAILS.style.width = "100%"
  MOVIE_DETAILS.style.paddingTop = "10px"
  MOVIE_DETAILS.style.paddingLeft = "10px"
  MOVIE_DETAILS.style.borderLeft = "3px solid black"
  
  MOVIE_DETAILS.style.marginLeft = "10px"
  MOVIE_DETAILS.style.marginTop = "10px"
  
  
  MOVIE_DESCRIPTION.style.fontSize = "17px"
  MOVIE_DESCRIPTION.style.width = "310px"
  MOVIE_DESCRIPTION.style.height = "260px"
  MOVIE_DESCRIPTION.style.backgroundColor = "white"
  MOVIE_DESCRIPTION.style.border = "1px solid white"
  
  MOVIE_DESCRIPTION.disabled = true

  MOVIE_DESCRIPTION.style.fontFamily = "Radio Canada"
  
  MOVIE_DESCRIPTION.style.margin = "3px"
 const one = this.WEB_CARD()
 one.style.width = "auto"
 const one_text = this.Heading(5,"Genre: ")
 one_text.style.display="inline-block"
 const two_text = this.Heading(5, this.OPENED_CONTENT.genre)
 two_text.style.display="inline-block"
 one_text.style.fontSize = "20px"
 two_text.style.fontSize = "14px"
 one_text.style.fontFamily = "Rubik"
 two_text.style.fontFamily = "Radio Canada"
 
 one.appendChild(one_text)
 one.appendChild(two_text)
one_text.style.display = "inline-block"
  
  //aecond

 const two = this.WEB_CARD()
 one.style.width = "auto"
 const one_text1 = this.Heading(5,"Genre: ")
 one_text1.style.display="inline-block"
 const two_text1 = this.Heading(5, this.OPENED_CONTENT.genre)
 two_text1.style.display="inline-block"
 one_text1.style.fontSize = "20px"
 two_text1.style.fontSize = "14px"
 one_text1.style.fontFamily = "Rubik"
 two_text1.style.fontFamily = "Radio Canada"
 
 two.appendChild(one_text1)
 two.appendChild(two_text1)
one_text.style.display = "inline-block"
  
  
  one_text.id = "h5"
  two_text.id = "h5"
  
  //this.ADD_TO_CARD(MOVIE_DETAILS,one)
//  this.ADD_TO_CARD(MOVIE_DETAILS,two)
 this.ADD_TO_CARD(MOVIE_DETAILS,MOVIE_DESCRIPTION)
  for(var x in POSTER_DETAILS){
    const NAME = this.Heading(6,"Posted by ")
    const DATE = this.Heading(4,POSTER_DETAILS[x].name)
    NAME.style.display = "inline-block"
    DATE.style.display = "inline-block"
    DATE.style.margin = "5px"
    NAME.style.margin = "5px"
  
    NAME.style.fontFamily = "Montserrat"
    DATE.style.fontFamily = "Rubik"
    DATE.style.fontWeight = "bold"
    DATE.style.color = "black"
    DATE.style.textAlign = "left"
   
    //this.ADD_TO_CARD(DETAILS, DATE)
  }
  
  const DOWNLOAD_BUTTON = document.createElement("div")
  DOWNLOAD_BUTTON.style.width = "150px"
  DOWNLOAD_BUTTON.style.height = "18px"
  DOWNLOAD_BUTTON.style.padding = "15px"
  DOWNLOAD_BUTTON.style.fontFamily = "Rubik"
 
  DOWNLOAD_BUTTON.style.backgroundColor = "black"
  DOWNLOAD_BUTTON.style.margin = "auto"
 DOWNLOAD_BUTTON.style.borderRadius = "20px"
 DOWNLOAD_BUTTON.style.color = "white"
 DOWNLOAD_BUTTON.style.textAlign = "center"
  DOWNLOAD_BUTTON.innerText = "Download Movie"
  DOWNLOAD_BUTTON.onclick = function(){
    window.location = "https://google.com"
  }
  
  this.container.appendChild(HANDLER_CONTENT)
  this.container.removeChild(HANDLER_CONTENT)
  this.container.appendChild(HANDLER_CONTENT)
  this.ADD_TO_CARD(HANDLER_CONTENT, POST_TITLE)
  
  this.ADD_TO_CARD(HANDLER_CONTENT, THUMBNAIL)
  
 // this.ADD_TO_CARD(HANDLER_CONTENT, DETAILS)
 this.ADD_TO_CARD(HANDLER_CONTENT,MOVIE_DETAILS)
 
  const triller_text =this.Heading(4,"Watch Triller Below")
  this.ADD_TO_CARD(HANDLER_CONTENT,triller_text)
triller_text.style.textAlign = "center"
triller_text.style.fontFamily = "Rubik"
  this.ADD_TO_CARD(HANDLER_CONTENT, VIDEO)
  this.ADD_TO_CARD(HANDLER_CONTENT, DOWNLOAD_BUTTON)
  
  const FOOTER = this.WEB_CARD()
FOOTER.id = "footer"
FOOTER.style.marginTop = "20px"
const Copyright = this.Heading(5,"All rights reserved 2022")
let footer_links = ["Privacy","About Us","DMCA"]
for(var x in footer_links){
  const LINKS = this.Heading(5,footer_links[x])
  LINKS.id = "links"
  this.ADD_TO_CARD(FOOTER, LINKS);
}
const FOOTER_BIG_IMAGE = this.Image("logo_2.png");
FOOTER_BIG_IMAGE.id = "footer_big_image"
let footer_icons = ["Facebook.png","Tiktok.png"]
const FOOTER_ICONS = this.WEB_CARD()
for(var icons in footer_icons){
  
  const icon_image = this.Image(footer_icons[icons])
  icon_image.id = "icon_image"
  FOOTER_ICONS.i = "footer_icons"
  this.ADD_TO_CARD( FOOTER_ICONS, icon_image)
  this.ADD_TO_CARD( FOOTER_ICONS, icon_image)
}

//this.ADD_TO_CARD(FOOTER, FOOTER_BIG_IMAGE)
this.ADD_TO_CARD(FOOTER, FOOTER_ICONS)
this.ADD_TO_CARD(Movies_Holly, FOOTER)
this.ADD_TO_CARD(FOOTER, Copyright)
//this.ADD_TO_CARD(HANDLER_CONTENT, FOOTER)
  
  this.handler_value = HANDLER_CONTENT
   
}


INCLUDE_POSTS(POSTS){
  
  this.SERVE_DATA = POSTS
}
OPEN_PAGE(page){
  
  if(this.handler_value == null){
    this.handler_value = null
  }else{
    this.container.removeChild(this.handler_value)
    this.handler_value = null
  
  }
  for(var open_page = 0; open_page<=this.WEBSITE_PAGES.length-1; open_page++){
     if(page == this.WEBSITE_PAGES[open_page].location){
      this.container.appendChild(this.WEBSITE_PAGES[open_page].page)
     }else{
         this.container.appendChild(this.WEBSITE_PAGES[open_page].page)

      this.container.removeChild(this.WEBSITE_PAGES[open_page].page)

     }
  }
   

}

IMAGE_SLIDER_CAROUSEL(View, Num,height_wrapper){
  const OBJECT = View
  const indexes = Num

  let image_wrapper = document.createElement("div");
  let sc = document.createElement("div");
  
  sc.style.backgroundColor = "black"
  image_wrapper.style.width = "100%"
  image_wrapper.style.height = "340px"
 


  
  
  this.dragger.style.width = "100%"
  
 
  image_wrapper.style.overflowX = "auto"
  image_wrapper.style.overflowY = "hidden"
  image_wrapper.style.whiteSpace = "nowrap"
  image_wrapper.style.transition = "0.2s"
  for(var i = 0; i<= indexes; i++){
    let EACH = document.createElement("div")
    EACH.style.width = "230px"
    EACH.style.height = 300+"px"
   
    EACH.style.display = "inline-block"
    
    if(OBJECT[i] != undefined){
      

      
    let ELEM =   OBJECT[i].Component
    
    EACH.onclick = () =>{
      this.HANDLER_PAGE({type:'async',id:ELEM[1]})
    }
        EACH.appendChild(ELEM[0])
    
}
  
   
   
   /* EACH.ontouchstart = (event) =>{
      let moveX = 0
   moveX += event.touches[0].clientX - 150
   

}
EACH.ontouchmove = (event) =>{
 
let moveX = Math.floor(event.touches[0].clientX - 150)
  
  
  document.getElementById('dragger').style.marginLeft = document.getElementById("dragger").offsetLeft + moveX+"px"
  
}

EACH.ontouchend = ()=>{
   let touch = document.getElementById("dragger").offsetLeft
  if(touch >= 100){
    document.getElementById("dragger").style.marginLeft = document.getElementById("dragger").offsetLeft - 360 + "px"
    
  }else if(touch <= -1){
    document.getElementById("dragger").style.marginLeft = document.getElementById("dragger").offsetLeft + 360 + "px"
    
}
} */

    this.dragger.appendChild(EACH)
    
  }
  image_wrapper.appendChild(this.dragger)
  
  
  
  
  
  return [image_wrapper,this.dragger]
  
}


 
 Navigation(title, styles, WEBSITE_PAGES){
   
 
   
   let LOADING = document.createElement("div")
   LOADING.style.width = "100%"
   LOADING.style.height = "100%"
   LOADING.style.position = "fixed"
   LOADING.style.top = 0
   LOADING.style.backgroundColor = animation_bg
   
   LOADING.style.display = (use_loader)? "block":"none"
   let loader_animation = document.createElement("img")
   loader_animation.src = animation
  loader_animation.style.width = "100px"  
  LOADING.appendChild(loader_animation)
   this.WEBSITE_PAGES = WEBSITE_PAGES
   
  let WEBSITE_WRAPPER = document.getElementById("window")
  
  
   let WEBSITE_HEADER = document.createElement("div")
   let WEBSITE_HEAD = document.createElement("div")
   WEBSITE_HEAD.style.backgroundColor =navigation_bg
   WEBSITE_HEAD.style.top = 0
   WEBSITE_HEAD.style.boxShadow ='rgba(0,0,0,0.07) 0px 3px 3px';
   WEBSITE_HEADER.style.height = '60px'
   WEBSITE_HEADER.style.boxShadow ='rgba(0,0,0,0.07) 0px 3px 3px';
   WEBSITE_HEADER.style.top = 0
   WEBSITE_HEADER.style.backgroundColor = (styles == 'custom')? navigation_bg :'white'

   let WEBSITE_MODAL = document.createElement("div")
   let WEBSITE_BAR = document.createElement("div")
   let PAGE = document.createElement('div')
    WEBSITE_BAR.style.backgroundColor = (styles == 'custom')? WEB_BAR_BG:'white'
    WEBSITE_BAR.style.width = '269px'
    WEBSITE_BAR.style.height = '100%'
    WEBSITE_BAR.style.position = 'absolute'
    WEBSITE_BAR.style.top = 0
    WEBSITE_BAR.style.right = 0
    
    WEBSITE_BAR.style.borderRightColor = "#ddd"
    WEBSITE_BAR.style.borderRightWidth = "1px"
    WEBSITE_BAR.style.zIndex = -1
    WEBSITE_BAR.style.transition = '0.3s'
    WEBSITE_BAR.style.paddingTop = '50px'
    {  (styles == 'custom' && sidebar_position == 'right')?     WEBSITE_BAR.style.right = 0  :    WEBSITE_BAR.style.left = 0  }
   WEBSITE_MODAL.style.width = "100%"
   WEBSITE_MODAL.style.height = "100%"
   WEBSITE_MODAL.style.transition = '8s'
   WEBSITE_MODAL.style.position = "fixed"
   WEBSITE_MODAL.style.top = 0
   WEBSITE_MODAL.style.display = "none"
   
   WEBSITE_MODAL.style.transition = '0.2s'

   WEBSITE_BAR.style.transform = 'translateX(-320px)'
let WEBSITE_SEARCH_BAR = document.createElement("div")
WEBSITE_SEARCH_BAR.style.padding = "20px"
WEBSITE_SEARCH_BAR.style.transition = "0.3s"
let close_search_bar = document.createElement("button")
let search_form = document.createElement("input")
close_search_bar.style.position = "absolute"
close_search_bar.style.marginTop = "-10px"
search_form.style.width = "300px"
search_form.style.height = "30px"
search_form.style.borderRadius = "5px"
search_form.style.border = "1px solid white"
search_form.placeholder = "Search "+title
search_form.style.outline = "none"
search_form.style.backgroundColor = "white"
close_search_bar.innerHTML = "&#x279C;"
close_search_bar.style.backgroundColor = "transparent"

search_form.style.fontFamily = "Radio Canada"
search_form.style.textAlign = "center"
close_search_bar.style.border = "1px solid transparent"
close_search_bar.style.padding = "10px"
close_search_bar.style.color = "black"
close_search_bar.style.fontSize = "25px"
close_search_bar.onclick=()=>{
  
  setTimeout(function() {
      for(var t = 0; t<=WEBSITE_PAGES.length-1; t++){
     WEBSITE_PAGES[t].page.style.display = "block"
   }
    }, 100);
WEBSITE_SEARCH_BAR.style.background = "rgba(0,0,0,0)"
  setTimeout(function() {
    WEBSITE_SEARCH_BAR.style.display = "none"
  }, 100);
  
  
  
}
close_search_bar.style.transform = "rotate(180deg)"
WEBSITE_SEARCH_BAR.appendChild(close_search_bar)
WEBSITE_SEARCH_BAR.appendChild(search_form)

 WEBSITE_SEARCH_BAR.style.width = "100%"
 WEBSITE_SEARCH_BAR.style.height = "100%"
 
 WEBSITE_SEARCH_BAR.style.position = "fixed"
 WEBSITE_SEARCH_BAR.style.top = "0px"
 WEBSITE_SEARCH_BAR.style.display = "none"
 
   PAGE.style.perspective = 300
   PAGE.style.position = 'fixed'
   PAGE.style.top = 0
   PAGE.style.width = '100%'
   PAGE.style.height = '100%'
   PAGE.style.display = 'none'
   PAGE.style.transition = '3s'
   let pager = document.createElement('div')
   pager.style.width = '100%'
   pager.style.height = '100%'
   pager.style.backgroundColor = 'white'
   pager.style.transition = '0.4s'
   pager.style.display = 'none'
   pager.id = 'pager'

   let page_name = document.createElement('h3')
   page_name.style.textAlign = 'center'
   page_name.style.color = (styles == 'custom')? site_name_color: "gray"
   pager.style.transform = 'translate(-700deg)'
   let close_pager = document.createElement('button')
   close_pager.innerHTML = '&#x279C;'
   close_pager.style.fontSize = 30
   close_pager.style.border = '1px solid white'
   close_pager.style.backgroundColor = 'transparent'
   
   close_pager.style.color = (styles == 'custom')? sidebar_bg: "gray"
   close_pager.style.fontSize = '30px'
   close_pager.style.border = '1px solid transparent'
   close_pager.style.transform = 'translateY(-50px) rotate(-180deg)'
close_pager.onclick = () =>{


  pager.style.transform =  'translateY(-700deg)'
  PAGE.style.background = 'rgba(0,0,0,0)'

setTimeout(() => {
  PAGE.style.display = 'none'

}, 0);
}

 let pager_header = document.createElement('div')
 pager_header.style.width  = '100%'
 pager_header.style.height  = '57px'
 pager_header.style.backgroundColor  =   WEBSITE_HEADER.style.backgroundColor = (styles == 'custom')? navigation_bg :'white'
 pager_header.style.position = 'fixed'
 pager_header.style.top = 0
 pager_header.style.height = '60px'
 pager_header.style.boxShadow = '1px 2px 1px 2px rgba(0,0,0,0.19)'
 pager_header.appendChild(page_name)
 pager_header.appendChild(close_pager)

 pager.appendChild(pager_header)




   
   PAGE.appendChild(pager)
  
    let BUTTON = document.createElement("button")
    let stick = document.createElement("div")
    let search_icon = document.createElement("img")


    BUTTON.innerHTML = "&times;"
    BUTTON.style.width = '37px'
    BUTTON.style.height= '50px'
    BUTTON.style.backgroundColor = (styles == 'custom')? WEB_BAR_BG:'transparent'
    BUTTON.style.color = close_button_bar
  
    BUTTON.style.border = "none"
    BUTTON.style.fontSize = '29px'
    BUTTON.style.fontWeight = 'bold'
    BUTTON.style.marginTop = -1
    BUTTON.style.top = 0
    BUTTON.style.display = 'none'
    BUTTON.style.borderTopRightRadius = '100px'
    BUTTON.style.borderBottomRightRadius = '100px'
    BUTTON.style.paddingRight = '20px'
 BUTTON.style.textAlign = 'left'
    BUTTON.style.position = 'absolute'
    BUTTON.style.transition = '0.4s'
    BUTTON.style.transform = 'translateX(39px) translateY(6px)'
    BUTTON.style.border = "0px solid #ddd"

    {  (styles == 'custom' && sidebar_position == 'right')?      BUTTON.style.marginLeft = "-20px":     BUTTON.style.marginLeft = "230px"

  }

  



    BUTTON.onfocus = () => {
      BUTTON.style.color = menu_links_hover_color
    }


    BUTTON.onmouseover = () => {
      BUTTON.style.color = close_navigation_color_hover
    }

    BUTTON.onmouseout = () => {
      BUTTON.style.color = close_button_bar

    }
    if(this.Menu().length >= 1){
      WEBSITE_BAR.innerHTML = ""
    let menu_list = document.createElement("ul")
    for(var i = 0; i<= this.Menu().length-1; i++){
    
      let box = document.createElement("div")
      box.style.marginTop = "-47px"
      
      let line = document.createElement("div")

      let a = document.createElement("button")
      let icons = document.createElement('img')
      let icon_bed = document.createElement('div')
      icon_bed.appendChild(icons)
      icon_bed.style.width ='18px'
      icon_bed.style.height ='18px'
      icon_bed.style.padding ='8px'

      icon_bed.style.borderRadius = '100px'

      icon_bed.style.backgroundColor = (styles == 'custom')? icon_bg:'white'

    a.innerText = "         "+this.Menu()[i]
    a.style.display = 'block'
a.style.width = '100%'
a.style.height = '57px'
a.style.border= "1px solid white"
a.style.backgroundColor = 'transparent'
a.style.border = '1px solid transparent'
a.style.color = (styles == 'custom')? menu_links_color:'black'
a.style.fontSize = '19px'
a.style.fontFamily =  (styles == 'custom')? menu_font : 'sans-serif'
a.style.transition = '0.4s'
a.style.borderBottomColor = "#ddd"
a.style.borderBottomWidth = 0
a.class = "links"
a.style.textAlign = "center"
a.style.fontWeight = (menu_link_bold)?  'bold':'normal'
    if(i >= 1){
 box.style.marginTop = '-40px'
    }

if(this.USER_DEFINED_ICONS[i] != undefined){
  icons.src = this.USER_DEFINED_ICONS[i]
  icons.style.width = '17px'
  icons.style.height = '17px'
  icon_bed.style.width = '17px'
  icon_bed.style.height = '17px'
  icon_bed.style.transform = 'translateX(20px) translateY(-42px)'
line.style.width ='0px'
line.style.height = '0px'
line.style.backgroundColor = (styles == 'custom')? ENABLE_MENU_HOVER_INDICATOR_COLOR: 'black'
line.style.transition = '0.4s'
line.style.transform = 'translateX(55px) translateY(-45px)'
line.style.display = (ENABLE_MENU_HOVER_INDICATOR_OVERIDE == true)? 'block': 'none'
}else{

  
  
}









a.onmouseover = () => {
  a.style.backgroundColor = menu_links_hover_color
  a.style.color = menu_links_text_hover_color

  
}

a.onmouseout = () => {
  a.style.backgroundColor = 'transparent'
  a.style.color = menu_links_color


  line.style.width = '0px'

}

    a.onclick = () =>{
      WEBSITE_BAR.style.transition = "0.05s"
    setTimeout(function() {
      for(var t = 0; t<=WEBSITE_PAGES.length-1; t++){
     WEBSITE_PAGES[t].page.style.display = "block"
   }
    }, 200);
      page_name.innerText = ''
      page_name.innerText = a.innerText
      clicked_page =  page_name.innerText
    let all_menu = document.getElementsByClassName("links")  
   

      for(var index = 0; index<=this.menu.length-1; index++){
        if(a.innerText == this.menu[index]

        ){
          this.OPEN_PAGE(this.menu[index])
        }
      }
    
      
     
         setTimeout(() => {
         WEBSITE_BAR.style.transform = 'translateX(-320px)'
    
      WEBSITE_MODAL.style.background = "rgba(0,0,0,0.4)"
      
      setTimeout(function() {
        
        WEBSITE_MODAL.style.display = "none"
        BUTTON.style.display = "block"
        stick.style.display = 'block'
        {       (show_search)?        
          search_icon.style.display = "block": null
      }
      }, 200);
          {(show_logo)? name.style.display = 'none': name.style.display = 'block' }

        
        {       (show_logo)?   logo.style.display = 'block'  :  name.style.display = "block"
      }
        

    
         }, 200);
    
     

  
    }

    

    box.appendChild(a)
    box.appendChild(icon_bed)
    box.appendChild(line)

    WEBSITE_BAR.appendChild(box)
    }}
   
   

    let logo = document.createElement('img')
    logo.style.width = '120px'
    logo.style.zIndex = 1
    logo.style.alignSelf = 'center'
    logo.src = logo_link
    logo.style.marginLeft = "120px"
    search_icon.style.width = '38px'
    logo.style.display = (show_logo)? 'block':'none'
    logo.style.transform = 'translateY(18px)'
    
    
    let logo_bar = document.createElement('img')
    logo_bar.style.width = '120px'
    logo_bar.style.zIndex = 1
    logo_bar.style.alignSelf = 'center'
    logo_bar.src = logo_link
    logo_bar.style.marginLeft = "70px"
  
    logo_bar.style.display = (show_logo)? 'block':'none'
    logo_bar.style.transform = 'translateY(18px)'
    
    
    search_icon.style.marginTop =10
    search_icon.src = search_icon_link
    search_icon.style.float = 'right'
    search_icon.style.marginTop = '14px'
    search_icon.style.transform = 'translateX(-20px)'
    search_icon.style.display = (show_search)? 'block':'none'
   
  search_icon.onclick = ()=>{
     WEBSITE_SEARCH_BAR.style.display = "block"
     setTimeout(function() {
      for(var t = 0; t<=WEBSITE_PAGES.length-1; t++){
     WEBSITE_PAGES[t].page.style.display = "none"
   }
    }, 10);
     setTimeout(function() {
       WEBSITE_SEARCH_BAR.style.background = "rgba(0,0,0,1.5)"
     }, 0);
  }
   
    let WEB_RIGHT = document.createElement('p')
    WEB_RIGHT.style.color = 'gray'
    WEB_RIGHT.style.textAlign = 'center'
    WEB_RIGHT.style.float = 'bottom'
    WEB_RIGHT.style.bottom = 0
    WEB_RIGHT.style.fontFamily = 'Arial '

    let date = new Date().getFullYear()
    WEB_RIGHT.innerText = 'Copyright '+date+", "+title
    
    //WEBSITE_BAR.appendChild(WEB_RIGHT)
    WEBSITE_BAR.appendChild(BUTTON)

    BUTTON.onclick = function(){
setTimeout(function() {
      for(var t = 0; t<=WEBSITE_PAGES.length-1; t++){
     WEBSITE_PAGES[t].page.style.display = "block"
   }
    }, 500);

          WEBSITE_BAR.style.transform = 'translateX(-320px)'

       setTimeout(() => {
       let n =  document.getElementById("handler")
       if(n == undefined){
         
       }else{
         document.getElementById("handler").style.display = "block"
       }
        name.style.display = "block"
        stick.style.display = 'block'
        {       (show_logo)?   logo.style.display = 'block'  : null    }
        {       (show_search)?           search_icon.style.display = 'block'
        : null    }

        {       (show_logo)?   name.style.display = 'none'  :  name.style.display = 'block'     }


       }, 0);


        setTimeout(() => {
          BUTTON.style.display = "none"
          WEBSITE_MODAL.style.display = 'none'

  
        }, 500);
  
   }
   BUTTON.style.display = "none"
   
 
   WEBSITE_MODAL.appendChild(WEBSITE_BAR)
   this.container.appendChild(WEBSITE_MODAL)
   let width = window.screen.width
   stick.style.width ="50px"
   stick.style.height = "100px"
   stick.style.padding = "19px"
   stick.style.display = 'block'
   stick.style.position = 'absolute'
   stick.oncopy = () =>{
     alert('copied')
   }
   {(styles == 'custom' && sidebar_position == 'right')? stick.style.right = 0 : null }
   
  
   stick.onclick = function(){
  let n = document.getElementById("handler")
  if(n == undefined){
    
  }else{
    document.getElementById("handler").style.display = "none"
  }
   for(var t = 0; t<=WEBSITE_PAGES.length-1; t++){
     WEBSITE_PAGES[t].page.style.display = "none"
   }
   
    WEBSITE_MODAL.style.display = "block"
   
     name.style.display = "none"
     BUTTON.style.display = "block"
     stick.style.display = 'none'
     logo.style.display = 'none'
     search_icon.style.display = 'none'
     setTimeout(() => {
      WEBSITE_BAR.style.transform = 'translateX(0px)'

      WEBSITE_MODAL.style.background = "rgba(0,0,0,0.8)"


     }, 0);

    

    
     
   }
   
   let name = document.createElement("p")
   name.innerText = title
   name.style.color = (styles == 'custom' )? site_name_color:"black"
   name.style.fontSize = (styles == 'custom' )? website_page_name_size: 15
   name.style.position = "absolute"
   name.style.fontFamily = (styles == 'custom')? site_name_font:"Arial Narrow"
   name.style.marginLeft = "120px"
   name.style.fontWeight = (styles == 'custom' && site_name_bold)? 'bold' : 'normal'
   name.style.transform = 'translateY(4px)'

   let BAR_NAME = document.createElement("p")
   BAR_NAME.innerText =  title 
   BAR_NAME.style.color = (styles == 'custom' )? site_name_color:"black"
   BAR_NAME.style.fontSize = "38px"
   BAR_NAME.style.position = "absolute"
   BAR_NAME.style.fontFamily = (styles == 'custom')? site_name_font:"Arial Narrow"
   BAR_NAME.style.marginLeft = "35px"
   BAR_NAME.style.fontWeight = (styles == 'custom' && site_name_bold)? 'bold' : 'normal'
   BAR_NAME.style.transform = 'translateY(9px)'
   for(var i = 0; i<=2; i++){
     let _each_ = document.createElement("div")
     _each_.style.width = "19px"
     _each_.style.height = "2.5px"
     _each_.style.borderRadius = '0px'
     _each_.style.margin = "4px"
     _each_.style.backgroundColor = (styles == 'custom')? sidebar_bg: "gray"
     stick.appendChild(_each_)
   }
   {(show_logo)? name.style.display = 'none': name.style.display = 'block' }
   WEBSITE_HEADER.appendChild(name)

let SELECT = (show_logo)? logo_bar: logo_bar
   WEBSITE_BAR.appendChild(SELECT)
   
   
   WEBSITE_HEADER.appendChild(stick)

   WEBSITE_HEADER.appendChild(search_icon)
   WEBSITE_HEADER.appendChild(logo)

    search_icon.style.width = "20px"
    search_icon.style.marginTop = "20px"
   this.container.appendChild(WEBSITE_HEADER)
   
   this.container.appendChild(WEBSITE_SEARCH_BAR)

   WEBSITE_WRAPPER.style.padding = 0
   WEBSITE_WRAPPER.style.margin = 0
   WEBSITE_WRAPPER.appendChild(this.container)
   WEBSITE_WRAPPER.appendChild(PAGE)
   WEBSITE_WRAPPER.appendChild(LOADING)

 this.footer_value = WEBSITE_WRAPPER
   this.OPEN_PAGE('Home')
 }

 WEB_CARD(){
  let card = document.createElement('div')
   card.style.zIndex = -1
  return card
 }



 ADD_TO_CARD(element, element_2){
  element.appendChild(element_2)
 }

 Text(text){
  let Text_ui = document.createElement('p')
  Text_ui.innerHTML += text

  return Text_ui
 }

 Image(uri){
   let img = document.createElement('img')
   img.src = uri
  
   return img
 }
 Video(uri){
   let video = document.createElement('video')
  video.src = uri

  return video
 }

 Audio(uri){
   let audio = document.createElement('audio')
   audio.src = uri
   return audio
 }
 Heading(index,text){
   let heading;
   switch(index){
   case 1:
       heading = document.createElement('h1')
       heading.innerHTML+=text
     break
    case 2:
       heading = document.createElement('h2')
       heading.innerHTML+=text
     break
   case 3:
       heading = document.createElement('h3')
       heading.innerHTML+=text
     break
    case 4:
      heading = document.createElement('h4')
      heading.innerHTML+=text
    break
    case 5:
      heading = document.createElement('h5')
      heading.innerHTML+=text
    break
    case 6:
      heading = document.createElement('h6')
      heading.innerHTML+=text
    break
   }


    return heading

   
 }

 Apply_Delete(element){
  element.style.display = 'none'
 }
 
 Iframe(uri){
   let iframe = document.createElement("iframe")
   iframe.src = "https://www.youtube.com/embed/"+uri
return iframe
 }
 
};




