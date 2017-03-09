	
	function doLogin()
	{
		var pass = document.getElementById("password_text").value;
		var cipertext = encrypt(pass);
		alert(cipertext);
		var val = decrypt(cipertext);
		alert(val);
		document.getElementById("password_text").value = cipertext;
		//document.getElementById("loginUserForm").submit();
	}