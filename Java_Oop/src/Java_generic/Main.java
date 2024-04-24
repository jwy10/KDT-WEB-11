package Java_generic;

public class Main {

	public static void main(String[] args) {
		Calculator<Integer> calcInt = new Calculator<>(10,5);
		Calculator<Double> calcDouble = new Calculator<>(2.22,3.42);
		
		System.out.println("Integer Sum : " + calcInt.add());
		System.out.println("Double Sum: " + calcDouble.add());
		
//		Pair<String, Integer> pair1= new Pair<>("One", 1);
//		Pair<Integer, String> pair2= new Pair<>(2, "Two");
//		
//		System.out.println("key : " + pair1.getKey + ", value : " + pair1.getValue());
//		System.out.println("key : " + pair2.getKey + ", value : " + pair2.getValue());
		
		
		
		
		
		
		//제네릭클래스
//		MyCustom<Double> list1 = new MyCustom<Double>();
//		list1.addElement(1.1);
//		list1.addElement(2.324);
//		list1.addElement(3.324);
//		list1.addElement(100.435654);
//		System.out.println(list1.list.toString());
		
		
		
		//일반클래스
//		MyClass list2 = new MyClass();
//		list2.addElement("Apple");
//		list2.addElement("Amazon");
//		list2.addElement("Samsung");
//		System.out.println(list2.list.toString());
		
	}

}
