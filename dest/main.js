// header
let nav = document.querySelector(".nav");
let btnMenu = document.querySelector(".humberger");
const abc = "ok nhận được r";

btnMenu.onclick = function () {
  console.log(1);
  nav.classList.toggle("click");
  this.classList.toggle("click");
};
let lang = document.querySelector(".lang");
let langOption = document.querySelector(".lang__option");
let langItem = document.querySelectorAll(".lang .lang__option a");
let langCurrent = document.querySelector(".lang .lang__current span");
lang.onclick = function (e) {
  e.stopPropagation();
  lang.classList.toggle("click");
};
langItem.forEach(function (item) {
  item.addEventListener("click", function () {
    let langText = this.textContent;
    let langSpan = langCurrent.textContent;
    langCurrent.innerText = langText;
    this.innerText = langSpan;
  });
});
document.addEventListener("click", function () {
  lang.classList.remove("click");
});
//change headerbg
let header = document.querySelector("header");
let slider = document.querySelector(".slider");
let sliderHeight = slider.clientHeight;
function changeHeaderBg() {
  let scrollY = window.pageYOffset;
  if (scrollY > sliderHeight - header.clientHeight) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}
//Menu section
function removeAtiveMenu() {
  menu.forEach(function (e, i) {
    e.classList.remove("active");
  });
}
let menu = document.querySelectorAll(".list li a");
let sections = [];
menu.forEach(function (item, index) {
  let href = item.getAttribute("href");
  let nameMenu = href.replace("#", "");
  let section = document.querySelector("." + nameMenu);
  sections.push(section);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let heightSection = section.offsetTop;
    window.scrollTo({
      top: heightSection - header.clientHeight + 1,
      behavior: "smooth",
    });
    removeAtiveMenu();
    item.classList.add("active");
  });
});
function addActiveMenu() {
  let scrollSection = window.pageYOffset;
  sections.forEach(function (section, index) {
    if (
      scrollSection > section.offsetTop - header.clientHeight &&
      scrollSection <= section.offsetTop + section.clientHeight
    ) {
      removeAtiveMenu();
      menu[index].classList.add("active");
    } else {
      menu[index].classList.remove("active");
    }
  });
}
console.log(sections);
//back top top
let backtoptop = document.querySelector(".totop");
let footer = document.querySelector("footer");
let footerHeight = footer.offsetTop;
function addBackToTop() {
  let scrollY = window.pageYOffset;
  if (
    scrollY > sliderHeight - header.clientHeight &&
    scrollY <= footerHeight - header.clientHeight - 50
  ) {
    backtoptop.classList.add("active");
  } else {
    backtoptop.classList.remove("active");
  }
}
//back to top
document.addEventListener("scroll", function () {
  changeHeaderBg();
  addBackToTop();
  addActiveMenu();
  scrollTop();
});
backtoptop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let backtoptop1 = document.querySelector(".backtotop");
backtoptop1.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// tags js
// let tagText=document.querySelectorAll('.news__tags .tag');
// let tagItem=document.querySelectorAll('.news__item');
// tagText.forEach(function(item,index){
//     item.addEventListener('click',function(){
//         let tagID=index;
//         tagText.forEach(function(tag){
//             tag.classList.remove('active')
//         });
//         tagItem.forEach(function(tag){
//             tag.classList.remove('active')
//         });
//         item.classList.add('active');
//         document.querySelector('.news__item-'+ tagID).classList.add('active');
//     })
// })

// slider
// let listSliderItem=document.querySelectorAll('.slider__item');
// let indexItem=0;
// listSliderItem.forEach(function(sliderItem,index){
//     if(sliderItem.classList.contains('active'))
//     {
//         indexItem=index;
//     }
// });
// let next=document.querySelector('.next');
// let pre=document.querySelector('.pre');
// let numberSlider=document.querySelector('.slider__bottom-paging .number');
// let dotLi=document.querySelectorAll('.slider__bottom-paging li');
// next.addEventListener('click',function(){
//     if(indexItem < listSliderItem.length -1) {
//         goToIndex(indexItem+1);
//     }
//     else{
//         goToIndex(0);
//     }
// })
// pre.addEventListener('click',function(){
//     if(indexItem==0) {
//         goToIndex(listSliderItem.length-1);
//     }
//     else{
//         goToIndex(indexItem-1);
//     }
// })
// function dotDelete(){
//     dotLi.classList.remove('active');
// }
// function goToIndex(index)
// {
//     listSliderItem[indexItem].classList.remove('active');
//     dotLi[indexItem].classList.remove('active');
//     listSliderItem[index].classList.add('active');
//     indexItem=index;
//     numberSlider.innerText=(index+1).toString().padStart(2,'0');
//     dotLi[index].classList.add('active');
// }
// dotLi.forEach(function(li,index){
//     li.addEventListener('click',function(){
//         goToIndex(index);
//     });
// });

//popup video
// let playVideo=document.querySelectorAll('.icon-play');
// let popupVideo=document.querySelector('.popup-video');
// let close1=document.querySelector('.close');
// let iframe= document.querySelector('iframe');
// playVideo.forEach(function(btn){
//     // popupVideo.style.opacity='1';
//     btn.addEventListener('click',function(){
//         let videoID=btn.getAttribute('data-video-id');
//         iframe.setAttribute('src','https://www.youtube.com/embed/'+ videoID+'?autoplay=1');
//         popupVideo.style.display='flex';
//     })
// });
// close1.addEventListener('click',function(){
//     console.log(1);
//     popupVideo.style.display='none';
//     iframe.setAttribute('src',null)
// })

/////////// JQUERY //////////////
// tags jquery
let tag = $(".tag");
let tagItem = $(".news__item");
let textfile = $(".textfile"),
  inputfile = $(".field__input input");
inputfile.on("change", function () {
  textfile.html(
    $(this)
      .val()
      .match(/[^\\/]*$/)[0]
  );
});
// form logo
let logo = $(".logo");
let dong = $(".close");
let navLeft = $("body");
let dk = $(".--item1");
let accordion = $(".accordion__title");
let accordionText = $(".accordion__text");

$(document).ready(function () {
  click();
  scrollTop();
});
function click() {
  logo.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    // $('.create').css('transform', 'translate(-50%, -50%)');
    navLeft.toggleClass("menu-nav");
  });
  dong.click(function (e) {
    e.stopPropagation();
    $(".create").css("transform", "translate(-300%, -50%)");
  });
  tag.click(function () {
    let tagID = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tagItem.eq(tagID).addClass("active").siblings().removeClass("active");
  });
  dk.click(function (e) {
    e.stopPropagation();
    console.log(1);
    $(".create").css("transform", "translate(-30%, -50%)");
  });
  accordion.click(function (e) {
    e.stopPropagation();
    $(this).next().stop().slideToggle(200);
    $(this).closest(".accordion").toggleClass("active");
    $(this)
      .closest(".accordion")
      .siblings(".active")
      .removeClass("active")
      .find(".accordion__text")
      .stop()
      .slideUp(200);
  });
}
document.addEventListener("click", function () {
  navLeft.removeClass("menu-nav");
  $(".create").css("transform", "translate(-300%, -50%)");
});
function scrollTop() {
  let scroll1 = $(".scroll");
  let pageHeight = $(document).height() - $(window).height();
  let scrollTop = $(window).scrollTop();
  let propress = (100 * scrollTop) / pageHeight;
  scroll1.css({
    width: propress + "%",
  });
}
let playVideo = $(".icon-play");
let popupVideo = $(".popup-video");
let close = $(".close");
let iframe = $("iframe");
console.log(playVideo);
playVideo.click(function () {
  popupVideo.css("opacity", "1");
  let videoID = $(this).attr("data-video-id");
  console.log(videoID);
  iframe.attr(
    "src",
    "https://www.youtube.com/embed/" + videoID + "?autoplay=1"
  );
  popupVideo.css("display", "flex");
});
close.click(function () {
  popupVideo.css("display", "none");
  iframe.attr("src", null);
});
// let playVideo=document.querySelectorAll('.icon-play');
// let popupVideo=document.querySelector('.popup-video');
// let close1=document.querySelector('.close');
// let iframe= document.querySelector('iframe');
// playVideo.forEach(function(btn){
//     // popupVideo.style.opacity='1';
//     btn.addEventListener('click',function(){
//         let videoID=btn.getAttribute('data-video-id');
//         iframe.setAttribute('src','https://www.youtube.com/embed/'+ videoID+'?autoplay=1');
//         popupVideo.style.display='flex';
//     })
// });
// close1.addEventListener('click',function(){
//     console.log(1);
//     popupVideo.style.display='none';
//     iframe.setAttribute('src',null)
// })

// flicity slider
let $carousel = $(".slider-wrap");
$carousel.flickity({
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  on: {
    ready: function () {
      let dot = $(".flickity-page-dots");
      let dotsilder = $(".slider__bottom-paging .dotbottom");
      dot.appendTo(dotsilder);
    },
    change: function (index) {
      let number = $(".slider__bottom-paging .number");
      let indexPage = index + 1;
      number.text(indexPage.toString().padStart(2, 0));
    },
  },
});
let nextBtn = $(".next");
let preBtn = $("pre");
nextBtn.click(function () {
  $carousel.flickity("next");
});
preBtn.click(function () {
  $carousel.flickity("previous");
});
//photto sw
// copy lai code nay đi e, 2 code bên dưới
var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

initPhotoSwipeFromDOM(".gallery__list");

window.addEventListener("resize", function () {
  $(".flickity-viewport").css(
    "height",
    document.querySelector(".slider-wrap").clientHeight
  );
});
// news
let $newsslider = $(".newsslider");
$newsslider.flickity({
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  // cellAlign:left,
});
let $parallax = $(".newsslider .item");
// let $imgs =$('.newsslider .item img');
let $imgs = $parallax.find("img");
console.log($imgs);
// get transform property
let docStyle = document.documentElement.style;
let transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
// get Flickity instance
let flkty = $newsslider.data("flickity");

$newsslider.on("scroll.flickity", function () {
  flkty.slides.forEach(function (slide, i) {
    let img = $imgs[i];
    let x = ((slide.target + flkty.x) * -1) / 5;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});
