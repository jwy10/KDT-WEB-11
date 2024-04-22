package Java_inherit;

public class Student extends Person {
	private String school;
	
	//자식클래스의 생성자
	//1. 자식클래스의 생성자를 만든다고 해서 부모클래스에서 생성자를 꼭 만들어야 하는 것은 아님
	//모든 클래스는 기본적으로 매개변수가 없는 기본생성자를 갖는다
	//부모 클래스에서 생성자를 정의하지 않았다면 기본생성자가 생성되고, 자식클래스에서 이 기본생성자를 자동으로 호풀
	//2. 부모클래스애 매개변수가 있는 생성자 존재할 경우
	//부모클래스에 매개변수가 있는 생성자가 존재할 경우에는 자식클래스에 명시적으로 부모클래스의 생성자를 호출해야함
	//super 메소드를 이용해서 생성자 호출
	public Student(String school, int age, String name) {
		super(name, age);
		this.school = school;
//		setAge(age);
//		setName(name);
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	@Override
	public String toString() {
		return "Student [학교명은 " + school + "," + super.toString()+"]";
	}
	
	
}
