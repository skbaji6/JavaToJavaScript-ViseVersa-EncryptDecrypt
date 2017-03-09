var iv ;
var salt ;
var plainText = "Password";
var keySize = 128;
var iterations = iterationCount = 10000;
var passPhrase = "Password";
var cipherText;
 //var salt = CryptoJS.lib.WordArray.random(128/8);
 //var iv = CryptoJS.lib.WordArray.random(128/8);           
function encrypt(password){
	salt = CryptoJS.lib.WordArray.random(128/4).toString().toUpperCase();
	iv = CryptoJS.lib.WordArray.random(128/8).toString().toUpperCase();
	var aesUtil = new AesUtil(keySize, iterationCount)
    var encrypted = aesUtil.encrypt(salt, iv, passPhrase, password);
    return encrypted;
}

function decrypt(passwordEncrypt){	
	var aesUtil = new AesUtil(keySize, iterationCount)
    var decrypted = aesUtil.decrypt(salt, iv, passPhrase, passwordEncrypt);
    return decrypted;
}

