package Java_generic;

public class Main {

	public static void main(String[] args) {
		
		//제네릭클래스
		MyCustom<Double> list1 = new MyCustom<Double>();
		list1.addElement(1.1);
		list1.addElement(2.324);
		list1.addElement(3.324);
		list1.addElement(100.435654);
		System.out.println(list1.list.toString());
		
		
		
		//일반클래스
//		MyClass list2 = new MyClass();
//		list2.addElement("Apple");
//		list2.addElement("Amazon");
//		list2.addElement("Samsung");
//		System.out.println(list2.list.toString());
		
	}

}
