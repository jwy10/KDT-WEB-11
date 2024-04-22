package Java_practice;

public class Baek extends Student{
	public Baek (String name, String school, int age, int stdNum ) {
		super(name, school, age, stdNum);
	}
	
	@Override
	public String todo() {
		return "백종원 피자";
	}
}
