var xhttp;

function renderXml(start, max) {
	xmlDoc=xhttp.responseXML;

	var strBuffer= "";
	strBuffer = strBuffer +"<table border='1'>";
	var x=xmlDoc.getElementsByTagName("entry");
	if (start > 0) {
		strBuffer = strBuffer + "<button onclick=\"renderXml("+(Math.min(start-10, start))+","+(start)+")\">Previous Articles</button>"
	}
	for (i=start;i<x.length;i++)
	  {
	  	link = x[i].getElementsByTagName("link")[0].getAttribute("href");
	  	title = x[i].getElementsByTagName("title")[0].innerHTML;
	  	summary = x[i].getElementsByTagName("summary")[0].innerHTML;
	  	summary = summary.replace("<![CDATA[", "").replace("]]>", "");
	  	titleElement = "<a href=" + link + ">" + title + "</a>"
	  	readMoreElement = "<a href=" + link + "> read more...</a>"
	    strBuffer = strBuffer +"<tr><td>";
	    strBuffer = strBuffer + titleElement;
	    strBuffer = strBuffer + "<span>"+summary;
	    strBuffer = strBuffer + readMoreElement+"</span>";
	    strBuffer = strBuffer +"</td></tr>";
	    if(i==max){
	    	if (max < x.length) {
	    		strBuffer = strBuffer + "<button onclick=\"renderXml("+max+","+(max+10)+")\">More Articles</button>"
	    	}
	      break;
	    }
	  }
	strBuffer = strBuffer +"</table>";
	document.getElementById("feeddisplay").innerHTML =strBuffer;
}


if (window.XMLHttpRequest)
  {// For IE7 and above, Firefox, Chrome, Opera, Safari
  xhttp=new XMLHttpRequest();
  }
else
  {// For IE6, IE5
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.onreadystatechange = function () {
	if (this.readyState ==4 && this.status == 200) {
		renderXml(0, 10);
	}
};
xhttp.open("GET","http://iuqiddis.com/tt-rss/public.php?op=rss&id=-2&view-mode=all_articles&key=pl9w9u5f0e29a6e9b1b",true);
xhttp.send();

