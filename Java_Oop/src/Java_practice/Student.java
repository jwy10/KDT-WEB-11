package Java_practice;

public abstract class Student {
	
	//변수
	private String name;
	private String school;
	private int age;
	private int stdNum;
	
	
	//생성자
	public Student(String name, String school, int age, int stdNum) {
		this.name = name;
		this.age = age;
		this.school = school;
		this.stdNum = stdNum;
	}
	
	//추상메소드
	public abstract String todo();
	
	//일반메소드
	public void print() {
		System.out.printf("=====" + name + " 학생의 정보 =====\n");
		System.out.printf("학교 : %s\n" , school);
		System.out.printf("나이 : %d\n" , age);
		System.out.printf("학번 : %s\n" , stdNum);
		System.out.printf("점심은 : %s\n" ,todo());
	}
}
