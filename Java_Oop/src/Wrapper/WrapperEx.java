package Wrapper;

public class WrapperEx {
	public static void main(String[] args) {
		
		//오토박싱
		Integer integerValue = 5; //Integer.valueOf(5);
		
		//오토언박싱
		int intValue = integerValue;
		
		Integer parserInt = Integer.parseInt("123456789");
		System.out.println(parserInt);
		
		Integer maxInt = Integer.max(10,30);
		System.out.println(maxInt);
		
		Integer max = Integer.MAX_VALUE;
		System.out.println(max);
		
		Double parseDouble = Double.parseDouble("1111.2222");
		System.out.println(parseDouble);
	}
}
