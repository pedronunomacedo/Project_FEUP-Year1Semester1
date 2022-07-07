
var SURVQTYPE_T4=1;var SURVQTYPE_T10=2;var SURVQTYPE_T25=3;var SURVQTYPE_T50=4;var SURVQTYPE_T100=5;var SURVQTYPE_TB=6;var SURVQTYPE_CB=7;var SURVQTYPE_SS=8;var SURVQTYPE_MS=9;var SURVQTYPE_RAD=10;var SURVQTYPE_MC=11;var SURVQTYPE_HDR=12;var SURVQTYPE_HR=13;var SURVQTYPE_BR=14;var _NONE="";var _NUM="NUMBER REQUIRED";var _NONZERO="NUMBER REQUIRED (NON-ZERO)";var _BINT="NUMBER REQUIRED (YES/NO)";var _UTINT="NUMBER REQUIRED (0->255)";var _TINT="NUMBER REQUIRED (-128->127)";var _USINT="NUMBER REQUIRED (0-65535)";var _SINT="NUMBER REQUIRED (-32768->32767)";var _UMINT="NUMBER REQUIRED (0->16777215)";var _MINT="NUMBER REQUIRED (-8388608->8388607)";var _UINT="NUMBER REQUIRED (0-4294967295)";var _INT="NUMBER REQUIRED (-2147483648->2147483647)";var _TXT="REQUIRED";var _DTE="DATE REQUIRED";var _DYM="YYYY-MM REQUIRED";var _DTM="DATE/TIME REQUIRED";var _EML="EMAIL REQUIRED";var _EML0="EMAIL OR EMPTY REQUIRED";var _EMLPCT='EMAIL/EMAIL PARAMETER REQUIRED';var _NZ="SELECTION REQUIRED";var _PW="PASSWORD REQUIRED";var _PWC="PASSWORD CHANGES ONLY";function getBase(){var oBaseColl=document.getElementsByTagName('BASE');return((oBaseColl&&oBaseColl.length)?oBaseColl[0].href:null);}
function navselect(osel,sUrl){var append=getSelValue(osel);var b=getBase();if(b){sUrl=b+sUrl;}
document.location.href=sUrl+append;}
function submitselect(sFName,bVal){if(bVal){if(!checkrequired(sFName)){return(false);}}
return(submitform(sFName));}
function submitform(sFName){var oform=document.forms[sFName];var onsubmit=oform.onsubmit;if(onsubmit!=null){if(!oform.onsubmit()){return false;}}
document.forms[sFName].submit()
return true;}
function getPrompt(formname,fieldname,textname,oldvalue){if(oldvalue==null){oldvalue=textname;}
var pValue=window.prompt("Please enter the "+textname+":",oldvalue);if(pValue==null){return false;}else{var oform=document.getElementsByName(formname)[0];var ofields=oform.getElementsByTagName("input");for(idx in ofields){if(ofields[idx].name==fieldname){ofields[idx].setAttribute('value',pValue);break;}}
return true;}}
function getField(sFName,sName,sValue){var ohidden=document.createElement('INPUT');var oform=document.getElementsByName(sFName)[0];ohidden.setAttribute('name',sName);ohidden.setAttribute('value',sValue);ohidden.style.display='none';var newelement=oform.appendChild(ohidden);newelement.setAttribute('value',sValue);}
function getHtml(fieldname,editname){if(!editname){editname="htmledit";}
var ofield;var ofields=document.getElementsByName(fieldname);var cnt=ofields.length;for(i=0;i<cnt;i++){if(ofields[i].tagName.toLowerCase()=="input"){ofield=ofields[i];}}
if(!ofield){ofield=document.getElementById(fieldname);}
if(!ofield){ofield=document.getElementsByName(fieldname)[0];}
bodyvalue=getBodyValue(editname);ofield.setAttribute('value',bodyvalue);return(true);}
function getBodyValue(editname){if(!editname){editname="htmledit";}
var obody=document.getElementById(editname);if(obody){if(obody.className=="off"){obody=document.getElementById(editname+"text");bodyvalue=obody.value;}else{bodyvalue=obody.innerHTML;}}else{bodyvalue='';}
return(bodyvalue);}
function getConfirm(text){if(text==''){return true;}
var pValue=window.confirm(text);if(pValue){return true;}else{return false;}}
var _sFName;var _bVal;var _iType;function getDialog(url,sFName,bVal,iType,sText){_sFName=sFName;_bVal=bVal;_iType=iType;_sText=sText;popup(url);return false;}
function dlgSubmit(){if(_sFName){if(_iType==1){if(!getConfirm(_sText)){return false;}}
if(_bVal){if(!checkrequired(_sFName)){return false;}}
return submitform(_sFName);}
return false;}
function checkReason(formname,t,p){var pass=true;var text="Please enter the reason for disapproval:";if(t&&t!=''){text=t;}
if(!p){p="";}
var pValue=window.prompt(text,p);if(pValue==null){pass=false;}else{if(pValue==''){window.alert("A non-empty value is required");pass=false;}}
if(!pass){return false;}else{var pName="rsn";var oform=document.getElementsByName(formname)[0];var rtn=false;var ofields=oform.getElementsByTagName("input");for(idx in ofields){if(ofields[idx].name==pName){rtn=true;ofields[idx].setAttribute('value',pValue);break;}}
if(rtn==false){window.alert("Error setting reason.");}
return rtn;}}
function checkrequired(formname){var which=document.getElementsByName(formname)[0];var normalColor="black";var arrName=[];var arrVal=[];var numArr=-1;var pass=true;var matchobj;if(document.images&&which){for(i=0;i<which.length;i++){var tempobj=which.elements[i];if(tempobj.title.length==0||tempobj.className.replace(/[\n\t]/g,' ').indexOf('chkreq')>-1){continue;}
tempobj.style.borderColor="";tempobj.style.borderStyle="";if(tempobj.title.substring(0,8)=="REQUIRED"){if(((tempobj.type=="select-one"||tempobj.type=="hidden"||tempobj.type=="text"||tempobj.type=="file"||tempobj.type=="password"||tempobj.type=="textarea")&&tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&tempobj.selectedIndex==-1)){pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";}else if(tempobj.type=="radio"||tempobj.type=="checkbox"){var found=false;if(tempobj.id=='ack'){if(tempobj.checked){$("#__acklabel").removeClass("so_warn");}else{$("#__acklabel").addClass("so_warn");}}
for(j=0;j<=numArr;j++){if(tempobj.name==arrName[j]){found=true;if(tempobj.checked==true){arrVal[j]=true;}}}
if(found==false){numArr++;arrName[numArr]=tempobj.name;arrVal[numArr]=tempobj.checked;}}}else if(tempobj.title.substring(0,15)=="NUMBER REQUIRED"){var x=tempobj.value;var anum=/(^[-]?\d+$)|(^[-]?\d+\.\d+$)/;if(anum.test(x)){intx=parseInt(x,10);switch(tempobj.title){case _NONZERO:if(intx<1){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _BINT:if(intx<0||intx>1){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _UTINT:if(intx<0||intx>255){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _TINT:if(intx<-128||intx>127){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _USINT:if(intx<0||intx>65535){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _SINT:if(intx<-32768||intx>32767){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _UMINT:if(intx<0||intx>16777215){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _MINT:if(intx<-8388608||intx>8388607){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _UINT:if(intx<0||intx>4294967295){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _INT:if(intx<-2147483648||intx>2147483647){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}
break;case _NUM:break;default:break;}}else{tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else if(tempobj.title.substring(0,18)=="SELECTION REQUIRED"){var x=tempobj.value;var anum=/(^\d+$)|(^\d+\.\d+$)/;if(anum.test(x)){if(x<=0){tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else{tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else if(tempobj.title.substring(0,13)=="DATE REQUIRED"){if(IsDateValid(tempobj.value)){}else{pass=false;}}else if(tempobj.title.substring(0,16)=="YYYY-MM REQUIRED"){if(IsYearMonthValid(tempobj.value)){}else{tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else if(tempobj.title.substring(0,27)=="MM-DD-YYYY REQUIRED OR NONE"){if(IsMonthDayYearValid(tempobj.value)){}else{tempobj.style.color="red";pass=false;}}else if(tempobj.title.substring(0,19)=="MM-DD-YYYY REQUIRED"){if(tempobj.value==""||tempobj.value=="None"){tempobj.style.color="red";pass=false;}else{if(IsMonthDayYearValid(tempobj.value)){}else{tempobj.style.color="red";pass=false;}}}else if(tempobj.title.substring(0,28)=="YYYY-MM-DD REQUIRED OR BLANK"){if(tempobj.value==""||tempobj.value=="None"){}else{if(IsYearMonthDayValid(tempobj.value)){}else{tempobj.style.color="red";pass=false;}}}else if(tempobj.title.substring(0,19)=="YYYY-MM-DD REQUIRED"){if(IsYearMonthDayValid(tempobj.value)){}else{tempobj.style.color="red";pass=false;}}else if(tempobj.title.substring(0,18)=="DATE/TIME REQUIRED"){if(IsDateTimeValid(tempobj.value)){}else{pass=false;}}else if(tempobj.title=="EMAIL OR EMPTY REQUIRED"){if(tempobj.value==""){}else{if(IsEmailValid(tempobj.value)){}else{alert("A valid email address is required");tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}}else if(tempobj.title.substring(0,14)=="EMAIL REQUIRED"){if(IsEmailValid(tempobj.value)){}else{alert("A valid email address is required");tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else if(tempobj.title.substring(0,30)==_EMLPCT){if(IsEmailValid(tempobj.value)||tempobj.value=='%SUPPORT%'){}else{alert('A valid email address is required');tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";pass=false;}}else if(tempobj.title.substring(0,17)=="PASSWORD REQUIRED"){var thisname=tempobj.name;if(thisname.lastIndexOf("2")==(thisname.length-1)){var tmpname=thisname.substring(0,thisname.length-1);var msg="";}else{var tmpname=tempobj.name+"2";var msg="The password fields do not match";}
matchobj=document.getElementsByName(tmpname)[0];if(tempobj.value==''){pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";}else{if(matchobj){if(!(matchobj.value==tempobj.value)){if(msg!=""){alert(msg);}
pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";matchobj.style.borderStyle="solid";matchobj.style.borderColor="red";}}}}else if(tempobj.title.substring(0,14)=="MATCH REQUIRED"){var thisname=tempobj.name;if(thisname.lastIndexOf("2")==(thisname.length-1)){var tmpname=thisname.substring(0,thisname.length-1);var msg="";}else{var tmpname=tempobj.name+"2";alert("The fields do not match");}
matchobj=document.getElementsByName(tmpname)[0];if(matchobj){if(!(matchobj.value==tempobj.value)){alert("The fields do not match");pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";matchobj.style.borderStyle="solid";matchobj.style.borderColor="red";}}}else if(tempobj.title.substring(0,21)=="PASSWORD CHANGES ONLY"){var thisname=tempobj.name;if(thisname.lastIndexOf("2")==(thisname.length-1)){var tmpname=thisname.substring(0,thisname.length-1);var msg="";}else{var tmpname=tempobj.name+"2";var msg="The password fields do not match";}
matchobj=document.getElementsByName(tmpname)[0];if(matchobj){if(!(matchobj.value===tempobj.value)){if(msg!=""){alert(msg);}
pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";matchobj.style.borderStyle="solid";matchobj.style.borderColor="red";}}}else if(tempobj.title.substring(0,31)=="AT LEAST ONE SELECTION REQUIRED"){var thisid=tempobj.id;var selonepass=true;if($('#'+thisid).hasClass('de_dsa')){var act=thisid.substr(0,thisid.length-1);if($('#'+act+'wrap div').length==0){selonepass=false;var nxt=$('#'+act+'1')[0];nxt.style.borderStyle="solid";nxt.style.borderColor="red";nxt.style.color="red";}else{$('#'+act+'1').css({border:'',color:''});}}else if($('#'+thisid+'wrap div').length==0){selonepass=false;}
if(!selonepass){pass=false;tempobj.style.borderStyle="solid";tempobj.style.borderColor="red";tempobj.style.color="red";alert("At least one item must be added.");}}else if(tempobj.title.substring(0,19)=="DATE RANGE REQUIRED"){var thisid=tempobj.id.replace(/Sel$/,'');var dr_start=$('#'+thisid+'St');var dr_end=$('#'+thisid+'En');var thispass=true;if(tempobj.value==0){if(!IsMonthDayYearValid(dr_start.val())){thispass=false;pass=false;dr_start.css({border:'red solid'}).addClass('chkreq');}else{dr_start.css({border:''});}
if(!IsMonthDayYearValid(dr_end.val())){thispass=false;pass=false;dr_end.css({border:'red solid'}).addClass('chkreq');}else{dr_end.css({border:''});}
if(!thispass){$(tempobj).css({border:'red solid'});}}else{dr_start.css({border:''});dr_end.css({border:''});}}
if(tempobj.type=="select-one"){tempobj.style.color=tempobj.style.borderColor;}
if(pass){var data=$(tempobj).data();$(tempobj).css('border','');$.each(data,function(i,v){if(pass&&i.indexOf('validate-')===0){if(!soc.valid.call(tempobj,i.replace('validate-',''),v)){pass=false;$(tempobj).css('border','red 2px solid');}}});}}}
for(i=0;i<=numArr;i++){if(arrVal[i]==false){pass=false;break;}}
if(!pass){window.alert("One or more of the required elements are not completed. Please complete them, then submit again!");try{window.event.cancelBubble=true;window.event.returnValue=false;}catch(e){}
return false;}else{which.submitted=true;return true;}}
function popup(url){popupSize(url,650,400);}
var newwin;function popLb(f,p1,p2,p3,rt,cb){var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(f);msg.addParameter(escape(sSid));msg.addParameter(escape(p1));if(p2){msg.addParameter(escape(p2));}
if(p3){msg.addParameter(escape(p3));}
if(rt){msg.addParameter(escape(rt));}
if(!cb){var cb=fillLb;}
output=escape(msg.xml());jsrsExecute("rpc.php",cb,"doRPC",output);return(true);}
function fillLb1(xml,stat){fillLb(xml,stat,null,1);}
function fillLb(xml,stat,xhr,pc){xmldoc=new rpcXMLDocument(xml);var refid=xmldoc.params[0];var refrpc=xmldoc.params[1];var html=unescape(xmldoc.params[2]);var title=unescape(xmldoc.params[3]);var w='400px';if(xmldoc.params[4]){w=xmldoc.params[4];}
var h='400px';if(xmldoc.params[5]){h=xmldoc.params[5];}
var refid2='';if(xmldoc.params[6]){refid2=xmldoc.params[6];}
var refid3='';if(xmldoc.params[7]){refid3=xmldoc.params[7];}
var postcb='';if(xmldoc.params[8]){postcb=xmldoc.params[8];}
if(!pc){var pc='';}
fillLbCommon(refid,refrpc,html,title,w,refid2,refid3,postcb,pc);}
function fillLbCommon(refid,refrpc,html,title,w,refid2,refid3,postcb,pc,ajaxForm){var lbid='#popclick'+pc;if(ajaxForm===undefined){ajaxForm=true;}
if(!soc.initLb(lbid,function(){fillLbCommon(refid,refrpc,html,title,w,refid2,refid3,postcb,pc,ajaxForm);},ajaxForm)){return;}
var popClick=$(lbid),main=popClick.children('.jqmMain')
mainDiv=main.children('div');popClick.width(w).css({'z-index':parseInt(2999+(pc||0),10),'margin-left':-1*(parseInt(w,10))/2}).children('.h1').find('p').html(title);mainDiv.html("<br />").width("").html(html);mainDiv.find(".ac_results").each(function(){$(this).sociousautocomplete(3,0);});mainDiv.find(".ac_results2").each(function(){$(this).sociousautocomplete(3,2);});var tinys=popClick.find('.mceEditor');if(soc.mce&&tinys.length){setTimeout(function(){popClick.jqmResize();},1250)
if(ajaxForm){bindTinyMCEForm.call(popClick.find('form'),tinys,soc.mce);}}
var hide=function(hash){hash.w.hide();$.each(tinys,function(){try{if(tinyMCE.isMSIE){tinyMCE.execCommand('mceFocus',false,this.id);}
tinyMCE.execCommand('mceRemoveControl',false,this.id);}catch(e){}});hash.w.children('.jqmMain').children('div').html('<br />');hash.o.remove();};var pies=mainDiv.find('[_pieId]');if(pies.length>0){pies.css('behavior','none');}
if(ajaxForm){bindAjaxForm.call(popClick.find('form').not('.s-form'),postcb,refrpc,refid,refid2,refid3);}
if(pies.length>0){pies.css('behavior','');}
if(refid2==='MODAL'){var dragon=popClick.find('.jqDrag');if(dragon.length>0){dragon.unbind('mousedown').removeClass('jqDrag').addClass('notjqDrag');}
$(lbid+' .jqmClose').hide();popClick.jqm({modal:true}).jqmShow().jqmResize();}else{var undragon=popClick.find('.notjqDrag');if(undragon.length>0){undragon.removeClass('notjqDrag').addClass('jqDrag');popClick.jqDrag('.jqDrag');}
$(lbid+' .jqmClose').show();popClick.jqm({onHide:hide,modal:false}).jqmShow();}}
function numOrAlert(x){if(isNaN(parseInt(x,10))){window.alert(x);return false;}
return true;}
function recaptchaFail(x){if(!numOrAlert(x)){Recaptcha.reload();return false;}
return true;}
function popclose(url){var b=getBase();if(b){url=b+url;}
newwin=window.open(url,"","status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes");}
function popupSize(url,width,height){var b=getBase();if(b){url=b+url;}
if(width==0&&height==0){window.open(url,"","status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes");}else{window.open(url,"","width="+width+",height="+height+",top=200,left=200,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");}
return false;}
function htmlReplace(text){var esctext=encodeURIComponent(text);esctext=esctext.replace(/%E2%80%98/g,"&lsquo;");esctext=esctext.replace(/%E2%80%9C/g,"&ldquo;");esctext=esctext.replace(/%E2%80%9D/g,"&rdquo;");esctext=esctext.replace(/%E2%80%93/g,"&ndash;");esctext=esctext.replace(/%E2%80%94/g,"&mdash;");esctext=esctext.replace(/%CB%9C/g,"&tilde;");esctext=esctext.replace(/%E2%84%A2/g,"&trade;");esctext=esctext.replace(/%E2%80%99/g,"&rsquo;");var reptext=unescape(esctext);return reptext.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function doError(){return true;}
function IsEmailValid(checkThisEmail){var regex=/^[_a-z0-9-]+([&\/%=+._'a-z0-9-])*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,63})+$/i;return regex.test(checkThisEmail);}
function checknumber(){var x=document.checknum.pnum.value;var anum=/(^\d+$)|(^\d+\.\d+$)/;if(anum.test(x)){testresult=true;}else{alert("Please input a valid number!");testresult=false;}
return(testresult);}
function getItembyName(sName){var oItem=document.getElementsByName(sName)[0];return(oItem);}
function IsDateTimeValid(val){if(IsDateValid(val)){return(IsTimeValid(val));}else{return(false);}}
function IsYearMonthDayValid(val){var myLength=val.length;if(myLength<10||myLength>10){return(false);}
var myDash=val.indexOf('-');if(myDash<4){return(false);}
var myDate=val.split("-");var myDay=parseInt(myDate[2],10);if(isNaN(myDay)){return(false);}
if(myMonth<1||myMonth>31){return(false);}
var myYear=parseInt(myDate[0],10);if(isNaN(myYear)){return(false);}
var myMonth=parseInt(myDate[1],10);if(isNaN(myMonth)){return(false);}
if(myMonth<1||myMonth>12){return(false);}
return(true);}
function IsMonthDayYearValid(val){if(val=="None"){return(true);}
var myLength=val.length;if(myLength<10||myLength>10){return(false);}
var myDash=val.indexOf('-');if(myDash<2){return(false);}
var myDate=val.split("-");var myDay=parseInt(myDate[1],10);if(isNaN(myDay)){return(false);}
if(myMonth<1||myMonth>31){return(false);}
var myYear=parseInt(myDate[2],10);if(isNaN(myYear)){return(false);}
var myMonth=parseInt(myDate[0],10);if(isNaN(myMonth)){return(false);}
if(myMonth<1||myMonth>12){return(false);}
return(true);}
function IsYearMonthValid(val){var myLength=val.length;if(myLength<7||myLength>7){return(false);}
var myDash=val.indexOf('-');if(myDash<1){return(false);}
var myDate=val.split("-");var myYear=parseInt(myDate[0],10);if(isNaN(myYear)){return(false);}
var myMonth=parseInt(myDate[1],10);if(isNaN(myMonth)){return(false);}
if(myMonth<0||myMonth>12){return(false);}
return(true);}
function IsTimeValid(val){var min=document.getElementsByName(val+"min")[0];var hour=document.getElementsByName(val+"hour")[0];var minval=parseInt(min.value,10);var hourval=parseInt(hour.value,10);if(minval<0||minval>59){window.alert("A valid minute value is required");return(false);}
if(hourval<1||hourval>12){window.alert("A valid hour value is required");return(false);}
return(true);}
function IsDateValid(val){var day=document.getElementsByName(val+"day")[0];var month=document.getElementsByName(val+"month")[0];var year=document.getElementsByName(val+"year")[0];var maxmonth;switch(month.value){case"1":case"3":case"5":case"7":case"8":case"10":case"12":maxmonth=31;break;case"2":yearval=parseInt(year.value,10);if(((yearval%4==0)&&!(yearval%100==0))||(yearval%400==0)){maxmonth=29;}else{maxmonth=28;}
break;case"4":case"6":case"9":case"11":maxmonth=30;break;default:alert("Invalid month selected");return(false);break;}
if(day.value>maxmonth){alert("A valid date is required");return(false);}else{return(true);}}
function textCopy(sFrom,sTo){var oFrom=document.getElementsByName(sFrom)[0];var oTo=document.getElementsByName(sTo)[0];oTo.value=oFrom.value;}
function shiftboxes(oBox1,oBox2,bAll,nosort){var cnt=0;for(i=oBox1.length-1;i>=0;i--){if(oBox1.options.item(i).selected||bAll){var newHTML=oBox1.options.item(i).innerHTML;var oOption=document.createElement("OPTION");if(oBox2.length==0){cnt++;oBox2.appendChild(oOption);}else{var found=false;if(!nosort){for(j=0;j<oBox2.length;j++){if(newHTML.toUpperCase()<oBox2.options.item(j).innerHTML.toUpperCase()){found=true;if(oBox2.options.item(j)){oBox2.insertBefore(oOption,oBox2.options.item(j));}else{oBox2.appendChild(oOption);}
break;}}
if(!found){oBox2.appendChild(oOption);}}else{if(cnt>0){oBox2.insertBefore(oOption,oBox2.options.item(oBox2.options.length-cnt));}else{oBox2.appendChild(oOption);}
cnt++;}}
oOption.innerHTML=newHTML;oOption.value=oBox1.options.item(i).value;oBox1.removeChild(oBox1.options.item(i));}}}
function getOptionList(oBox){var list="";for(i=0;i<oBox.length;i++){if(i==0){list=oBox.options.item(i).value;}else{list=list+","+oBox.options.item(i).value;}}
return(list);}
function shiftopt(fieldname,type){var oBox=document.getElementsByName(fieldname)[0];var len=oBox.length;for(var i=len-1;i>=0;i--){if(oBox.options.item(i).selected){var html=oBox.options.item(i).innerHTML;var val=oBox.options.item(i).value;var oOption=document.createElement("OPTION");var s=i;break;}}
if(oOption){switch(type){case 1:if(s>0){oBox.insertBefore(oOption,oBox.options.item(s-1));oBox.removeChild(oBox.options.item(s+1));}
break;case-1:if(s<(len-1)){if(s<(len-2)){oBox.insertBefore(oOption,oBox.options.item(s+2));}else{oBox.appendChild(oOption);}
oBox.removeChild(oBox.options.item(s));}
break;}
oOption.innerHTML=html;oOption.value=val;oOption.selected=true;var list=document.getElementsByName(fieldname+"list")[0];if(list){list.value=getOptionList(oBox);}}
return(false);}
function shift(fieldname1,fieldname2,type,nosort){var oBox1=document.getElementsByName(fieldname1)[0];var oBox2=document.getElementsByName(fieldname2)[0];switch(type){case 2:shiftboxes(oBox1,oBox2,true,nosort);break;case 1:shiftboxes(oBox1,oBox2,false,nosort);break;case-1:shiftboxes(oBox2,oBox1,false,nosort);break;case-2:shiftboxes(oBox2,oBox1,true,nosort);break;}
var list1=document.getElementsByName(fieldname1+"list")[0];var list2=document.getElementsByName(fieldname2+"list")[0];list1.value=getOptionList(oBox1);list2.value=getOptionList(oBox2);oBox1.style.width="0px";oBox1.style.width="auto";oBox2.style.width="0px";oBox2.style.width="auto";return(false);}
function chgText(param1,param2,param3,method,textname){var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(param1));msg.addParameter(escape(param2));msg.addParameter(escape(param3));msg.addParameter(escape(textname));output=escape(msg.xml());jsrsExecute("rpc.php",getText,"doRPC",output);return(true);}
function getText(xml){xmldoc=new rpcXMLDocument(xml);var otext=document.getElementById(xmldoc.params[0]);if(otext){otext.innerHTML=unescape(xmldoc.params[1]);}
return;}
function getUsers(xml){xmldoc=new rpcXMLDocument(xml);var id=xmldoc.params[0];var otext=document.getElementById(id);if(otext){txt=xmldoc.params[1];oTable=getParent(otext,'table');oTbody=getParent(otext,'tbody');nTbody=document.createElement('tbody');nTbody.setAttribute('id',id);var rows=txt.split("||");for(r in rows){nTr=document.createElement('tr');var cols=rows[r].split("++");if(cols.length==1){var nTd=document.createElement('td');nTd.style.backgroundColor="#FFFFFF";nTd.style.border="1px solid #ccc";nTd.className="so_normal";nTd.colSpan=5;nTd.setAttribute('align',"left");nTd.innerHTML=cols[0];nTr.appendChild(nTd);}else{var i=0;for(c in cols){var nTd=document.createElement('td');nTd.style.backgroundColor="#FFFFFF";nTd.style.border="1px solid #ccc";if(i==0){nTd.className="so_normal";nTd.setAttribute('align',"left");}else{nTd.className="so_small";nTd.setAttribute('align','center');}
nTd.innerHTML=cols[c];nTr.appendChild(nTd);i++;}}
nTbody.appendChild(nTr);}
oTable.replaceChild(nTbody,oTbody);oTable=$(oTable);if(oTable.hasClass('tablesorter')){oTable.trigger('update');}}}
function sendCountry(cselname,sselname){oCountry=document.getElementById(cselname);var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod("nologin.states");msg.addParameter(escape(sSid));msg.addParameter(escape(oCountry.value));msg.addParameter(escape(sselname));output=escape(msg.xml());jsrsExecute("rpc.php",getStates,"doRPC",output);return(true);}
function getRpcInfo(method,retfunc,txt1,txt2,txt3){if(method==null){window.alert("Invalid method");return false;}
if(retfunc==null){window.alert("Invalid return function");return false;}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(txt1));if(txt2!==null){msg.addParameter(escape(txt2));}
if(txt3!==null){msg.addParameter(escape(txt3));}
output=escape(msg.xml());jsrsExecute("rpc.php",retfunc,"doRPC",output);return(true);}
function addValues(iParent,iComp,method,vallist,retfunc,clear){if(retfunc==null){var retfunc=putNewItem;}
if(clear==null){clear=true;}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(iParent));msg.addParameter(escape(iComp));msg.addParameter(escape(vallist));var valnames=vallist.split("|");for(i in valnames){msg.addParameter(escape(getObjValue(valnames[i])));if(clear){clrValues(valnames[i],false);}}
output=escape(msg.xml());jsrsExecute("rpc.php",retfunc,"doRPC",output);return(true);}
function chkValues(l){var a=l.split("|");for(i in a){if(getObjValue(a[i])!=0){return true;}}
return false;}
function clrValues(id){var obj=document.getElementById(id);if(obj){switch(obj.tagName.toLowerCase()){case'input':switch(obj.type){case'hidden':return;default:break;}
break;default:break;}}
setObjValue(id,false);}
function addItem(oItem,iGid,iComp,method,retfunc,setsel){if(retfunc==null){var retfunc=putNewItem;}
if(setsel==null){var setsel=-1;}
var oSel=getChildbyId(oItem.parentNode,iComp);if(!oSel){oSel=getChildbyId(oItem.parentNode.parentNode,iComp);}
if(!oSel){oSel=document.getElementById(iComp);}
var iId=getSelValues(oSel);if(iId==""){window.alert("Please make a selection.");return false;}
if(iGid==0){return false;}
if(setsel!=''){oSel.selectedIndex=-1;}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(iGid));msg.addParameter(escape(iComp));msg.addParameter(escape(iId));output=escape(msg.xml());jsrsExecute("rpc.php",retfunc,"doRPC",output);return(true);}
function putNewItem(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var olddiv=xmldoc.params[0];var odiv=document.getElementById("comp"+olddiv);if(!odiv){if(isNaN(parseInt(olddiv,10))){window.alert(olddiv);}
return;}
var divlist=unescape(xmldoc.params[2]);var divs=divlist.split("|");var aidlist=unescape(xmldoc.params[1]);var aids=aidlist.split("|");for(i in divs){var onewdiv=document.createElement("div");onewdiv.id="a_"+aids[i];onewdiv.innerHTML=divs[i];odiv.appendChild(onewdiv);}}
function doJsonOps(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse),success=xmldoc.params[0];if(success!="1"){var json=JSON.parse(xmldoc.params[1]);if(json['refreshdaoinfo']=='MODAL'){fillLbCommon('','',success,json['title'],json['width'],json['refreshdaoinfo'],'','','');}else{window.alert(success);}
return;}
var obj=eval(xmldoc.params[1]);if(typeof obj=='object'){soc.ajOp(obj);}}
function putNewHtml(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var divlist=unescape(xmldoc.params[0]);var divs=divlist.split("|");var htmllist=unescape(xmldoc.params[1]);var htmls=htmllist.split("|");for(i in divs){var odiv=document.getElementById(divs[i]);if(odiv){setObjValue(divs[i],false,htmls[i]);}else{window.alert(divs[i]);}}}
function selFields(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var flist=unescape(xmldoc.params[0]);var fs=flist.split("|");var fslist=unescape(xmldoc.params[1]);var fss=fslist.split("|");for(i in fs){var obj=document.getElementById(fs[i]);if(obj){var fssi=eval('('+fss[i]+')');if(fs[i]=="cols"){var col1=fs[i];var col2=fs[i]+"wo";}
if(col1){shift(col1,col2,2,false);obj=document.getElementById(col2);}else{if(obj.selected){obj.selected.selectedIndex=0;}}
for(k in fssi){setSelValue(obj,fssi[k]);if(col1){shift(col1,col2,-1,true);}}}}}
function putFields(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var flist=unescape(xmldoc.params[0]);var dvlist=unescape(xmldoc.params[1]);if(flist=='error'){alert(dvlist);return;}
var fs=flist.split("|");var dvs=dvlist.split("|");var dilist=unescape(xmldoc.params[2]);var dis=dilist.split("|");var vlist=unescape(xmldoc.params[3]);var vs=vlist.split("|");for(i in fs){var obj=document.getElementById(fs[i]);if(obj){if(dvs[i]!=""){optvals=dvs[i].split("++");optids=dis[i].split("++");fillSelObjectSeld(obj,optvals,optids,vs[i],"");obj.disabled=false;}else{setObjValue(fs[i],false,vs[i]);}}}}
function updRpcInfo(method,retfunc,comp,flist){var fs=flist.split("|");var val="";for(i in fs){var tval=getObjValue(fs[i]);if(val==""){val+=tval;}else{val+="--|--"+tval;}}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(flist));msg.addParameter(escape(comp));msg.addParameter(escape(val));output=escape(msg.xml());jsrsExecute("rpc.php",retfunc,"doRPC",output);return(true);}
function setObjValue(id,ro,val){if(ro==null){ro=false;}
var obj=document.getElementById(id);if(obj){switch(obj.tagName.toLowerCase()){case'textarea':if(val==null){obj.innerHTML="";}else{obj.innerHTML=val;}
obj.readOnly=ro;break;case'select':if(val==null){obj.selectedIndex=0;if(!(obj.onchange==null)){obj.onchange();}}
obj.disabled=ro;break;case'div':case'span':if(val==null){obj.innerHTML='';}else{obj.innerHTML=val;}
break;case'input':switch(obj.type){case'radio':case'checkbox':var objs=document.getElementsByName(id);if(!objs){return;}
if(objs.length){for(var i=0;i<objs.length;i++){if(objs[i].value==val&&val!=null){objs[i].checked=true;}else{objs[i].checked=false;}}}
return;case'hidden':if(val==null){obj.value='';}else{obj.value=val;}
break;default:if(val==null){obj.value='';}else{obj.value=val;}
obj.readOnly=ro;obj.disabled=ro;}
break;default:if(val==null){obj.setAttribute('value','');}else{obj.setAttribute('value',val);}
obj.readOnly=ro;break;}}}
function getObjValue(id){var obj=document.getElementById(id);if(!obj){var obj=document.getElementsByName(id)[0];}
return getObjValueFromObj(obj);}
function getObjValueFromObj(obj){if(obj){switch(obj.tagName.toLowerCase()){case'textarea':return obj.innerHTML;case'span':return obj.innerHTML;case'select':return getSelValue(obj);case'input':switch(obj.type){case'checkbox':return getCbValue(obj.name);case'radio':return getRadValue(obj.name);default:return obj.value;}
default:return obj.value;}}
return null;}
function doAlert(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var msg=unescape(xmldoc.params[0]);window.alert(msg);}
function doNull(xml){;}
function doOnChange(xmlresponse){var xmldoc=new rpcXMLDocument(xmlresponse);var selname=unescape(xmldoc.params[0]);if(selname=='error'){alert(unescape(xmldoc.params[1]));return;}
var osel=document.getElementById(selname);if(osel){if(xmldoc.params.length>1){setSelValue(osel,unescape(xmldoc.params[1]));}
if(!(osel.onchange==null)){osel.onchange();}}}
function reflowItems(repllist,aidlist,divlist){var repl=repllist.split("|");var aids;if(aidlist==''){aids=repllist.split("|");}else{aids=aidlist.split("|");}
var divs=divlist.split("|");for(i in aids){orepldiv=document.getElementById("a_"+repl[i]);if(orepldiv){oparent=orepldiv.parentNode;if(aids[i]!=""){var onewdiv=document.createElement("div");onewdiv.id="a_"+aids[i];onewdiv.align=orepldiv.align;onewdiv.innerHTML=divs[i];oparent.insertBefore(onewdiv,orepldiv);}
oparent.removeChild(orepldiv);}}}
function delItem(iAid,method,retfunc,comp){if(method==null){var method="comm_delitem";}
if(comp==null){var comp="";}
if(retfunc==null){var retfunc=clrDelItem;}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(iAid));msg.addParameter(escape(comp));output=escape(msg.xml());jsrsExecute("rpc.php",retfunc,"doRPC",output);return(true);}
function clrDelItem(optshtml){var xmldoc=new rpcXMLDocument(optshtml);var success=xmldoc.params[0];if(success=="1"){var odiv=document.getElementById("a_"+xmldoc.params[1]);if(odiv){oparent=odiv.parentNode;oparent.removeChild(odiv);if(xmldoc.params.length>2){var aidlist=unescape(xmldoc.params[2]);var divlist=unescape(xmldoc.params[3]);reflowItems(aidlist,aidlist,divlist);}}}else{if(success!="0"){window.alert(success);}}}
function getStates(statehtml){xmldoc=new rpcXMLDocument(statehtml);var osel=document.getElementById(xmldoc.params[0]);var states=xmldoc.params[1].split(";");if(xmldoc.params[2]){var stnames=xmldoc.params[2].split(";");}else{var stnames=states;}
osel.options.length=0;for(i in states){if(states[i]=='None'){osel.options[i]=new Option(states[i],'None');}else{osel.options[i]=new Option(states[i],states[i]);osel.options[i].innerHTML=stnames[i];}}
$(osel).change().closest('.jqmWindow').jqmResize();return;}
function ajaxUpdSel(sel1,sel2,rCall,zeroOk,method,add){if(!method){method='ajax_updsel';}
var msg=new XMLRPCMessage();var val=$('#'+sel1).val();msg.setMethod(method);msg.addParameter(escape(getSessionId()));msg.addParameter(escape(val));msg.addParameter(escape(sel2));msg.addParameter(escape(rCall));msg.addParameter(escape(add));if(zeroOk){msg.addParameter(escape(zeroOk));}else if(val==0||val==''){return true;}
var s=$("#"+sel2);s[0].options.length=0;s[0].options[0]=new Option('Loading...',' ',true);s.attr('disabled',true);jsrsExecute('rpc.php',doJsonOps,'doRPC',escape(msg.xml()));return true;}
function customChgSel(sel2Name,method,eId,val2,val3){var iId=getSelValue(document.getElementById(eId));var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(iId));if(val2){msg.addParameter(escape(val2));}
if(val3){msg.addParameter(escape(val3));}
msg.addParameter(escape(sel2Name));output=escape(msg.xml());jsrsExecute("rpc.php",putOpts,"doRPC",output);return(true);}
function chgSel(oItem,sel2Name,method,iId,fLetter){if(iId==null){var iId=getSelValue(oItem);}
if(fLetter==1){var iId=getSelValue(document.getElementById(iId));var fLetter=getSelValue(oItem);}else{fLetter=0;}
var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod(method);msg.addParameter(escape(sSid));msg.addParameter(escape(iId));msg.addParameter(escape(sel2Name));msg.addParameter(escape(fLetter));output=escape(msg.xml());jsrsExecute("rpc.php",putOpts,"doRPC",output);return(true);}
function putOpts(optshtml){xmldoc=new rpcXMLDocument(optshtml);var param1=xmldoc.params[1];var limitsize=xmldoc.params[3];if(!param1&&limitsize!=1){return;}
var vals=param1.split("|");var ids=xmldoc.params[2].split("|");var sels=xmldoc.params[0].split("|");var element;for(var i=0;i<sels.length;i++){var sel=sels[i];if(sel.indexOf("[")>0){sel=sel.substr(0,sel.indexOf("["));}
var tmpelement=document.getElementById(sel+'userFirstLetter');if(tmpelement){element=tmpelement.style;}}
if(limitsize==1){var vall=xmldoc.params[4].split("|");var idl=xmldoc.params[5].split("|");var fLet=xmldoc.params[6];if(element){element.display="inline";}
if(fLet=="0"){fLet="";}
if(fLet.length==0){for(var i=0;i<sels.length;i++){var sel3=sels[i];fillSel(sel3,'','');if(sel3.indexOf("[")>0){sel3=sel3.substr(0,sel3.indexOf("["));}
fillSel(sel3+'userFirstLetter',vall,idl);}}else{for(var i=0;i<sels.length;i++){fillSel(sels[i],vals,ids);}}
if(fLet.length>1){for(var i=0;i<sels.length;i++){var sel2=sels[i];if(sel2.indexOf("[")>0){sel2=sel2.substr(0,sel2.indexOf("["));}
var tmpelement2=document.getElementById(sel2+'userFirstLetter');if(tmpelement2){tmpelement2.selectedIndex=0;}}}}else{if(tmpelement){element.display="none";}
for(var i=0;i<sels.length;i++){fillSel(sels[i],vals,ids);}}
return;}
function fillSel(selname,optvals,optids,emptyval){var osel=document.getElementById(selname);osel.options.length=0;var j=0;for(var i=0;i<optvals.length;i++){if(optvals[i]==emptyval){osel.options[j]=new Option(optvals[i],'');j++;}else{if(osel.multiple&&(optids[i]==''||optids[i]==0)){}else{osel.options[j]=new Option(optvals[i],optids[i]);osel.options[j].innerHTML=optvals[i];j++;}}}
if(!(osel.onchange==null)){}
return;}
function fillSelObject(osel,optvals,optids,emptyval){osel.options.length=0;for(i in optvals){if(optvals[i]==emptyval){osel.options[i]=new Option(optvals[i],'');}else{osel.options[i]=new Option(optvals[i],optids[i]);osel.options[i].innerHTML=optvals[i];}}
if(!(osel.onchange==null)){}
return;}
function fillSelObjectSeld(osel,optvals,optids,selval,emptyval){if(!osel.options){return;}
osel.options.length=0;for(i in optvals){if(optvals[i]==emptyval){osel.options[i]=new Option(optvals[i],'');}else{osel.options[i]=new Option(optvals[i],optids[i]);osel.options[i].innerHTML=optvals[i];}
if(optids[i]==selval){osel.options[i].selected=true;}}
if(!(osel.onchange==null)){}
return;}
function setSelValue(osel,val){if(!osel.options){return;}
for(var i=0;i<osel.options.length;++i){if(osel.options.item(i).value==val){osel.options.item(i).selected=true;break;}}}
function getRadValue(id){var objs=document.getElementsByName(id);return getRadValueObj(objs);}
function getRadValueObj(objs){if(!objs){return;}
if(objs.length){for(var i=0;i<objs.length;i++){if(objs[i].checked){return objs[i].value;}}}else if(objs.checked){return objs.value;}}
function getCbValue(id){var objs=document.getElementsByName(id);return getCbValueObj(objs);}
function getCbValueObj(objs){if(!objs){return;}
if(objs.length){var val=0;for(var i=0;i<objs.length;i++){if(objs[i].checked){if(val==""){val=objs[i].value;}else{val+="|"+objs[i].value;}}}
return val;}else if(objs.checked){return objs.value;}}
function getSelValue(obj){if(obj&&obj.value){return obj.value;}
if(obj&&obj.options){if(obj.selectedIndex==-1){return;}
return obj.options[obj.selectedIndex].value;}}
function getSelValues(obj,bAll){if(!bAll){bAll=false;}
var cnt=obj.options.length;var val="";for(i=0;i<cnt;i++){if(obj.options[i].selected==true||bAll){if(val==""){val=obj.options[i].value;}else{val+="|"+obj.options[i].value;}}}
return val;}
function selectAll(oItem,sObj){oTable=getParent(oItem,'table');var inputs=oTable.getElementsByTagName('input');max=inputs.length;for(i=0;i<max;i++){if(inputs[i].id.substr(0,sObj.length)==sObj){inputs[i].checked=true;}}}
function surveys_chgQType(oItem){oTr=getParent(oItem,'tr');qid=oTr.rowIndex;var oDiv=document.getElementById('divo'+qid);iVal=getSelValue(oItem);switch(parseInt(iVal,10)){case SURVQTYPE_SS:case SURVQTYPE_MS:case SURVQTYPE_RAD:case SURVQTYPE_MC:oDiv.style.display="block";break;default:oDiv.style.display="none";break;}
oQid=document.getElementById('question'+qid);oDiv=getParent(oQid,'div');switch(parseInt(iVal,10)){case SURVQTYPE_HR:case SURVQTYPE_BR:oDiv.style.display="none";break;default:oDiv.style.display="block";break;}}
function _resetQids(tmpTable,j,start){var i;var j;var max;var oTable=tmpTable;max=oTable.rows.length;for(i=start;i<max;i++){var oTr=oTable.rows.item(i);if(j==''){var oTd=oTr.cells.item(1);}else{var oTd=oTr.cells.item(0);}
var qDiv=oTd.getElementsByTagName('div')[0];qDivid=qDiv.id;var oldid=qDivid.substr(4);qDiv.id='divq'+j+i;qDiv.setAttribute('name','divq'+j+i);if(j==''){type=getChildbyId(qDiv,'qtype'+oldid);type.id='qtype'+j+i;type.setAttribute('name','qtype'+j+i);odiv=getChildbyId(qDiv,'divo'+oldid);odiv.id='divo'+j+i;odiv.setAttribute('name','divo'+j+i);var oidTable=qDiv.getElementsByTagName('table')[0];_resetQids(oidTable,i+'_',1);}
qDiv=qDiv.firstChild;qID=getChildbyId(qDiv,'qid'+oldid);qID.id='qid'+j+i;qID.setAttribute('name','qid'+j+i);if(j==''){ques=getChildbyId(qDiv,'question'+oldid);ques.id='question'+j+i;ques.setAttribute('name','question'+j+i);}else{ques=getChildbyId(qDiv,'option'+oldid);ques.id='option'+j+i;ques.setAttribute('name','option'+j+i);}}}
function links_addlink(t){oTr=getParent(t,'tr');iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');newTr=oTr.cloneNode(true);var newrow=oTr.rowIndex+1;tmpTr=oTable.insertRow(newrow);var lb=$(t).closest('.jqmWindow');if(lb.length>0){lb.jqmResize();}
oTable.tBodies[0].replaceChild(newTr,tmpTr);var qDiv=newTr.cells.item(1).getElementsByTagName('div')[0];qDivid=qDiv.id;oldid=qDivid.substr(4);oTmp=getChildbyId(qDiv,'lid'+oldid);if(oTmp){oTmp.setAttribute('value',0);}
oTmp=getChildbyId(qDiv,'title'+oldid);if(oTmp){oTmp.setAttribute('value','');}
oTmp=getChildbyId(qDiv,'url'+oldid);if(oTmp){oTmp.setAttribute('value','');}
oTmp=getChildbyId(qDiv,'tgt'+oldid);if(oTmp){oTmp.setAttribute('value',1);oTmp.checked=false;}
oTmp=getChildbyId(qDiv,'private'+oldid);if(oTmp){oTmp.setAttribute('value',1);oTmp.checked=false;}
_resetOrder(oTable.tBodies[0],newrow);}
function links_dellink(t,reset){if(!reset&&reset!==false){reset=true;}
var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');var lb=$(t).closest('.jqmWindow');oTable.deleteRow(iRowIdx);if(lb.length>0){lb.jqmResize();}
if(reset){_resetOrder(oTable,'',iRowIdx);}}
function links_uplink(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;var oTable=getParent(oTr,'table');if(iRowIdx>1){aRow=iRowIdx-1;bRow=iRowIdx;_switchLab(oTable,aRow,bRow);}}
function links_dnlink(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');if(iRowIdx<(oTable.rows.length-2)){aRow=iRowIdx;bRow=iRowIdx+1;_switchLab(oTable,aRow,bRow);}}
function _switchLab(oTable,aRow,bRow){var newTr=oTable.rows.item(aRow).cloneNode(true);oTable.deleteRow(aRow);tmpTr=oTable.insertRow(bRow);oTable.tBodies.item(0).replaceChild(newTr,tmpTr);_resetOrder(oTable,aRow);}
function _resetOrder(tmpTable,start){var i;var max;max=tmpTable.rows.length;for(i=start;i<max-1;i++){var oTr=tmpTable.rows.item(i);if(oTr.cells.item(1)){var qDiv=oTr.cells.item(1).getElementsByTagName('div')[0];qDivid=qDiv.id;var oldid=qDivid.substr(4);qDiv.id='divl'+i;qDiv.setAttribute('name','divl'+i);type=getChildbyId(qDiv,'title'+oldid);if(type){type.id='title'+i;type.setAttribute('name','title'+i);}
odiv=getChildbyId(qDiv,'url'+oldid);if(odiv){odiv.id='url'+i;odiv.setAttribute('name','url'+i);}
odiv=getChildbyId(qDiv,'lid'+oldid);if(odiv){odiv.id='lid'+i;odiv.setAttribute('name','lid'+i);}
odiv=getChildbyId(qDiv,'tgt'+oldid);if(odiv){odiv.id='tgt'+i;odiv.setAttribute('name','tgt'+i);}
odiv=getChildbyId(qDiv,'private'+oldid);if(odiv){odiv.id='private'+i;odiv.setAttribute('name','private'+i);}}}}
function surveys_addquestion(t){oTr=getParent(t,'tr');iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');newTr=oTr.cloneNode(true);var newrow=oTr.rowIndex+1;tmpTr=oTable.insertRow(newrow);oTable.tBodies[0].replaceChild(newTr,tmpTr);var qDiv=newTr.cells.item(1).getElementsByTagName('div')[0];qDivid=qDiv.id;oldid=qDivid.substr(4);oDivo=getChildbyId(qDiv,'divo'+oldid);oDivo.style.display='none';oTmp=getChildbyId(qDiv,'qtype'+oldid);oTmp.options.item(0).selected=true;qDiv=qDiv.firstChild;oTmp=getChildbyId(qDiv,'qid'+oldid);oTmp.setAttribute('value',0);oTmp=getChildbyId(qDiv,'question'+oldid);oTmp.setAttribute('value','');_resetQids(oTable,'',newrow);oTable=oDivo.getElementsByTagName('table')[0];oOption=document.getElementById('option'+newrow+'_'+1);if(oOption){oOption.setAttribute('value','');}
max=oTable.rows.length;for(i=(max-1);i>1;i--){oTable.deleteRow(i);}}
function surveys_delquestion(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');oTable.deleteRow(iRowIdx);_resetQids(oTable,'',iRowIdx);}
function _switchQab(oTable,aRow,bRow){var newTr=oTable.rows.item(aRow).cloneNode(true);var question=getElement('question'+aRow).value;var qtype=getElement('qtype'+aRow).value;var qid=getElement('qid'+aRow).value;var cnt=1;var oOption=getElement('option'+aRow+'_'+cnt);var option=[];var oid=[];while(oOption){option[cnt]=oOption.value;oid[cnt]=getElement('qid'+aRow+'_'+cnt);cnt++;oOption=getElement('option'+aRow+'_'+cnt);}
oTable.deleteRow(aRow);tmpTr=oTable.insertRow(bRow);oTable.tBodies.item(0).replaceChild(newTr,tmpTr);_resetQids(oTable,'',aRow);var qDiv=newTr.cells.item(1).getElementsByTagName('div')[0];oTmp=getChildbyId(qDiv,'qtype'+bRow);oTmp.options.item(parseInt(qtype,10)-1).selected=true;var oidTable=qDiv.getElementsByTagName('table')[0];qDiv=qDiv.firstChild;oTmp=getChildbyId(qDiv,'qid'+bRow);oTmp.setAttribute('value',qid);oTmp=getChildbyId(qDiv,'question'+bRow);oTmp.setAttribute('value',question);for(key in option){oDiv=oidTable.rows.item(parseInt(key,10)).cells.item(0).getElementsByTagName('div')[0];oDiv=oDiv.firstChild;oTmp=getChildbyId(oDiv,'qid'+bRow+'_'+key);oTmp.setAttribute('value',oid[key]);oTmp=getChildbyId(oDiv,'option'+bRow+'_'+key);oTmp.setAttribute('value',option[key]);}}
function surveys_upquestion(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;var oTable=getParent(oTr,'table');if(iRowIdx>1){aRow=iRowIdx-1;bRow=iRowIdx;_switchQab(oTable,aRow,bRow);}}
function surveys_dnquestion(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');if(iRowIdx<(oTable.rows.length-1)){aRow=iRowIdx;bRow=iRowIdx+1;_switchQab(oTable,aRow,bRow);}}
function surveys_addoption(t){oTr=getParent(t,'tr');iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');newTr=oTr.cloneNode(true);var newrow=oTr.rowIndex+1;tmpTr=oTable.insertRow(newrow);oTable.tBodies[0].replaceChild(newTr,tmpTr);qDiv=newTr.cells.item(0).getElementsByTagName('div')[0];qDivid=qDiv.id;oldid=qDivid.substr(4);qDiv=qDiv.firstChild;oTmp=getChildbyId(qDiv,'qid'+oldid);oTmp.setAttribute('value',0);oTmp=getChildbyId(qDiv,'option'+oldid);oTmp.setAttribute('value','');pTr=getParent(oTable,'tr');_resetQids(oTable,pTr.rowIndex+'_',newrow);}
function surveys_deloption(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');oTable.deleteRow(iRowIdx);pTr=getParent(oTable,'tr');_resetQids(oTable,pTr.rowIndex+'_',iRowIdx);}
function surveys_upoption(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;if(iRowIdx>1){oTable=getParent(oTr,'table');qTr=getParent(oTable,'tr');qid=qTr.rowIndex;aRow=iRowIdx-1;bRow=iRowIdx;aVal=document.getElementById('option'+qid+'_'+aRow).value;aNode=oTable.rows.item(aRow).cloneNode(true);oTable.deleteRow(aRow);tmpTr=oTable.insertRow(bRow);oTable.tBodies.item(0).replaceChild(aNode,tmpTr);pTr=getParent(oTable,'tr');_resetQids(oTable,pTr.rowIndex+'_',aRow);if(!ie){document.getElementById('option'+qid+'_'+bRow).setAttribute('value',aVal);}}}
function surveys_dnoption(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');if(iRowIdx<(oTable.rows.length-1)){qTr=getParent(oTable,'tr');qid=qTr.rowIndex;aRow=iRowIdx;bRow=iRowIdx+1;aVal=document.getElementById('option'+qid+'_'+aRow).value;aNode=oTable.rows.item(aRow).cloneNode(true);oTable.deleteRow(aRow);tmpTr=oTable.insertRow(bRow);oTable.tBodies.item(0).replaceChild(aNode,tmpTr);pTr=getParent(oTable,'tr');_resetQids(oTable,pTr.rowIndex+'_',aRow);if(!ie){document.getElementById('option'+qid+'_'+bRow).setAttribute('value',aVal);}}}
function getSectionSize(anc,start,delta){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var i=start;i=i-delta;while(i>0){var oTestTr=oTable.rows.item(i);oTestA=null;if(oTestTr){oTestA=oTestTr.getElementsByTagName("a")[0];if(oTestA){if(oTestA.name==anc){break;}}}
i=i-delta;}
return(((start-i)*delta));}
function upsection(anc){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var i=oTr.rowIndex;var bot=i+1;var cnt=getSectionSize(anc,i,1);var top=i-cnt+1;swapsection(top,bot,cnt);}
function dnsection(anc){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var i=oTr.rowIndex;var top=i+1;var cnt=getSectionSize(anc,i,-1);var bot=i+cnt+1;swapsection(top,bot,cnt);}
function swapsection(top,bot,cnt){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var tmp;for(i=0;i<cnt;i++){oTopTr=oTable.rows.item(top+i);oBotTr=oTable.rows.item(bot+i);oTopInput=oTopTr.getElementsByTagName("input")[0];if(oTopInput){oBotInput=oBotTr.getElementsByTagName("input")[0];if(oBotInput){tmp="";tmp=oTopInput.value;oTopInput.value=oBotInput.value;oBotInput.value=tmp;}}
oTopInput=oTopTr.getElementsByTagName("textarea")[0];if(oTopInput){oBotInput=oBotTr.getElementsByTagName("textarea")[0];if(oBotInput){tmp="";tmp=oTopInput.value;oTopInput.value=oBotInput.value;oBotInput.value=tmp;}}}}
function clrsection(anc){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var i=oTr.rowIndex+1;var tmpTr=oTable.rows.item(i);while(tmpTr){oTestA=tmpTr.getElementsByTagName("a")[0];if(oTestA){if(oTestA.name==anc){break;}}
oTopInput=tmpTr.getElementsByTagName("input")[0];if(oTopInput){oTopInput.value="";}
oTopInput=tmpTr.getElementsByTagName("textarea")[0];if(oTopInput){oTopInput.value="";}
i++;tmpTr=null;tmpTr=oTable.rows.item(i);}}
function clrsectionend($anc){var oTr=getParent(event.srcElement,'tr');var oTable=getParent(oTr,'table');var i=oTr.rowIndex;var bot=i+1;i--;var cnt=getSectionSizeUp(anc,i);var i=oTr.rowIndex+1;var tmpTr=oTable.rows.item(i);while(tmpTr){oTestA=tmpTr.getElementsByTagName("a")[0];if(oTestA){if(oTestA.name==$anc){break;}}
oTopInput=tmpTr.getElementsByTagName("input")[0];if(oTopInput){oTopInput.value="";}
oTopInput=tmpTr.getElementsByTagName("textarea")[0];if(oTopInput){oTopInput.value="";}
i++;tmpTr=null;tmpTr=oTable.rows.item(i);}}
function res_dnsection(t){var oTr=getParent(t,'tr');var iRowIdx=oTr.rowIndex;oTable=getParent(oTr,'table');if(iRowIdx<(oTable.rows.length-1)){aRow=iRowIdx;bRow=iRowIdx+1;_switchQab(oTable,aRow,bRow);}}
function getParent(el,pTagName){if(el===null){return null;}else if(el.nodeType==1&&el.tagName.toLowerCase()===pTagName.toLowerCase()){return el;}else{return getParent(el.parentNode,pTagName);}}
function getPreviousSibling(el,pTagName){if(el===null){return null;}else{el=el.previousSibling;if(el.nodeType==1&&el.tagName.toLowerCase()===pTagName.toLowerCase()){return el;}else{return getPreviousSibling(el,pTagName);}}}
function getElement(id){oObj=document.getElementById(id);if(oObj&&oObj.id==id){return oObj;}
if(document.all){var opts=document.all(id);if(opts){for(var i=0;i<opts.length;i++){if(opts[i].id==id){return opts[i];}}}}
return null;}
function getChildbyId(el,pId){if(el==null){return null;}else{tmpnode=el.firstChild;while(tmpnode!=null){if(tmpnode.id==pId){return(tmpnode);}
tmpnode=tmpnode.nextSibling;}
return(null);}}
function getSessionId(){var name="SOCIOUSSID";if(8000==document.location.port){name="SOCIOUSSIDHEAD";}
return(getCookie(name));}
function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0){return null;}}else{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1){end=dc.length;}
return unescape(dc.substring(begin+prefix.length,end));}
function expand(oItem,id,cnt){for(var i=1;i<=cnt;i++){var oTr=document.getElementById(id+i);if(oTr){if(document.all){oTr.style.display="block";}else{oTr.style.display="table-row";}}}
oItem.innerHTML="collapse";oItem.onclick=function(){collapse(this,id,cnt);};}
function expandcontent(oItem,pre,comp,id){var divid=pre+"_"+comp+"_"+id;oItem.firstChild.src="images/buttons/btn_minus.gif";oItem.onclick=function(){collapsecontent(this,pre,comp,id);};var oContent=document.getElementById(divid);if(oContent){oContent.innerHTML="Retrieving content...";oContent.style.display="block";var sSid=getSessionId();var msg=new XMLRPCMessage();msg.setMethod("comm_viewitems");msg.addParameter(escape(sSid));msg.addParameter(escape(comp));msg.addParameter(escape(id));msg.addParameter(escape(divid));output=escape(msg.xml());jsrsExecute("rpc.php",putInnerHTML,"doRPC",output);return(true);}}
function collapseDiv(oItem,ht){var oDiv=getParent(oItem,'div');var cDiv=getPreviousSibling(oDiv,'div');cDiv.style.height=ht;oItem.firstChild.src="images/buttons/btn_plus.gif";oItem.onclick=function(){expandDiv(this);};}
function expandDiv(oItem){var oDiv=getParent(oItem,'div');var cDiv=getPreviousSibling(oDiv,'div');var ht=cDiv.style.height;cDiv.style.height='auto';oItem.firstChild.src="images/buttons/btn_minus.gif";oItem.onclick=function(){collapseDiv(this,ht);};}
function putInnerHTML(optshtml){xmldoc=new rpcXMLDocument(optshtml);var oItem=document.getElementById(xmldoc.params[0]);if(oItem){oItem.innerHTML=unescape(xmldoc.params[1]);}}
function collapsecontent(oItem,pre,comp,id){oItem.firstChild.src="images/buttons/btn_plus.gif";oItem.onclick=function(){expandcontent(this,pre,comp,id);};var oContent=document.getElementById(pre+"_"+comp+"_"+id);if(oContent){oContent.style.display="none";oContent.innerHTML="&nbsp;";}}
function expandimg(oItem,id,cnt){for(var i=1;i<=cnt;i++){var oTable=document.getElementById(id+i);var oTbody=oTable.tBodies[0];if(oTbody){if(document.all!=null){oTbody.style.display="block";}else{oTbody.style.display="table-row-group";}}}
oItem.firstChild.src="images/buttons/btn_minus.gif";oItem.onclick=function(){collapseimg(this,id,cnt);};}
function collapse(oItem,id,cnt){for(var i=1;i<=cnt;i++){var oTr=document.getElementById(id+i);if(oTr){oTr.style.display="none";}}
oItem.innerHTML="expand";oItem.onclick=function(){expand(this,id,cnt);};}
function collapseimg(oItem,id,cnt){for(var i=1;i<=cnt;i++){var oTable=document.getElementById(id+i);var oTbody=oTable.tBodies[0];if(oTbody){oTbody.style.display="none";}}
oItem.firstChild.src="images/buttons/btn_plus.gif";oItem.onclick=function(){expandimg(this,id,cnt);};}
var timerid;function fnHide(oToHide,timeout){timerid=window.setTimeout("fnHide2('"+oToHide+"')",timeout);}
function fnHide2(sID){var o=document.getElementById(sID);o.style.display="none";}
function fnClearTO(){window.clearTimeout(timerid);}
function getElementsWithClass(parent,tagName,klass){var returnedCollection=[];var exp=getTokenizedExp(klass);var collection=(tagName=="*"&&parent.all)?parent.all:parent.getElementsByTagName(tagName);for(var i=0,counter=0;i<collection.length;i++){if(exp.test(collection[i].className)){returnedCollection[counter++]=collection[i];}}
return returnedCollection;}
TokenizedExps={};function getTokenizedExp(token){var x=TokenizedExps[token];if(!x){x=TokenizedExps[token]=new RegExp("(^|\\s)"+token+"($|\\s)");}
return x;}
function insItem(baseid,repl,divname,cloneadd){var pattern=/XXXX/g;divname=divname.replace(pattern,repl);var iLast=document.getElementById(divname).childNodes.length;if(divname!="resources"){iLast=iLast-1;}
var iNext=iLast+1;var tClone=baseid+cloneadd;var tNext=baseid+repl+"_"+iNext;var oFileInput=document.getElementById(tClone);var oClone=oFileInput.cloneNode(true);var tmphtml=oClone.innerHTML;tmphtml=tmphtml.replace(pattern,repl);var pattern=/YYYYY/g;tmphtml=tmphtml.replace(pattern,iNext);divname=divname.replace(pattern,iNext);var pattern=/ZZZZ/g;tmphtml=tmphtml.replace(pattern,'XXXX');oClone.innerHTML=tmphtml;oClone.id=tNext;oClone.name=tNext;oClone.style.display="block";var oDiv=document.getElementById(divname);oDiv.appendChild(oClone);}
function replText(sTagName,sNeedle,sNew){var tags=document.getElementsByTagName(sTagName);var end=tags.length;for(i=0;i<(end);i++){var tmphtml=tags[i].innerHTML;if(tmphtml.search(sNeedle)>-1){tmphtml=tmphtml.replace(sNeedle,sNew);tags[i].innerHTML=tmphtml;}}}
function getNumFromParent(odivname,tmpobj){tmpouter=String(odivname);tmplen=tmpouter.length;i=0;notfound=true;while(i<50&&notfound){foundobj=tmpobj;tmpobj=tmpobj.parentNode;if(foundobj.id){tmpname=foundobj.id;if(tmpname.substr(0,tmplen)==odivname){notfound=false;}}
i++;}
tmpstr=foundobj.id.substr(tmplen);return parseInt(tmpstr,10);}
function chkExp(thisbtn){odivname="resource_";var resnum=getNumFromParent(odivname,thisbtn);window.alert(document.getElementById(odivname+resnum).innerHTML);}
function chkRes(thisbtn){odivname="totres_";var resnum=getNumFromParent(odivname,thisbtn);window.alert(document.getElementById(odivname+resnum).innerHTML);}
function delExp(thisbtn){if(!thisbtn){return;}
subrepl=new Array('ext','iext');divname="res_";odivname="resource_";var resnum=getNumFromParent(odivname,thisbtn);subdivname=divname+resnum+"_";expnum=getNumFromParent(subdivname,thisbtn);thisdivname=subdivname+expnum;var maxnum=document.getElementById(odivname+resnum).childNodes.length;var oparent=document.getElementById(thisdivname);if(expnum<maxnum){delSubDivs(oparent);mvDivs(expnum,subdivname,resnum,oparent,subrepl);nextnum=expnum+1;nextname=subdivname+nextnum;var nextobj=document.getElementById(nextname);delExp(nextobj);}else{oparent.parentNode.removeChild(oparent);if(maxnum==1){insItem('res_',resnum,'resource_XXXX','XXXX');}}}
function delRes(thisbtn){if(!thisbtn){return;}
divname="resource_";odivname="resources";subrepl=new Array('ext','iext');var resnum=getNumFromParent("totres_",thisbtn);thisdivname=divname+resnum;var maxnum=document.getElementById(odivname).childNodes.length;if(resnum<maxnum){var oparent=document.getElementById(thisdivname);oparent=document.getElementById(divname+resnum);delSubDivs(oparent);mvSubDivs(1,"dates_",resnum,oparent,new Array('startdate','enddate'));mvSubDivs(1,"res_",resnum,oparent,subrepl);nextnum=resnum+1;if(document.getElementById('resid'+nextnum)){ohdn=document.createElement("INPUT");ohdn.setAttribute('type','hidden');ohdn.setAttribute('name','resid'+resnum);ohdn.setAttribute('id','resid'+resnum);ohdn.setAttribute('value',document.getElementById('resid'+nextnum).value);oparent.appendChild(ohdn);}
nextname=divname+nextnum;var nextobj=document.getElementById(nextname);delRes(nextobj);}else{var oparent=document.getElementById("totres_"+resnum);oparent.parentNode.removeChild(oparent);if(maxnum==1){insRes();}}}
function insRes(){insItem('totres','','resources','');var tmpi=document.getElementById('resources').childNodes.length;insItem('res_',tmpi,'resource_XXXX','XXXX');}
function mvSubDivs(start,eachdiv,itemnum,oparent,subrepl){var i=start;var fromnum=itemnum+1;var tmpFullFromDivName=eachdiv+fromnum+'_'+i;var tmpFullToDivName=eachdiv+itemnum+'_'+i;var curDiv=document.getElementById(tmpFullFromDivName);var text=null;var pattern=null;var tmpname;var tmpobj;while(curDiv){for(x in subrepl){tmpname=subrepl[x]+fromnum+"_"+i;tmpobj=document.getElementById(tmpname);tmpobj.name=subrepl[x]+itemnum+"_"+i;tmpobj.id=subrepl[x]+itemnum+"_"+i;if(subrepl[x]=='ext'){tmpobj.setAttribute('onchange',"(function(tgt){var rt={};rt=$.parseJSON(unescape('%7B%22select%22%3A%22iext"+itemnum+"_"+i+"%22%7D'));rt.ext=$('#"+tmpobj.id+"').val();soc.ajax('Resdb','Utility','extRes',rt);})(this);return false;");}}
ofromparent=curDiv.parentNode;oFromObj=ofromparent.removeChild(curDiv);oNode=oparent.appendChild(oFromObj);oNode.name=tmpFullToDivName;oNode.id=tmpFullToDivName;i++;tmpFullFromDivName=eachdiv+fromnum+'_'+i;tmpFullToDivName=eachdiv+itemnum+'_'+i;curDiv=document.getElementById(tmpFullFromDivName);}}
function mvDivs(start,tmpDivName,divnum,oparent,subrepl){var i=start;var i1=i+1;var tmpFullFromDivName=tmpDivName+i1;var tmpFullToDivName=tmpDivName+i;var curDiv=document.getElementById(tmpFullFromDivName);var text=null;var pattern=null;if(curDiv){for(x in subrepl){tmpobj=document.getElementById(subrepl[x]+divnum+"_"+i1);tmpobj.name=subrepl[x]+divnum+"_"+i;tmpobj.id=subrepl[x]+divnum+"_"+i;if(subrepl[x]=='ext'){tmpobj.setAttribute('onchange',"(function(tgt){var rt={};rt=$.parseJSON(unescape('%7B%22select%22%3A%22iext"+divnum+"_"+i+"%22%7D'));rt.ext=$('#"+tmpobj.id+"').val();soc.ajax('Resdb','Utility','extRes',rt);})(this);return false;");}}
ofromparent=curDiv.parentNode;oFromObj=ofromparent.removeChild(curDiv);oNode=oparent.appendChild(oFromObj);oNode.name=tmpFullToDivName;oNode.id=tmpFullToDivName;}}
function delSubDivs(oparent){ochildnodes=oparent.childNodes;if(ochildnodes){var len=ochildnodes.length;for(i=0;i<len;i++){oparent.removeChild(ochildnodes[0]);}}}
function showthisrows(oItem,numrows,offset){var oTable=getParent(oItem,'table');var tBody=oTable.tBodies[0];var trs=tBody.rows;var oTr=getParent(oItem,'tr');var start=oTr.rowIndex+offset;var end=start+numrows;if(end>trs.length){end=trs.length;}
for(var i=start;i<(end);i++){trs[i].style.display="";}
oItem.innerHTML="Collapse";oItem.onclick=function(){hidethisrows(this,numrows,offset);return false;};}
function hidethisrows(oItem,numrows,offset,sElem){var oElem;if(sElem){oElem=document.getElementById(sElem);}else{oElem=oItem;}
var oTable=getParent(oElem,'table');var tBody=oTable.tBodies[0];var trs=tBody.rows;var oTr=getParent(oElem,'tr');var start=oTr.rowIndex+offset;var end=start+numrows;if(end>trs.length){end=trs.length;}
for(var i=start;i<(end);i++){trs[i].style.display="none";}
if(sElem){var oA=getParent(oElem,'a');oA.innerHTML="&nbsp;Expand&nbsp;&nbsp;";}else{oItem.innerHTML="&nbsp;Expand&nbsp;&nbsp;";oItem.onclick=function(){showthisrows(this,numrows,offset);return false;};}}
function cbReqd(oItem,vals){var valarr=vals.split("^");for(i=0;i<(valarr.length);i++){var tmpvalarr=valarr[i].split("|");var tmpobj=document.getElementById(tmpvalarr[0]);if(tmpobj){if(oItem.checked==true){tmpobj.title=tmpvalarr[1];}else{tmpobj.title="";}}}}
function setText(id,val){var tmpobj=document.getElementById(id);if(tmpobj){tmpobj.value=val;}}
function setInnerHTML(id,val){var tmpobj=document.getElementById(id);if(tmpobj){tmpobj.innerHTML=val;}}
function setDisplay(id,val){var tmpobj=document.getElementById(id);if(tmpobj){tmpobj.style.display=val;}}
delay=100;imgNumber=0;oldImgNumber=0;totalimgNumber=4;function Switch(){var oldimg='upanim'+imgNumber;var oldobj=document.getElementById(oldimg);if(oldobj){oldobj.style.display="none";}
imgNumber++;if(imgNumber>totalimgNumber){imgNumber=1;}
var img='upanim'+(imgNumber);var tmpobj=document.getElementById(img);if(tmpobj){tmpobj.style.display="inline";}}
function animate(){Switch();setTimeout("animate()",delay);}
function show_hide_action(name){if(document.getElementById(name).style.display=="none"){document.getElementById(name).style.visible="visible";document.getElementById(name).style.display="block";document.getElementById('company'+name).style.height="98%";}
else{document.getElementById(name).style.visible="hidden";document.getElementById(name).style.display="none";document.getElementById('company'+name).style.height="225px";}}
function chkTA(obj,chars){if(obj.value.length>chars){obj.value=obj.value.substring(0,chars);}}
function setTgtFromFormat(of){var ofval=getSelValue(of);switch(ofval){case'pdf':tgt="_self";break;default:tgt="_blank";break;}
of.form.target=tgt;}
function addLoadEvent(func){var oldonload=window.onload;window.onload=function(){if(oldonload){oldonload();}
func();};}
function setTableBody(xml){xmldoc=new rpcXMLDocument(xml);id=xmldoc.params[0];obj=null;if(xmldoc.params[1]){obj=eval("("+unescape(xmldoc.params[1])+")");}
replTableBody(id,obj);}
function replTableBody(id,obj){otext=document.getElementById(id);if(otext){var oTable=document.getElementById(id);if(oTable.tagName.toLowerCase()=='table'){oTbody=oTable.tBodies[0];}else{oTable=getParent(otext,'table');oTbody=getParent(otext,'tbody');}
nTbody=document.createElement('tbody');nTbody.setAttribute('id',id);if(obj.results==0){nTr=document.createElement('tr');nTd=document.createElement('td');nTd.style.backgroundColor="#FFFFFF";nTd.className="so_normal border-solid";nTd.colSpan=$(oTable).find("thead td").length;if(nTd.colSpan==0){nTd.colSpan=6;}
nTd.setAttribute('align',"left");nTd.innerHTML=obj.message;nTr.appendChild(nTd);nTbody.appendChild(nTr);}else{list=obj.list;for(o in obj){if(o=='list'){continue;}
if(o=='callback'){continue;}
var nTr=document.createElement('tr');var c=0;for(l in list){if(c>0||(obj[o][list[l]]!=undefined)){if(obj[o][list[l]]==undefined){obj[o][list[l]]='';}
nTd=document.createElement('td');nTd.style.backgroundColor="#FFFFFF";if(c==0){nTd.className="so_normal border-solid";nTd.setAttribute('align','left');}else{nTd.className="so_small border-solid";nTd.setAttribute('align','center');}
nTd.innerHTML=obj[o][list[l]];nTr.appendChild(nTd);c++;}}
if(nTr.childNodes.length==list.length){nTbody.appendChild(nTr);}}}
oTable.replaceChild(nTbody,oTbody);$(oTable).trigger("update");if(obj.callback){eval(obj.callback);}}}
function updateTableBody(bodyId,rpc,params){var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod(rpc);msg.addParameter(escape(sSid));msg.addParameter(escape(toJSON(params)));msg.addParameter(bodyId);output=escape(msg.xml());jsrsExecute("rpc.php",setTableBody,"doRPC",output);return(true);}
function updateDiv(divId,rpc,returnFuntion,params){var div=document.getElementById(divId);if(div){var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod(rpc);msg.addParameter(escape(sSid));msg.addParameter(escape(toJSON(params)));msg.addParameter(divId);output=escape(msg.xml());jsrsExecute("rpc.php",returnFuntion,"doRPC",output);}}
function deleteDiv(xml){xmldoc=new rpcXMLDocument(xml);obj=eval("("+unescape(xmldoc.params[2])+")");if(xmldoc.params[0]){id=xmldoc.params[1];var div=document.getElementById(id);div.parentNode.removeChild(div);if(obj.message!=undefined){alert(obj.message);}
return true;}
if(obj.message!=undefined){alert(obj.message);}
return false;}
function updateTableRow(trId,rpc,returnFuntion,params){row=document.getElementById(trId);if(row){var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod(rpc);msg.addParameter(escape(sSid));msg.addParameter(escape(toJSON(params)));msg.addParameter(trId);output=escape(msg.xml());jsrsExecute("rpc.php",returnFuntion,"doRPC",output);}}
function deleteTableRow(xml){xmldoc=new rpcXMLDocument(xml);obj=eval("("+unescape(xmldoc.params[2])+")");if(xmldoc.params[0]){id=xmldoc.params[1];trObj=document.getElementById(id);var parent=trObj.parentNode;parent.removeChild(trObj);if(parent.childNodes.length==0){var nTr=document.createElement('tr');var nTd=document.createElement('td');nTd.innerHTML='No items available.';nTd.className="so_small";nTd.style.backgroundColor="#FFFFFF";nTd.style.border="1px solid #ccc";if(obj.span!=undefined){nTd.colSpan=obj.span;}
nTr.appendChild(nTd);parent.appendChild(nTr);}
if(obj.message!=undefined){alert(obj.message);}
return true;}
if(obj.message!=undefined){alert(obj.message);}
return false;}
function toJSON(obj){if(typeof obj=='undefined'){return'undefined';}else if(obj===null){return'null';}
var stringescape={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};var json=null,i,l,v,a=[];switch(obj.constructor){case Array:l=obj.length;for(i=0;i<l;i++){if((v=toJSON(obj[i]))!==null){a.push(v);}}
json='['+a.join(',')+']';break;case Object:for(i in obj){if(obj.hasOwnProperty(i)&&(v=toJSON(obj[i]))!==null){a.push(toJSON(String(i))+':'+v);}}
json='{'+a.join(',')+'}';break;case String:json='"'+obj.replace(/[\x00-\x1f\\"]/g,function($0){var c;if((c=stringescape[$0])){return c;}
c=$0.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';break;case Number:json=isFinite(obj)?String(obj):'null';break;case Boolean:json=String(obj);break;}
return json;}
function transferDataUU(fieldname,uniqueid,filename,filenum,optids,optvals){setText(fieldname,uniqueid);setDisplay(fieldname+'_label','block');setInnerHTML(fieldname+'_name',filename);var selname="dlopts"+filenum;var obj=document.getElementById(selname);if(obj){var selval=getSelValue(obj);fillSelObjectSeld(obj,optvals,optids,selval);}
$('#'+fieldname+'_delete').show();if($('#'+fieldname+'_del_file').length){$('.'+fieldname+'filedisp').next().next().html('');$('#'+fieldname+'_del_file').remove();}}
function resetIFrame(field,filenum,fieldname){var fl=document.getElementById(field+'loader'+filenum);if(fl){fl.style.display='none';fl.src="about:blank";}
document.getElementById(field+filenum+'_btn').style.visibility='visible';statSubmit(document.getElementById(fieldname).form.getAttribute('id'),false);if(document.getElementById(field+filenum+'_name').innerHTML=='&nbsp;'){if(document.getElementById(field+filenum+'_btn').innerHTML=='Delete'){var oDiv=document.getElementById(field+'wrapper'+filenum);oDiv.parentNode.removeChild(oDiv);}}
try{$(fl).closest('.jqmWindow').jqmResize();}catch(e){}}
function showIFrame(field,num,size){var framename=field+'loader'+num;var frameobj=document.getElementById(framename);if(frameobj.nodeName=='IFRAME'){var size=document.getElementById(field+'MAX_FILE_SIZE').value;var width=document.getElementById(field+'MAX_WIDTH').value;var height=document.getElementById(field+'MAX_HEIGHT').value;frameobj.src='uu/uu_file_upload.php?filenum='+num+'&maxfilesize='+size+'&field='+field+'&h='+height+'&w='+width+'&version=2';}else{$(frameobj).empty();var finescript=decodeURIComponent($(frameobj).attr('data-fineuploader'));finescript=finescript.replace(/%%##%%/g,""+num+"");finescript=finescript.replace(/%25%25%23%23%25%25/g,""+num+"");var s=document.createElement("script");s.type="text/javascript";s.innerHTML=finescript;document.body.appendChild(s);}
frameobj.style.display='block';try{$(frameobj).closest('.jqmWindow').jqmResize();}catch(e){}}
function statSubmit(formid,disabled){var theform=document.getElementById(formid);for(i=0;i<theform.length;i++){var tempobj=theform.elements[i];if(tempobj.type&&tempobj.type.toLowerCase()=='submit'){tempobj.disabled=disabled;}}}
function setKeepAlive(){setTimeout("doKeepAlive()",300000);}
function doKeepAlive(){var msg=new XMLRPCMessage();var sSid=getSessionId();msg.setMethod('ajax_ka');msg.addParameter(escape(sSid));output=escape(msg.xml());jsrsExecute("rpc.php",setKeepAlive,"doRPC",output);}
function copyTinymceText(from,to,len){var t=$.trim($('<div>'+$($('#'+from).val().replace(/<\/p>/g,"</p>\n")).text()+'</div>').text());if(len){t=t.substr(0,len);}
$('#'+to).val(t);}
function getImgHtml(src,imgh,imgw,title,alt,height,width,style){if(src.indexOf('.tn.')<0){if(width<imgw||height<imgh){var wfactor=width/imgw;var hfactor=height/imgh;var factor='height="'+height+'px"';if(wfactor<hfactor){factor='width="'+width+'px"';style+='margin-top:'+((height-Math.ceil(wfactor*imgh))/2)+'px;';}}else{var hm=Math.floor((height-imgh)/2);var wm=Math.floor((width-imgw)/2);factor='height="'+imgh+'px" width="'+imgw+'px"';style+='margin:'+hm+'px '+wm+'px;';}}
return'<img '+factor+' title="'+title+'" alt="'+alt+'" src="'+src+'" onclick="window.open(\''+src.replace('.tn.','.')+'\');return false;" style="'+style+'" />';}
function popDivLb(w,title,cid,wid){if(!wid){wid="popclick";}
if(!soc.initLb('#'+wid,function(){popDivLb(w,title,cid,wid);})){return;}
$('#'+wid+'.jqmWindow').width(w).css('margin-left',-1*(parseInt(w,10)/2));$('#'+wid+'.jqmWindow .h1 p').html(title);$('#'+wid+' .jqmMain div').html('<br/>').width('').html("<div style=\"overflow-y:auto;\">"+$('#'+cid).html()+"</div>");$('#'+wid).jqm().jqmShow();}
var soc=(function($){var s={online:null,onlineData:{},mce:null,isMobile:/(iPad|iPhone|Android)/.test(window.navigator.userAgent),lightboxClass:'.jqmWindow',adConfig:[],logged_in:false};s.ajax=function(mo,op,me,params,callback){var params=params||{},cb=callback||s.ajOp,url=s.ajaxurl(mo,op,me);if(!url){return;}
$.post(url,{params:params},cb,'json');};s.ajaxCustom=function(mo,op,me,params,ajaxSettings){var params=params||{},url=s.ajaxurl(mo,op,me);if(!url){return;}
var defaults={type:'POST',dataType:'json',data:{params:params},url:url};$.ajax($.extend({},defaults,ajaxSettings));}
s.ajaxurl=function(mo,op,me){if(!mo||!op||!me){if(console){console.error('Invalid Ajax Url');}
return;}
var url='x/'+mo+'/'+op+'/'+me;if(document.getElementsByTagName('base')[0].href.indexOf(location.protocol+"//"+location.hostname)!==0){url=location.protocol+"//"+location.hostname+"/"+url;}
return url;};s.ajaxhref=function(href){var parts=href.split('/'),next=parts.shift();while(parts.length>0&&next!="x"){next=parts.shift();}
if(parts.length<3){return;}
var mo=parts.shift(),op=parts.shift(),me=parts.shift(),params={};if(/\?/.test(me)){params=soc.deparam(me.split('?')[1]);me=me.split('?')[0];}
soc.ajax(mo,op,me,params);};s.jsonp=function(url,params,callback){var params=params||{},cb=callback||soc.ajOp;$.ajax({url:url,data:{params:params},dataType:'jsonp',success:cb});};s.ajOp=function(obj,status,xhr){$.each(obj,function(){var t=this,ele;if(t.divid){ele=$('#'+t.divid);if(ele.length===0){ele=$('.'+t.divid);}}
switch(t.op){case'a':ele.append(t.divhtml);break;case'd':ele.remove();break;case'j':(window.execScript||function(data){window["eval"].call(window,data);})(t.divjs);break;case'lb':var pass=$.extend({id:'',refrpc:'',html:'',title:'',width:'400px',refid2:'',refid3:'',postcb:'',pc:''},t);fillLbCommon(pass.id,pass.refrpc,pass.html,pass.title,pass.width,pass.refid2,pass.refid3,pass.postcb,pass.pc);break;case'flb':var pass=$.extend({id:'',refrpc:'',html:'',title:'',width:'400px',refid2:'',refid3:'',postcb:'',pc:''},t);fillLbCommon(pass.id,pass.refrpc,pass.html,pass.title,pass.width,pass.refid2,pass.refid3,pass.postcb,pass.pc,false);break;case'p':ele.prepend(t.divhtml);break;case'r':ele.replaceWith(t.divhtml);break;case's':var s=$('#'+t.selid),addOp=function(text,value,selected,prepend){var o=new Option(text,value);o.innerHTML=text;o.selected=selected;prepend?s.prepend(o):s.append(o);};s.children().remove();if(t.sort){var sort=t.sort.split('|');for(var i=0;i<sort.length;i++){addOp(t.selops[sort[i]],sort[i],(t.selected==sort[i]));}}else{$.each(t.selops,function(va,tx){addOp(tx,va,(t.selected==va));});}
if(t.empty){addOp(t.empty,"",t.selected=="",true);}
s.attr('disabled',false);if(t.tc){s.trigger('change');}
break;case'u':ele.html(t.divhtml);break;case'v':ele.val(t.divhtml);break;case'reload':soc.refresh();break;case'redirect':soc.redirectAbsolute(t.href);break;}
if(t.focus){window.location.replace(window.location.href.split('#')[0]+'#'+t.focus);}});};s.act=function(e){var o=$(e);var a=o.data('act');switch(a){case'up':var d=o.closest('div');d.insertBefore(d.prev());break;case'delete':o.closest('div').remove();break;}};s.de={dsa:{add:function(mainId){var base,ida,idb,val;base=mainId.substring(0,mainId.lastIndexOf('_'));ida=$('#'+mainId+'0');idb=$('#'+mainId+'1');val=ida.val();if(idb.val()!==''&&idb.val()!=='None'){val+='-'+idb.val();}
if($('#'+mainId+'_'+val).length==0){var txt,itemid;var txtb=$('option:selected',idb).text();txt=$('option:selected',ida).text();if(txtb!==''&&txtb!=='None'){txt+=' - '+txtb;}
itemid=base+'['+val+']';$('#'+mainId+'wrap').append('<div id="'+mainId+'_'+val+'">'
+'<a class="btn btn-default" href="javascript:void(0);" onclick="$(this).parent(\'div\').remove(); return false;">Delete</a>&nbsp;&nbsp;'
+txt+'<input type="hidden" value="'+txt+'" id="'+itemid+'" name="'+itemid+'" /></div>').closest('.jqmWindow').jqmResize();}}},txt:{add:function(addid,val){var title=(!val)?'':' title="'+val+'"';$('#'+addid+'wrap').append('<div>'
+'<a data-act="up" onclick="soc.act(this); return false;" href="javascript:void(0);"><img title="Move Up" alt="Move Up" src="images/buttons/16moveup.gif"></a>'
+'<a data-act="delete" onclick="soc.act(this); return false;" href="javascript:void(0);"><img title="Delete " alt="Delete " src="images/buttons/16cancel.gif"></a>'
+'&nbsp;&nbsp;<input type="input" maxlength="100" size="40" value="" id="'+addid+'[]" name="'+addid+'[]"'+title+' />'
+'<input type="hidden" value="0" id="'+addid+'idx[]" name="'+addid+'idx[]" /></div>').find('input[type=input]').focus().closest('.jqmWindow').jqmResize();}}};s.toggleProgress=function(b){var c;if(b===undefined){c=($('html').css('cursor')=='progress')?'':'progress';}else{c=(b===false)?'':'progress';}
$('html,input,a,select').css('cursor',c);};s.datasum=function(id,text){var o=$('#'+id);var sum=0;if(o.data('sum')){var arr=$.parseJSON(unescape(o.data('sum')));$.each(arr,function(i,v){n=(text)?$('#'+v).text():$('#'+v).val();sum+=parseInt(n,10);});o.text(sum);if(o.data('tot')){this.datasum(o.data('tot'),true);}}};s.ads=function(ads){if(ads.length===0){return;}
var ival=[],count=[],runAd=function(type,max,time){return setInterval(function(){count[type]++<max?soc.ajax('ad','ads','adChange',{'adType':type}):clearInterval(ival[type]);},time);};for(var i=0;i<ads.length;i++){var element=$('#'+ads[i].ele);if(element.length===0){continue;}
count[ads[i].type]=0;ival[ads[i].type]=runAd(ads[i].type,ads[i].max,ads[i].time);element.data('adid',ads[i].initId).click(function(e){var adid=$(e.currentTarget).data('adid');if(adid>0){soc.ajax('ad','ads','adClick',{'adId':adid});}});}};s.serializeJSON=function(formid){var json={};$.map($('#'+formid).serializeArray(),function(n,i){if(json[n['name']]){if(!json[n['name']].push){json[n['name']]=[json[n['name']]];}
json[n['name']].push(n['value']||'');}else{json[n['name']]=n['value']||'';}});return json;};s.initLb=function(lbid,cb,loadForm){if($('#popclick').length===0||(loadForm&&typeof $.fn.ajaxForm=="undefined")){$('<div class="jqmWindow jqDnR jqHandle" id="popclick">'
+'<div class="h1 jqDrag">'
+'<p>title</p>'
+'<a class="jqmClose">'
+'<img title="Close" src="images/close.jpg">'
+'</a>'
+'</div>'
+'<br class="clear">'
+'<div class="jqmMain cmshtml">'
+'<div>'
+'content<br />'
+'</div>'
+'</div>'
+'</div>').appendTo('body').jqDrag('.jqDrag');if(loadForm&&typeof $.fn.ajaxForm=="undefined"){$.getScript('js/jquery-form.js',function(){cb();});return false;}}
if($(lbid).length===0){$('#popclick').clone().removeClass('jqmID1').removeAttr('_jqm').attr('id',lbid.replace('#','')).find('.h1').children('p').empty().end().end().find('.jqmMain').find('div').empty().end().end().insertAfter('#popclick').jqDrag('.jqDrag');}
return true;};s.tooltip={timer:0,onShow:function(ct,c){var t=this;soc.tooltip.onHide.call(t,ct,c);$(this).bind('mouseleave.cluetip',function(){soc.tooltip.timer=setTimeout(function(){ct.trigger('mouseleave.cluetip');},750);});ct.bind('mouseenter.cluetip',function(){ct.unbind('mouseenter.cluetip');soc.tooltip.onHide.call(t,ct,c);});},onHide:function(ct,c){$(this).unbind('mouseleave.cluetip');ct.unbind('mouseenter.cluetip');clearTimeout(soc.tooltip.timer);}};s.widget={init:function(){var jsWidgets=$('.widget[data-js="1"]:not(.widget-init)');jsWidgets.addClass('widget-init');jsWidgets.filter('.widget-ajax').delegate('.widget-trigger',{change:soc.widget.changeHandler,click:soc.widget.clickHandler});jsWidgets.each(function(i,widget){var $widget=$(widget),w=$widget.data('widget');if(w&&soc.widget.widgetInit[w]){soc.widget.widgetInit[w].call($widget);}});},commonHandler:function(triggerer,wdata,e){var container=triggerer.closest('.widget'),data=container.data();if(!soc.widget.hold.call(container)){return;}
$.each(data,function(key,value){if(wdata[key]===undefined&&$.inArray(key,["fxqueue","events","handle"])===-1){wdata[key]=value;}});var widget=wdata.widget.split('_');wdata.target=container.attr('id');wdata.wmethod=e.type;wdata.triggerer=triggerer.attr('id');if(wdata.triggerer){container.data(wdata.triggerer,wdata[wdata.triggerer]);}
soc.ajax('widget',widget[1],'widgetBridge',wdata,function(data){soc.ajOp(data);soc.widget.release.call(container);});},changeHandler:function(e){var triggerer=$(this),id=triggerer.attr('id'),wdata={};wdata[id]=triggerer.val();soc.widget.commonHandler(triggerer,wdata,e);},clickHandler:function(e){if(e.currentTarget.nodeName!=="A"){return;}
var triggerer=$(this),wdata=triggerer.data();soc.widget.commonHandler(triggerer,wdata,e);},hold:function(){if(this.data('active')){return false;}else{this.data('active',true);var container=this;this.data('watchdog',setTimeout(function(){soc.widget.release.call(container);},10000));}
soc.toggleProgress(true);this.fadeTo('fast',.25);return true;},release:function(){soc.toggleProgress(false);this.fadeTo('slow',1);this.data('active',false);clearTimeout(this.data('watchdog'));this.removeData('watchdog');},equateHeights:function(container,itemSelector,recalculating){var items=$(itemSelector,container),heights=[],tallest=0,images=$('img',container),hasImages=images.length>0;if(hasImages){if(recalculating){container.recalculated++;if(container.recalculated!==container.recalculate){return;}
$('[data-equate-resize]',container).css('height','auto');}else{container.recalculate=images.length;container.recalculated=0;images.load(function(){soc.widget.equateHeights(container,itemSelector,true);});}}
items.each(function(i,item){heights[i]=parseInt($(item).innerHeight(),10);item.expandable=$('[data-equate-resize]',item);item.expandable.expandableHeight=parseInt(item.expandable.outerHeight(),10);});var allEqual=true;tallest=heights[0];for(var i=1;i<heights.length;i++){if(heights[i]!==heights[0]){allEqual=false;if(heights[i]>tallest){tallest=heights[i];}}}
if(allEqual){return;}
items.each(function(i,item){item.expandable.height(tallest-(parseInt($(item).innerHeight(),10)-item.expandable.expandableHeight));});},scrollToElement:function(container,scrollToSelector){var item=$(scrollToSelector,container);if(item.length){soc.scrollTo(item.offset().top);}},widgetInit:{widget_bl_articles:function(){soc.widget.equateHeights(this,'.article');},widget_do_hottestfiles:function(){soc.widget.equateHeights(this,'.file-entry-item');},widget_co_hottestfiles:function(){soc.widget.widgetInit.widget_do_hottestfiles.call(this);},widget_co_blocks:function(){var faid=this.data('faid');if(faid){soc.widget.scrollToElement(this,'.comm-blocks-results');}},widget_me_gallery:function(){var widget=this;widget.on('click','.s-me-gallery-controls a[data-control="next"]',showNext).on('click','.s-me-gallery-controls a[data-control="prev"]',showPrevious).on('click','a.s-me-gallery-link',populateImageModal).on('click','.gallery-image-controls a[data-control="next"]',changeModalImageNext).on('click','.gallery-image-controls a[data-control="prev"]',changeModalImagePrevious);$('.modal',widget).on('hidden.bs.modal',function(){$('div.gallery-image-preview img',widget).removeAttr('src');});function showPrevious(){var curr_id=$('.s-me-gallery-page:visible',widget).data('page'),new_id=curr_id-1;if(curr_id==1){new_id=$('.s-me-gallery-page',widget).last().data('page');}
changePage(new_id);}
function showNext(){var curr_id=$('.s-me-gallery-page:visible',widget).data('page'),new_id=curr_id+1,last_id=$('.s-me-gallery-page',widget).last().data('page');if(curr_id==last_id){new_id=1;}
changePage(new_id);}
function changePage(new_id){$('.s-me-gallery-page',widget).hide();$('[data-page="'+new_id+'"]',widget).show();$('span.pagenum',widget).text(new_id);}
function populateImageModal(){var curr_link=$(this),img_data=curr_link.data(),mid=img_data.mid;if(!mid){return;}
var img_src='media/'+img_data['filename'];$('.gallery-image-preview img',widget).attr('src',img_src);$('.gallery-image-preview a',widget).attr('href',img_src);$('.image-preview-title',widget).text(img_data['title']);$('.image-preview-size',widget).text(img_data['size']);$('.image-preview-posted',widget).text(img_data['posted']);$('.gallery-image-controls .fullsize',widget).attr('href',img_src);var mid_prev=curr_link.prev('.s-me-gallery-link').data('mid'),changeToPrevious=false;if(mid_prev==null){changeToPrevious=true;mid_prev=curr_link.parent().prev().children('.s-me-gallery-link').last().data('mid');if(mid_prev==null){mid_prev=$('.s-me-gallery-page',widget).last().children('.s-me-gallery-link').last().data('mid');}}
$('a[data-control="prev"]',widget).data({prev:mid_prev,changePage:changeToPrevious});var mid_next=curr_link.next('.s-me-gallery-link').data('mid'),changeToNext=false;if(mid_next==null){changeToNext=true;mid_next=curr_link.parent().next().children('.s-me-gallery-link').first().data('mid');if(mid_next==null){mid_next=$('.s-me-gallery-page[data-page="1"] .s-me-gallery-link',widget).first().data('mid');}}
$('a[data-control="next"]',widget).data({next:mid_next,changePage:changeToNext});}
function changeModalImageNext(){var data=$(this).data(),next=data.next,changePage=data.changePage,link=$('.s-me-gallery-link[data-mid="'+next+'"]',widget);populateImageModal.call(link[0]);if(changePage){showNext();}}
function changeModalImagePrevious(){var data=$(this).data(),prev=data.prev,changePage=data.changePage,link=$('.s-me-gallery-link[data-mid="'+prev+'"]',widget);populateImageModal.call(link[0]);if(changePage){showPrevious();}}},widget_eventSession_details:function(){$(this).on("show.bs.collapse hide.bs.collapse",".s-e-assignment .panel-collapse",function(){$(this).siblings(".panel-heading").find(".accordion-toggle-icon").toggleClass("open");});}},widget_user_engagementLevel:{listen:function(id){$(".widget-control-stacking-percent").on("click",function(e){e.preventDefault();var chart=$('#'+id).highcharts();$.each(chart.series,function(index,series){series.update({"stacking":"percent"},false);});chart.yAxis[0].update({"title":{"text":"Percentage"},"labels":{"formatter":function(){return this.value+"%";}}});chart.redraw();});$(".widget-control-stacking-normal").on("click",function(e){e.preventDefault();var chart=$('#'+id).highcharts();$.each(chart.series,function(index,series){series.update({"stacking":"normal"},false);});chart.yAxis[0].update({"title":{"text":"Users"},"labels":{"formatter":null}});chart.redraw();});}},widget_cm_popup:{lightbox:function(uuid,body,size,title){if(title.length==0){title='&nbsp;';}
soc.lightbox('171_modal_ '+uuid,title,body,undefined,size);}}};s.injectDownload=function(url){var iframe=document.createElement('iframe');iframe.style.display="none";iframe.src=url+"&_injected=1";document.body.appendChild(iframe);setTimeout(function(){(function(ifr){document.body.removeChild(ifr);})(iframe);},15000);};s.valid=function(type,value){var t=$(this);switch(type){case'maxdate':var pieces=t.val().split('-');if(pieces.length==1){return true;}
var existing=new Date(pieces[2],pieces[0]-1,pieces[1]);var max=new Date(value*1000);var result=existing<=max;break;case'mindate':var pieces=t.val().split('-');if(pieces.length==1){return true;}
var existing=new Date(pieces[2],pieces[0]-1,pieces[1]);var min=new Date(value*1000);var result=existing>=min;break;}
return result;};s.scrollTo=function(position){$('html,body').animate({scrollTop:position},'slow');};s.initPage=function(){var body=$('body');body.delegate('a.s-ajax','click',function(e){e.preventDefault();var t=$(this),confirm=t.data('confirm');if(confirm&&!getConfirm(confirm)){return;}
soc.ajaxhref(t.attr('href'));});if(soc.isMobile){body.delegate('.hover > li','click mouseleave mouseenter',function(e){var t=$(e.currentTarget),doHover=$('> ul',t).length>0,clickProtect=doHover&&$('> a[href]',t).length>0,hoverClass='sfhover',cprClass='s-mobile-cpr';if(e.type=='mouseleave'){clearTimeout(t.data('s-sfhover-to'));t.removeClass(cprClass+" "+hoverClass);return;}
if(clickProtect){if(!t.hasClass(cprClass)&&e.type=="click"){e.preventDefault();setTimeout(function(){t.addClass(cprClass);},500);}}
if(doHover){t.addClass(hoverClass);t.data('s-sfhover-to',setTimeout(function(){t.removeClass(cprClass+" "+hoverClass);},5000));}});}else{body.addClass('s-no-mobile');}
if(soc.logged_in){$(".soc_addpage").click(function(e){e.preventDefault();soc.ajax("us","glob","addLink",{"clean":{"title":document.title,"loc":window.location.href}})});}
$("a[href^='#']").attr("href",function(i,href){return window.location.href.split('#')[0]+href;});soc.ads(soc.adConfig);soc.gui.init();if(soc.logged_in){soc.online=setInterval(soc.onlineCheck,300000);soc.ajaxSSO.init();}};s.deparam=function(params){var digitTest=/^\d+$/,keyBreaker=/([^\[\]]+)|(\[\])/g,plus=/\+/g,paramTest=/([^?#]*)(#.*)?$/;if(!params||!paramTest.test(params)){return{};}
var data={},pairs=params.split('&'),current;for(var i=0;i<pairs.length;i++){current=data;var pair=pairs[i].split('=');if(pair.length!=2){pair=[pair[0],pair.slice(1).join("=")]}
var key=decodeURIComponent(pair[0].replace(plus," ")),value=decodeURIComponent(pair[1].replace(plus," ")),parts=key.match(keyBreaker);for(var j=0;j<parts.length-1;j++){var part=parts[j];if(!current[part]){current[part]=digitTest.test(parts[j+1])||parts[j+1]=="[]"?[]:{}}
current=current[part];}
lastPart=parts[parts.length-1];if(lastPart=="[]"){current.push(value)}else{current[lastPart]=value;}}
return data;};s.onlineCheck=function(){var data=$.extend({},soc.onlineData);data.ka=data.ka||$('#_keepalive').length;soc.ajax('us','online','chkOnline',data);};s.plugins=s.plugins||{};s.createPlugin=function(name){$.fn[name]=function(options){var args=Array.prototype.slice.call(arguments,1);if(this.length){return this.each(function(){var instance=$.data(this,name)||$.data(this,name,new s.plugins[name](this,options)._init());if(typeof options==="string"){options=options.replace(/^_/,"");if(instance[options]){instance[options].apply(instance,args);}}});}
return this;};};s.setUnloadWarning=function(confirmationMessage){window.onbeforeunload=function(e){if(!e){window.event.returnValue=confirmationMessage;}
return confirmationMessage;}};s.clearUnloadWarning=function(){window.onbeforeunload=null;};s.gui={gui2015:false,init:function(){if($('[class*=s-gui]').length===0){return;}
soc.gui.sifter();},sifter:function(){var sifters=$('.s-gui-sifter');if(sifters.length===0){return;}
$('body').delegate('.s-gui-sifter-toggler','click',function(e){e.preventDefault();var $this=$(this),sifter=$this.data('sifter');if(!sifter){$.each($this.attr('class').replace('s-gui-sifter-toggler','').split(' '),function(i,v){if(/s-gui-sifter-id/.test(v)){sifter=v.replace('s-gui-sifter-id-','');$this.data('sifter',sifter);}});}
$('#'+sifter).slideToggle();});sifters.delegate('.s-gui-sifter-applier','click',function(e){e.preventDefault();var sifter=$(this).closest('.s-gui-sifter'),here=window.location.href.replace(getBase(),''),params=soc.gui.siftParams(here),parts=sifter.data('url').split(','),current=soc.deparam($('select,input[type=hidden]',sifter).serialize()),url={};for(var i=0;i<parts.length;i++){if(params[parts[i]]){url[parts[i]]=params[parts[i]];}}
for(var key in current){url[key]=current[key];}
var go=[];for(var key in url){if(url[key].length>0){go.push(key+'='+encodeURIComponent(url[key]).replace(/%20/g,'+'));}}
window.location.href=soc.gui.sifterRedirectUrl(here,go,getBase());sifter.slideToggle();});},siftParams:function(siftUrl){if(siftUrl.indexOf('=')!=-1){if(siftUrl.indexOf('?')!=-1){return soc.deparam(siftUrl.split('?').pop());}else{return soc.deparam(siftUrl.split('/').pop());}}
return[];},sifterRedirectUrl:function(siftUrl,params,base){if(siftUrl.indexOf('?')!=-1){siftUrl=siftUrl.split('?').shift()}
var outUrl=siftUrl.split('/');if(siftUrl.indexOf('=')!=-1||outUrl[outUrl.length-1]==''){outUrl.pop();}
return base+outUrl.join('/')+'/'+params.join('&');}};s.loader={stack:[],loaded:function(scripts){var loader=this;$.each(scripts,function(i,script){loader.done(script);});},load:function(script){if(!this.isLoaded(script)){this.fetch(script,$.proxy(function(){this.done(script);},this));}},normalize:function(script){return script.split('/').pop().split('.js')[0].split('.min')[0];},done:function(script){this.stack.push(this.normalize(script));},fetch:$.getScript,isLoaded:function(script){return $.inArray(this.normalize(script),this.stack)>=0},whenLoaded:function(script,loadFunction){if(this.isLoaded(script)){loadFunction();}else{setTimeout($.proxy(function(){this.whenLoaded(script,loadFunction);},this),250);}}};s.isInLightbox=function(element){return $(element).closest(soc.lightboxClass).length===1};s.closeLightBox=function(element){if(soc.isInLightbox(element)){$(element).closest(soc.lightboxClass).jqmHide();}};s.redirect=function(href){window.location.href=$('base')[0].href+href;};s.redirectAbsolute=function(href){window.location.href=href;};s.redirectReplace=function(href){window.location.replace($('base')[0].href+href);};s.refresh=function(){window.location.reload();};s.clickThru={domains:[],init:function(domains){this.domains=domains;$('body').delegate("a:not([rel=next])","click",$.proxy(this.clickHandler,this));},clickHandler:function(e){var my_href=$(e.target).attr("href");if(my_href.indexOf('http')==0||my_href.indexOf('//')==0){var loc=document.createElement('a');loc.href=my_href;var hostname=loc.hostname;var my_return=false;$.each(this.domains,function(idx,val){var regEx=new RegExp(val.replace('.','\\.')+'$');if(hostname.match(regEx)){my_return=true;}});if(!my_return){this.getLb(my_href);return false;}}
return true;},getLb:function(my_href){soc.ajax("Site","Link","clickthru",{"href":[my_href]});}};s.button=function(){return $('<a class="btn btn-default"></a>');};s.zoom_info_init=function(){$('.soc_zoom_fill').each(function(){var img=new Image();img.src=$(this).attr('src');var $el=$(img).appendTo('body');var orig_width=$el.width();var percent=Math.round($(this).width()/orig_width*100);$(img).remove();$(this).parent().find('.soc_zoom_details').html("Image displayed at "+percent+"% original size");});};s.ajaxSSO={init:function(){$('body').delegate("a.s-skin-login","click",this.clickHandler);},clickHandler:function(){if(this.protocol.indexOf('http')===0&&this.hostname!=window.location.hostname){soc.ajax("Site","Link","ssoRedirect",{"href":[this.href]});return false;}
return true;}};return s;})(jQuery);function primaryOnChange(oList,oList2){clearCombo(oList2);try{if(assocArray){var newvalue=oList.name+"="+oList.options[oList.selectedIndex].value;fillCombo(oList2,newvalue);}}catch(e){}}
function primaryOnChange2(oList,oList2,oList3){primaryOnChange(oList,oList2);var newvalue=oList.name+"="+oList.options[oList.selectedIndex].value;if(isFinite(assocArray2[newvalue])){var arrX=assocArray2[newvalue];switch(arrX){case 0:case 1:oList3.style.visibility="hidden";oList3.value=1;break;case 2:oList3.options(0).selected=true;oList3.style.visibility="visible";break;}}}
function clearCombo(oList){for(var i=oList.options.length-1;i>=0;i--){oList.options[i]=null;}
oList.selectedIndex=-1;}
function fillCombo(oList,vValue){if(vValue!=""&&assocArray[vValue]){var arrX=assocArray[vValue];for(var i=0;i<arrX.length;i=i+2){oList.options[oList.options.length]=new Option(arrX[i+1],arrX[i]);if(oList.multiple==true){oList.options[oList.options.length-1].selected=true}}}else oList.options[0]=new Option("<-Select","");if(!(oList.onchange==null)){oList.onchange();}}
function getFormItem(oForm,sId){if(oForm==null){return null}else{if(document.all){return(oForm.elements.item(sId));}else{elements=oForm.elements;for(i in elements){if(oForm.elements.item(i).id==sId){return(oForm.elements.item(i));}}
return(null);}}}
function checkall(sList,bValue){var oList=document.getElementsByName(sList)[0];for(var i=0;i<oList.options.length;i=i+1){oList.options[i].selected=bValue;}
return false;}
function checkpre(sList,sSel,bValue){var tVal=document.getElementsByName(sSel)[0].value;var oList=document.getElementsByName(sList)[0];var start=false;var end=false;for(var i=0;i<oList.options.length;i=i+1){if(!end&&oList.options[i].value.substr(0,2)==tVal){if(!start){start=true;}
oList.options[i].selected=bValue;}else{if(start){end=true;}}}
return false;}
function checkcert(sList,bValue){var oList=document.getElementsByName(sList)[0];for(var i=0;i<oList.options.length;i=i+1){var tmpstr=getInnerText(oList.options[i]);if(tmpstr){if(tmpstr.substr(tmpstr.length-3,3)=="(C)"){oList.options[i].selected=bValue;}else{oList.options[i].selected=!(bValue);}}}
return false;}
function addfile(basename,extra,filenum,multifile){if(!filenum){filenum="filenum";}
if(!multifile){multifile="multifile";}
var oNum=document.getElementById(filenum);var iLast=parseInt(oNum.value);var oDiv=document.getElementById(multifile);oNum.value=iLast+1;var big=false;if(document.getElementById(basename+'loader'+iLast)){big=true;var newDiv=document.createElement("DIV");newDiv.id=basename+"wrapper"+oNum.value;newDiv.className='fwrap';multifile=newDiv.id;oDiv=oDiv.appendChild(newDiv);oDiv.style.display="none";copyNode(basename,iLast,false,false,'',multifile);setText(basename+oNum.value,'');copyNode(basename,iLast,false,false,'_label',multifile);setDisplay(basename+iLast+'_label','none');setInnerHTML(basename+oNum.value+'_name','&nbsp;');setDisplay(basename+iLast+'_label','none');oLbl=document.getElementById(basename+oNum.value+'_label');if(oLbl){oLbl.getElementsByTagName("a")[0].id=basename+oNum.value+'_btn';if(oLbl.getElementsByTagName("span")[0]){oLbl.getElementsByTagName("span")[0].id=basename+oNum.value+'_name';}}
document.getElementById(basename+'wrapper'+iLast).style.display='block';copyNode(basename+"loader",iLast,false,false,'',multifile);showIFrame(basename,iLast);}else{copyNode(basename,iLast,false,false,'_btn',multifile);copyNode(basename,iLast,false,false,'',multifile);setText(basename+oNum.value,'');copyNode(basename,iLast,false,false,'_label',multifile);setDisplay(basename+oNum.value+'_label','none');copyNode(basename,iLast,false,true,'_name',multifile);setInnerHTML(basename+oNum.value+'_name','&nbsp;');}
if(extra){ids=extra.split(",");for(idx in ids){copyNode(ids[idx],iLast,true,false,'',multifile);$('#'+ids[idx]+oNum.value).val($('#'+ids[idx]+oNum.value+' option:first').val());}}}
function copyNode(basename,iLast,dolabel,dobr,suffix,multifile){if(!multifile){multifile="multifile";}
var iNext=iLast+1;var tLast=basename+iLast;var tNext=basename+iNext;if(suffix){tLast=tLast+suffix;tNext=tNext+suffix;}
var oNode=document.getElementById(tLast);if(!oNode){return;}
var oDiv=document.getElementById(multifile);var oClone=oNode.cloneNode(true);if(dolabel){var lNode=oNode.previousSibling;if(lNode){var lClone=lNode.cloneNode(true);oDiv.appendChild(lClone);}}
oClone.id=tNext;oClone.setAttribute('name',tNext);oDiv.appendChild(oClone);if(dobr){var oBR=document.createElement("BR");oDiv.appendChild(oBR);}}
function jsrsExecute(url,callback,method,xml){var escxml=xml.replace(/'"'/g,'\\"');$.post(url,{F:method,XMLHTTP:1,P0:"["+escxml+"]"},callback);}
function XMLRPCMessage(methodname){this.method=methodname||"system.listMethods";this.params=[];return this;}
XMLRPCMessage.prototype.setMethod=function(methodName){if(!methodName)return;this.method=methodName;}
XMLRPCMessage.prototype.addParameter=function(data){if(arguments.length==0)return;this.params[this.params.length]=data;}
XMLRPCMessage.prototype.xml=function(){var method=this.method;var xml="";xml+="<?xml version=\"1.0\"?>\n";xml+="<methodCall>\n";xml+="<methodName>"+method+"</methodName>\n";xml+="<params>\n";for(var i=0;i<this.params.length;i++){var data=this.params[i];xml+="<param>\n";xml+="<value>"+XMLRPCMessage.getParamXML(XMLRPCMessage.dataTypeOf(data),data)+"</value>\n";xml+="</param>\n";}
xml+="</params>\n";xml+="</methodCall>";return xml;}
XMLRPCMessage.dataTypeOf=function(o){var type=typeof(o);type=type.toLowerCase();switch(type){case"number":if(Math.round(o)==o)type="i4";else type="double";break;case"object":var con=o.constructor;if(con==Date)type="date";else if(con==Array)type="array";else type="struct";break;}
return type;}
XMLRPCMessage.doValueXML=function(type,data){var xml="<"+type+">"+data+"</"+type+">";return xml;}
XMLRPCMessage.doBooleanXML=function(data){var value=(data==true)?1:0;var xml="<boolean>"+value+"</boolean>";return xml;}
XMLRPCMessage.doDateXML=function(data){var xml="<dateTime.iso8601>";xml+=dateToISO8601(data);xml+="</dateTime.iso8601>";return xml;}
XMLRPCMessage.doArrayXML=function(data){var xml="<array><data>\n";for(var i=0;i<data.length;i++){xml+="<value>"+XMLRPCMessage.getParamXML(XMLRPCMessage.dataTypeOf(data[i]),data[i])+"</value>\n";}
xml+="</data></array>\n";return xml;}
XMLRPCMessage.doStructXML=function(data){var xml="<struct>\n";for(var i in data){xml+="<member>\n";xml+="<name>"+i+"</name>\n";xml+="<value>"+XMLRPCMessage.getParamXML(XMLRPCMessage.dataTypeOf(data[i]),data[i])+"</value>\n";xml+="</member>\n";}
xml+="</struct>\n";return xml;}
XMLRPCMessage.getParamXML=function(type,data){var xml;switch(type){case"date":xml=XMLRPCMessage.doDateXML(data);break;case"array":xml=XMLRPCMessage.doArrayXML(data);break;case"struct":xml=XMLRPCMessage.doStructXML(data);break;case"boolean":xml=XMLRPCMessage.doBooleanXML(data);break;default:xml=XMLRPCMessage.doValueXML(type,data);break;}
return xml;}
function dateToISO8601(date){var year=new String(date.getYear());var month=leadingZero(new String(date.getMonth()));var day=leadingZero(new String(date.getDate()));var time=leadingZero(new String(date.getHours()))+":"+leadingZero(new String(date.getMinutes()))+":"+leadingZero(new String(date.getSeconds()));var converted=year+month+day+"T"+time;return converted;}
function leadingZero(n){if(n.length==1)n="0"+n;return n;}
function SocNode(name,value){this.nodeName=name;this.nodeValue=value;}
function subTree(){var nodeList=new Object();var i=0;while(this.cursor<this.source.length){var start=this.cursor;var tagStart=this.source.indexOf('<',this.cursor);if(tagStart==-1){return nodeList;}
var tagEnd=this.source.indexOf('>',tagStart);this.cursor=tagEnd+1;var tag=this.source.substr(tagStart+1,tagEnd-tagStart-1);if(tag.charAt(0)!='?'){if(tag.charAt(0)!='/'){nodeList[i++]=new SocNode(tag,this.subTree());}else{if(i==0){return this.source.substr(start,tagStart-start);}else{return nodeList;}}}}
return(nodeList);}
function rpcXMLDocument(source){this.subTree=subTree;this.source=source;this.cursor=0;this.dom=this.subTree();this.params=[];this.tmpnode=this.dom[0].nodeValue[0].nodeValue;for(this.i in this.tmpnode){try{this.params[this.i]=unescape(this.tmpnode[this.i].nodeValue[0].nodeValue[0].nodeValue);}catch(err){}}}
function bindAjaxForm(postcb,refrpc,refid,refid2,refid3){var form=this;form.ajaxForm({success:function(x){if(postcb!=''){if(!eval(postcb+"(x)")){return;}}
if(refrpc!=''){try{getRpcInfo(refrpc,doJsonOps,refid,refid2,refid3);}catch(e){}}
form.closest(soc.lightboxClass).jqmHide();}});}
function bindTinyMCEForm(editors,config)
{editors.tinymce(config);this.bind('form-pre-serialize',function(){try{tinyMCE.triggerSave();tinyMCE.isNotDirty=1;}catch(e){}});}
function moveRowUp(order,json){getRpcInfo('ajax_refresh',doJsonOps,order,'dao_layouts::moveRowUp',json);}
function editRow(rowId,json){if(!checkOrder()){return false;}
popLb('ajax_edit',rowId,'dao_layouts::editRow',json);}
function delRow(json){if(!confDel('content block')){return false;}
orderWidgets();delItem(json,'ajax_delitem',doJsonOps,'dao_layouts::delRow');}
function addSec(colId,json){if(!checkOrder()){return false;}
popLb('ajax_edit',colId,'dao_layouts::addSec',json);}
function editCol(colId,json){if(!checkOrder()){return false;}
popLb('ajax_edit',colId,'dao_layouts::editCol',json);}
function editSec(secId,json){if(!checkOrder()){return false;}
popLb('ajax_edit',secId,'dao_layouts::editSec',json);}
function previewSec(secId,json){soc.ajax('Admin','LandingPage','sectionPreviewLightbox',json);}
function delSec(json){if(!checkOrder()){return false;}
if(!confDel('widget')){return false;}
delItem(json,'ajax_delitem',doJsonOps,'dao_layouts::delSec');}
function trigUpdate(id,msg){var highlight=$('<p style="background-color:#fff799;padding:1px;text-align:center;font-size:10px;">'+msg+'<\/p>');highlight.prependTo("#"+id);window.setTimeout(function(){highlight.fadeOut(800,function(){this.remove();});},1250);}
function confDel(type){return confirm('Are you sure you want to delete this '+type+'?');}
function checkOrder(){if($('.s-lp-col-save').is(':visible')){alert('You must save or revert order changes before making any other updates.');return false;}
return true;}
function toggleRef(colDivId,method){$('.s-lp-col-save_'+colDivId).closest('.s-lp-col').find('.s-lp-col-save')[method]();}
function refRow(json){getRpcInfo('ajax_refresh',doJsonOps,getLyid(),'dao_layouts::refRow',json);}
function saveOrder(){var sort=$('div.sortwrapper');var id=sort.attr('id'),rt={ids:[]};sort.children().each(function(){rt.ids.push($(this).attr('id')||"");});toggleRef(id,'hide');orderWidgets();var outrt=escape(toJSON(rt));getRpcInfo('ajax_refresh',doJsonOps,getLyid(),'dao_layouts::saveColOrder',outrt);$('.tdside.ltside .btnbar .btn').show();}
function getLyid()
{return $('#s-lyid').data('lyid');}
function orderWidgets(colDiv){if(!checkOrder()){return false;}
var colClass='ly_col_cls',secClass='ly_sec_cls';$('.sortwrapper').SortableDestroy();$('.'+colClass).css('border','0px').removeClass('sortwrapper');$('.'+secClass).removeClass('sortableitem');if(colDiv==undefined){$('.activeEdit').removeClass('activeEdit');return;}
var column=$('#'+colDiv);if(!column.is('.activeEdit')){$('.activeEdit').removeClass('activeEdit');}else{$('.activeEdit').removeClass('activeEdit');return;}
$('#'+colDiv+' .'+secClass).addClass('sortableitem');column.addClass('activeEdit sortwrapper').css('border','1px dashed blue').Sortable({accept:"sortableitem",helperclass:"sorthelper",activeclass:"sortableactive",hoverclass:"sortablehover",opacity:0.8,revert:true,floats:true,tolerance:"pointer",onchange:function(){toggleRef($(this).attr('id'),'show');}});}
function landing_page_init()
{$('body').delegate('.cblockHvr','mouseleave mouseenter click',function(e){var $t=$(this);if($t.attr("id")=="chosen_layout"){return;}
switch(e.type){case'click':$("#chosen_layout").css({'border':'none','padding':'2px'}).removeAttr("id");$t.attr("id","chosen_layout").css({'border':'2px solid blue','padding':'0px'});$("#layout").val($t.attr("lval"));break;case'mouseenter':$t.css({'border':'2px solid red','padding':'0px'});break;case'mouseleave':$t.css({'border':'none','padding':'2px'});break;}});}
function userBuildFullName(){soc.ajax('User','Bio','getFullName',{"fullname":soc.deparam($('#salutation, #fname, #mname, #lname, #suffix, #designation').serialize())});}