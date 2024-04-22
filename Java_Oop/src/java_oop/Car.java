package java_oop;

public class Car {

	//멤버변수(데이터, 변수, 필드) 무조건 private!
	private int speed;
	
	//생성자
	public Car(){
		this(1);
	}
	
	public Car(int speed){
		if(speed>0) {
			this.speed = speed;
		}
	}
	
	// 메서드
	public void start() {
		System.out.println("Engine Start");
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}
	
//	//getter
//	public int getSpeed() {
//		return speed + 5;
//	}
//	
//	//setter
//	public void setSpeed(int num) {
//		if(num<0) {
//			this.speed= Math.abs(num); //절댓값
//		}else {
//			this.speed = num;
//		}
//	}
	
	
	
	
	
	
}
