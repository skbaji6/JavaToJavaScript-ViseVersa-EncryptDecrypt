package org.bhajishaik.sample.aes;

public class EncryptionTest {

	static String iv = "F27D5C9927726BCEFE7510B1BDD3D137";
	static String salt = "3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55";
	static String passPhrase = "Password";
	public static void main(String[] args) {
		AesUtil aes=new AesUtil(128, 10000);
		String encrypted=aes.encrypt(salt, iv, passPhrase, "TestString");
		System.out.println(encrypted);
		
		String decrypted=aes.decrypt(salt, iv, passPhrase, encrypted);
		System.out.println(decrypted);
	}

}
