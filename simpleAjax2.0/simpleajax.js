// file simpleajax.js
var xhr = createRequest();

function getData(dataSource, divID, aName, aPwd,isSyn,divID_SYN)  {

    if(xhr) {
	    var place = document.getElementById(divID);
	    var url = dataSource+"?name="+aName+"&pwd="+aPwd+"&sleepTime=10";
	    xhr.open("GET", url, isSyn);
  
	xhr.onreadystatechange = function() {
		alert(xhr.readyState);   
		if (xhr.readyState == 4 && xhr.status == 200) {
			place.innerHTML = xhr.responseText;
		    } // end if
	    } // end anonymous call-back function
	    xhr.send(null);
	} // end if
	
	var xhr_SYN = createRequest();
	if(xhr_SYN)
	{
	 var place_SYN = document.getElementById(divID_SYN);
	 var url = dataSource+"?name="+aPwd+"&pwd="+aName+"&sleepTime=0";
	 xhr_SYN.open("GET", url, false);
	 xhr_SYN.send(null); 
 	 place_SYN.innerHTML = xhr_SYN.responseText;
	}
	
} // end function getData()\


var xhr2 = createRequest();

function getData2(dataSource, divID, aName, aPwd,isSyn)  {
    if(xhr2) {
	    var place = document.getElementById(divID);
	    var url = dataSource+"?name="+aName+"&pwd="+aPwd+"&sleepTime=5";
	    xhr2.open("GET", url, isSyn);
	    xhr2.send(null);
            place.innerHTML = xhr2.responseText;
	} // end if
} // end function getData2()

