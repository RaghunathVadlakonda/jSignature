(function(window){var svgSprite='<svg><symbol id="icon-queding" viewBox="0 0 1024 1024"><path d="M980.82006 303.515688 980.82006 303.515688 442.546673 839.512219l0 0c-12.722766 12.629645-30.238698 20.457938-49.677423 20.457938-19.320021 0-36.898375-7.828292-49.616024-20.457938l0 0L39.01713 536.537859l0 0c-12.717649-12.629645-20.576641-30.117948-20.576641-49.406247 0-38.606273 31.434943-69.923536 70.193689-69.923536 19.377326 0 36.95875 7.828292 49.616024 20.487613l0 0 254.619048 253.508761L881.526613 204.643843l0 0c12.718673-12.657274 30.299073-20.456914 49.617048-20.456914 38.819121 0 70.25304 31.286564 70.25304 69.89386C1001.397724 273.39774 993.538733 290.856367 980.82006 303.515688z"  ></path></symbol><symbol id="icon-cross" viewBox="0 0 1024 1024"><path d="M768.992 839.542c-15.595 0-31.187-6.237-43.677-18.72l-530.309-530.309c-24.954-24.954-24.954-62.395 0-87.343s62.395-24.954 87.343 0l530.309 530.309c24.954 24.954 24.954 62.395 0 87.343-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path><path d="M238.682 839.542c-15.595 0-31.187-6.237-43.677-18.72-24.954-24.954-24.954-62.395 0-87.343l530.309-530.309c24.954-24.954 62.395-24.954 87.343 0s24.954 62.395 0 87.343l-530.309 530.309c-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path></symbol><symbol id="icon-yumaobi" viewBox="0 0 1024 1024"><path d="M137.6 688S480 259.2 774.4 208C428.8 345.6 32 908.8 32 908.8h387.2s-6.4-19.2-28.8-19.2H80s57.6-70.4 108.8-112c198.4-9.6 371.2-28.8 489.6-198.4 19.2-38.4-16-35.2-25.6-35.2 92.8-38.4 297.6-188.8 265.6-262.4-12.8-12.8-22.4-6.4-22.4-6.4s153.6-99.2 73.6-144-278.4 25.6-278.4 25.6 12.8-32-28.8-32c-163.2 16-288 131.2-288 131.2s0-38.4-25.6-22.4C6.4 444.8 137.6 688 137.6 688z"  ></path></symbol><symbol id="icon-saoba" viewBox="0 0 1024 1024"><path d="M821.423593 15.302615l-219.337485 387.666252-163.227895-91.815691C433.757341 306.052304 428.656469 306.052304 423.555598 306.052304c-15.302615 0-25.504359 5.100872-30.605231 15.302615l-10.201743 25.504359 494.784558 285.648817 10.201743-20.403487c10.201743-15.302615 5.100872-35.706102-10.201743-45.907846l-158.127024-91.815691 219.337485-382.56538c10.201743-20.403487 5.100872-40.806974-10.201744-51.008717L867.331438 5.100872c-5.100872-5.100872-10.201743-5.100872-15.302615-5.100872h-5.100872c-10.201743 0-20.403487 5.100872-25.504358 15.302615zM122.604166 632.508095c0 5.100872-5.100872 10.201743-5.100872 15.302615 0 15.302615 5.100872 25.504359 15.302615 35.706102l107.118306 61.210461 40.806974-76.513076 35.706102 20.403487L280.731189 765.13076l142.824409 81.613947 40.806974-76.513076 30.60523 20.403487-40.806974 76.513076 127.521793 76.513076 40.806974-71.412204 20.403487 15.302615-40.806974 71.412204 107.118307 61.210461c10.201743 5.100872 25.504359 5.100872 35.706102 0h5.100871l96.916563-331.556662-489.683686-300.951432-234.640099 244.841843z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)