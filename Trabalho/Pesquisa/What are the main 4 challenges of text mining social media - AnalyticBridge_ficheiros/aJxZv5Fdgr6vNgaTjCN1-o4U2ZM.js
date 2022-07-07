;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="4a9725854698541f839df3a09dbc22ab";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["6MYPfsGo5Mki"]={appId:"2uLN7JthjHB7",scope:{}};;CloudflareApps.installs["6MYPfsGo5Mki"].options={"announcementButtonText":"Got it","announcementText":"Sale! Everything is 75% off this entire week.","announcementTitle":"Announcement","color":"#3c79a7","ctaButtonText":"Learn more","ctaLinkAddress":"https://www.datasciencecentral.com/profiles/blogs/new-books-and-resources-for-dsc-members","ctaText":"We are in the process of writing and adding new material (compact eBooks) exclusively available to our members, and written in simple English, by world leading experts in AI, data science, and machine learning.","ctaTitle":"New Books and Resources for DSC Members","delay":"1500","goal":"cta","list":"","position":"right bottom","showStrategy":"always","signupButtonText":"Sign up","signupDestination":"email","signupInputPlaceholder":"Email address","signupSuccessText":"You’ll be kept up to date with our newsletter.","signupSuccessTitle":"Thanks for signing up!","signupText":"Join our mailing list to be the first to know what we’re up to.","signupTitle":"Sign up for our newsletter"};;CloudflareApps.installs["6MYPfsGo5Mki"].URLPatterns=["^www.analyticbridge.datasciencecentral.com/?.*$","^www.datasciencecentral.com/?.*$"];;CloudflareApps.installs["6MYPfsGo5Mki"].product={"id":"pro"};;CloudflareApps.installs["clIvN4l0zwOz"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["clIvN4l0zwOz"].options={"behavior":{"automaticallyHide":false,"showCloseButton":true},"cta":{"label":"Register today","newWindow":true,"show":true,"url":"https://dsc.news/2m0OtVZ"},"message":"DSC Webinar: Democratizing Data Analytics and AI - Sep 25","messagePlan":"multiple","messages":[{"cta":{"label":"REGISTER NOW","newWindow":true,"show":true,"url":"https://dsc.news/2RUyYM0"},"endDate":"Wed Jan 1 2020 23:30","message":"Condition-based Monitoring Analytics Techniques In Action\nRegister for our Webinar on 9/30","useEndDate":false}],"theme":{"backgroundColor":"#ffffff","buttonBackgroundColor":"#3c79a7","buttonTextColor":"#0099ff","buttonTextColorStrategy":"auto","style":"prominent","textColor":"#000000"}};;CloudflareApps.installs["clIvN4l0zwOz"].URLPatterns=["^www.analyticbridge.datasciencecentral.com/?.*$","^www.datasciencecentral.com/?.*$"];;CloudflareApps.installs["clIvN4l0zwOz"].product={"id":"pro"};;CloudflareApps.installs["mvWhmFcKNfIA"]={appId:"nGAnsTeiPCQx",scope:{}};;CloudflareApps.installs["mvWhmFcKNfIA"].options={"subdomain_tracker_ids":[{"subdomain":"","tracker_id":""}],"tracker_id":"UA-27452860-1"};;CloudflareApps.installs["mvWhmFcKNfIA"].product={"id":"google-analytics-free"};;CloudflareApps.installs["qj3zIdRie9WF"]={appId:"NFE2MpUAp1fZ",scope:{}};;CloudflareApps.installs["qj3zIdRie9WF"].options={"tag_id":"GTM-KDDZT6Q"};;CloudflareApps.installs["qj3zIdRie9WF"].URLPatterns=["^analyticbridge.datasciencecentral.com/?.*$","^bigdatanews.datasciencecentral.com/?.*$","^datasciencecentral.com/?.*$","^datavizualization.datasciencecentral.com/?.*$","^hadoop360.datasciencecentral.com/?.*$","^www.analyticbridge.datasciencecentral.com/?.*$","^www.bigdatanews.datasciencecentral.com/?.*$","^www.datasciencecentral.com/?.*$","^www.datavizualization.datasciencecentral.com/?.*$","^www.hadoop360.datasciencecentral.com/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['qj3zIdRie9WF'].URLPatterns)){'use strict'
var options=CloudflareApps.installs['qj3zIdRie9WF'].options;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',options.tag_id);}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/upMsO4Res_hp5N0fpqjDYXFF5tA.js';document.head.appendChild(script);})();