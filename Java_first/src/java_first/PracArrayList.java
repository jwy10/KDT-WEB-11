package java_first;
import java.util.ArrayList;
import java.util.Scanner;

public class PracArrayList {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		ArrayList<String> list = new ArrayList<>();
		while(true) {
		System.out.println("문자를 입력하세요 : ");
		//여러개 입력 받기 = nextLine
		String input = s.nextLine();
		if(input.equals("exit")) {
			break;
		}
		list.add(input);
		}
//		String text = s.next();
		
		for( String a: list) {
			System.out.println(a);
		}

	}
}