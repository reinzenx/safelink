<script type="text/javascript">
//<![CDATA[
var settingplatinum = {
	exceptionurl : "facebook.com,arlethdesign.blogspot.com,panda21x.eu.org,indexsubtitle.com,subkuy.com,subscene.icu,twitter.com"
};
function extractDomain(url) {
	var hostname;
	if (url.indexOf("://") > -1) {hostname = url.split('/')[2];}
	else {hostname = url.split('/')[0];}
	hostname = hostname.split(':')[0];
	hostname = hostname.split('?')[0];
	return hostname;
}
function exception(){
	var exception = new Array();	
	settingplatinum.exceptionurl = settingplatinum.exceptionurl;
	exception = settingplatinum.exceptionurl.split(",");
	return exception;
}

if (!settingplatinum.exceptionurl) {
	settingplatinum.exceptionurl = window.location.href;
}else {
	settingplatinum.exceptionurl += ","+window.location.href;
}
var exception = exception();
function showurl(datajson){

	var check = false;
	var no = 0;
	var exceptionlength = exception.length;
	var checklink = "";
	var checkexception = "";	
	var linktag = document.getElementsByTagName("a");
	var links =new Array();		

	var semuaartikel = datajson.feed.openSearch$totalResults.$t;
	for(var i = 0; i < semuaartikel; i++) {
		var urlartikel;
		for (var s = 0; s < datajson.feed.entry[i].link.length; s++) {
			if(datajson.feed.entry[i].link[s].rel == 'alternate') {
				urlartikel = datajson.feed.entry[i].link[s].href;
				break;
			}
		}
		links[i] = urlartikel;
		var randindex = Math.random() * links.length; 
		randindex = parseInt(randindex);
	}
	for (var i = 0; i < linktag.length; i++) {	
		check = false;
		no = 0;
		while (check == false && no < exceptionlength) {
			checklink = extractDomain(linktag[i].href);
			checkexception = extractDomain(exception[no]);
			if (checklink.match(checkexception)) {
				check = true;
			}
			no++;
		}
		if (check == false) {
			linktag[i].href = links[randindex] + "?safeurl=" + Base64.encode(linktag[i].href);
			linktag[i].rel = "nofollow";
			linktag[i].target = "_blank";
		}
	}	
} 
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=Base64._utf8_encode(r);C<r.length;)t=r.charCodeAt(C++),e=r.charCodeAt(C++),o=r.charCodeAt(C++),a=t>>2,h=(3&t)<<4|e>>4,n=(15&e)<<2|o>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");C<r.length;)a=this._keyStr.indexOf(r.charAt(C++)),h=this._keyStr.indexOf(r.charAt(C++)),n=this._keyStr.indexOf(r.charAt(C++)),c=this._keyStr.indexOf(r.charAt(C++)),t=a<<2|h>>4,e=(15&h)<<4|n>>2,o=(3&n)<<6|c,d+=String.fromCharCode(t),64!=n&&(d+=String.fromCharCode(e)),64!=c&&(d+=String.fromCharCode(o));return d=Base64._utf8_decode(d)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);128>o?t+=String.fromCharCode(o):o>127&&2048>o?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)o=r.charCodeAt(e),128>o?(t+=String.fromCharCode(o),e++):o>191&&224>o?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};
//]]>
</script>
<script src="https://www.blogger.com/feeds/8682873727648998442/posts/default?alt=json-in-script&amp;max-results=150&amp;callback=showurl"></script>