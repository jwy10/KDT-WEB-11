package Java_practice;

public class Airplane extends Vehicle implements Flyable {
	@Override
	public void fly() {
		System.out.println("고도 10,000피트에서 비행중");
	}
	
	@Override
	public void move() {
		System.out.println("하늘을 날아가는중");
	}
}
