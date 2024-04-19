package java_first;
import java.util.Scanner;

public class Prac2 {

	public double area(double a) {
		double pi = 3.141592;
		return  pi*a*a;
	}
	
	public double area(int a, int b) {
		return a * b;
	}
	
	public double area(double a, double b) {
		return 0.5*a * b;
	}

	
	public static void main(String[] args) {
		Prac2 calc = new Prac2();
		Scanner scan = new Scanner(System.in);
		System.out.println("반지름의 길이 입력");
		int r = scan.nextInt();
		double area1 = calc.area(r);
		System.out.printf("반지름이 " + "%d인 원의 넓이 : " + "%.2f", r, area1  ).println();
		System.out.println("가로와 세로 길이 입력");
		int wid  = scan.nextInt();
		int hei  = scan.nextInt();
		double area2 = calc.area(wid, hei);
		System.out.printf("가로 %d 세로 %d인 직사각형의 넓이:" + "%.1f", wid, hei ,area2 ).println();
		System.out.println("밑변과 높이의 길이 입력");
		double bot  = scan.nextDouble();
		double hei2  = scan.nextDouble();
		double area3 = calc.area(bot, hei2);
		System.out.printf("밑변 %.0f 높이 %.0f인 삼각형의 넓이:" + "%.1f", bot, hei2 ,area3  );
		
//		실습 1
//		Scanner scan = new Scanner(System.in);
//		System.out.println("나이를 입력하세요");
//		int age = scan.nextInt();
//		if(age>=1 && age<=7) {
//			System.out.println("유아");
//		}else if(age<=13){
//			System.out.println("초등학생");
//		}else if(age<=16) {
//			System.out.println("중학색");
//		}else if(age<=19) {
//			System.out.println("고등학생");
//		}else {
//			System.out.println("어른");
//		}
		//실습 2
//		Scanner scan = new Scanner(System.in);
//		System.out.println("이름을 입력하세요");
//		String name = scan.next();
//		if(name.equals("홍길동")) {
//			System.out.println("남자");
//		}else if(name.equals("성춘향")) {
//			System.out.println("여자");
//		}else {
//			System.out.println("모르겠어요");
//		}
//		실습 3
//		Scanner scan = new Scanner(System.in);
//		System.out.println("숫자를 입력하세요");
//		int num = scan.nextInt();
//		int i = 1;
//		while(i<=num) {
//			System.out.println(i);
//			i++;
//		}
//		실습 4
//		Prac2 calc = new Prac2();
//		Scanner scan = new Scanner(System.in);
//		System.out.println("숫자 두개를 입력하세요");
//		int a = scan.nextInt();
//		int b = scan.nextInt();
//		
//		System.out.println("덧셈결과 : " + calc.add(a,b));
//		System.out.println("뺄셈결과 : " + calc.sub(a,b));
//		System.out.println("곱셈결과 : " + calc.mul(a,b));
//		System.out.println("나눗셈결과 : " + calc.div(a,b));
		
		
	}

}
