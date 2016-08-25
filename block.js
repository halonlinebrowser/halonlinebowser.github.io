// JavaScript Document

function getParameter(name)
{  
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href );  
	
	if( results == null )    
		return "";  
	else    
		return results[1];
}

function decode(encodedItem) 
{
	return decodeURIComponent(encodedItem.replace(/\+/g,  " "));
}


function displaySections()
{
	if(getParameter('ldu') == '1')
	{
		document.getElementById('loginDifferentUser').innerHTML = '<a href=\"javascript:openSessionInNewWindow();\" onClick=\"openSessionInNewWindow();this.blur();return false;\" style=\"text-decoration:none;"\><div class="green_home_button" style="width:180px;">Login as Different User</div></a>';
	}
	
	if(getParameter('re') == '1')
	{
		document.getElementById('exception1').innerHTML = 'Request An Exception';
		document.getElementById('exception2').innerHTML = 'Reason:';
		document.getElementById('exception3').innerHTML = '<textarea id="rem2" name=\"rem2\" rows=\"3\" cols=\"40\"></textarea>';
		document.getElementById('exception4').innerHTML = '<a href=\"javascript:requestOverride();\" onClick=\"this.blur();\" style=\"text-decoration:none;"\><div class="green_home_button" style="width:155px;">Request Exception</div></a>';
		document.getElementById('exception5').innerHTML = 'Email:';
		document.getElementById('exception6').innerHTML = '<input type=\"text\" id=\"rem3\" name=\"rem3\" size=\"40\">';
	}

	document.getElementById('url').innerHTML = '<a href="http://' + decode(getParameter('bu')) + '" style="color:#58863c;">' + decode(getParameter('bu')) + '</a>';
	document.getElementById('description').innerHTML = decode(getParameter('bc'));
	document.getElementById('groupNumber').innerHTML = decode(getParameter('fp'));
	document.getElementById('ipAddress').innerHTML = decode(getParameter('ip'));
	document.getElementById('customText').innerHTML = decode(getParameter('ct'));
}
 
function requestOverride()
{	
	document.forms[0].fullUrl.value = decode(getParameter('bu'));
	document.forms[0].button.value = 'requestException';
	
	if(document.getElementById("rem2"))
	{
		document.forms[0].rem.value = document.getElementById("rem2").value;
	}
	
	if(document.getElementById("rem3"))
	{
		document.forms[0].contactEmail.value = document.getElementById("rem3").value;
	}
	
	document.forms[0].gn.value = decode(getParameter('fp'));
	document.forms[0].action = 'http://' + getParameter('ibip') + '/page_block_submit';
	document.forms[0].submit();
}
function openSessionInNewWindow()
{
	var newWindow = window.open('http://' + getParameter('ibip') + '/user_login_small.html','iBossSessionWindow','toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, width=625, height=511');
	newWindow.focus();
	return false;
} 
