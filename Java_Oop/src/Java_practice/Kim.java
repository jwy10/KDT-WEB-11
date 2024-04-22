package Java_practice;

public class Kim extends Student{
	public Kim (String name, String school, int age, int stdNum ) {
		super(name, school, age, stdNum);
	}
	
	@Override
	public String todo() {
		return "김가네 김밥";
	}
}
