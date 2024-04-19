package java_first;
import java.util.Scanner;
import java.util.InputMismatchException;

public class Exceptions {

	public static void main(String[] args) {
		// 숫자를 0으로 나눈경우
		try{
			int num1 = 4;
			int num2 = 0;
			System.out.printf("num1 / num2 = %f", num1/num2);
		}catch(ArithmeticException e) {
			System.out.println("0으로 나누어 예외 발생");
			System.out.println(e);
		}
		//인덱스의 범위를 벗어났을 때
		int[] intArray = {1,2,3,4};
		try {
			for(int i = 0 ; i < 5; i++) {
				System.out.println(intArray[i]);
			}
		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println("인덱스 범위가 벗어났습니다");
		}
		//입력오류 발생 시
		Scanner s = new Scanner(System.in);
		System.out.println("정수를 입력하세요");
		try {
			int num = s.nextInt();
			System.out.println("입력된 정수는 " + num);

		}catch(InputMismatchException e) {
			System.out.println("입력오류, 정수를 입력하세요");
		}
				
		//null에 접근
		String text = null;
		try {
			System.out.println(text.length());
		}catch(NullPointerException e){
			System.out.println("Null값에 접근할 수 없습니다");
		}
	}
	


}
