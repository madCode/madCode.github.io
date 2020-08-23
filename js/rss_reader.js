var xhttp;
var stepCount = 3;

function previousHtml(start) {
	if (start > 0) {
		return "<button onclick=\"renderXml("+(Math.min(start-stepCount, start))+","+(start)+")\">< Prev</button>";
	}
	return "";

}

function nextHtml(max, length) {
	if (max < length) {
		return "<button onclick=\"renderXml("+max+","+(max+stepCount)+")\">Next ></button>";
	}
	return "";
}

function renderXml(start, max) {
	xmlDoc=xhttp.responseXML;

	var strBuffer= "";
	strBuffer = strBuffer +"<div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">";
	var x=xmlDoc.getElementsByTagName("entry");
	for (i=start;i<x.length;i++)
	  {
	  	link = x[i].getElementsByTagName("link")[0].getAttribute("href");
	  	title = x[i].getElementsByTagName("title")[0].innerHTML;
	  	summary = x[i].getElementsByTagName("summary")[0].innerHTML;
	  	summary = summary.replace("<![CDATA[", "").replace("]]>", "");
	  	titleElement = "<div class=\"portfolio-caption\"><h4>" + title + "</h4></div>";
	    strBuffer = strBuffer +"<a href=\""+link + "\" class=\"col-sm-6\">";
	    strBuffer = strBuffer + titleElement;
	    strBuffer = strBuffer + "<div class=\"text-muted\">"+summary+"</div><br></a>";
	    if(i==max){
	      break;
	    }
	  }
	strBuffer = strBuffer +"</div>";
	strBuffer = strBuffer + previousHtml(start) + " " + nextHtml(max, x.length);
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
		renderXml(0, stepCount);
	}
};
xhttp.open("GET","http://iuqiddis.com/tt-rss/public.php?op=rss&id=-2&view-mode=all_articles&key=pl9w9u5f0e29a6e9b1b",true);
xhttp.send();

