function getDoc()
{	 
     	request = createRequest();
     	if (request.overrideMimeType)        
        	request.overrideMimeType("text/xml");

	if(request) {
      		request.open("GET", "temperature.xml", true); 
      		request.onreadystatechange = function() { 
          		if ((request.readyState == 4) && (request.status == 200)) { 
             			var xmlDocument = request.responseXML;
             			displayTemperature(xmlDocument);
          		} 
      		} 
      		request.send(null); 
   	} 
}

function displayTemperature(doc) 
{
	var detailDiv = document.getElementById("detailDiv");
	var temperatureNode = doc.getElementsByTagName("detail");
	var total = 0;
	
	for (var i=0; i<temperatureNode.length; i++) 
	{
       		var detail = temperatureNode[i];
		var date = detail.childNodes[0].firstChild.nodeValue;
		var month = detail.childNodes[2].firstChild.nodeValue;
		var year = detail.childNodes[4].firstChild.nodeValue;
		var temperature = detail.childNodes[6].firstChild.nodeValue;       		
		total = total + parseFloat(temperature );
	
		var p = document.createElement("p");       		
		var text = document.createTextNode(date + "/" + month + "/" + year + " : " + temperature );
       		p.appendChild(text);

		detailDiv.appendChild(p);	  
   	}
	
	var p = document.createElement("p");       		
	var text = document.createTextNode("Average temperature is : " + total/temperatureNode.length);
       	p.appendChild(text);
	detailDiv.appendChild(p);
}
