package Java_abstract;

public class Car extends Vehicle {
	
	public Car(String name) {
		super(name);
	}
	
	//추상클래스 구현
	public void start() {
		System.out.println(super.getName() + "자동차가 출발입니다");
	}
}
