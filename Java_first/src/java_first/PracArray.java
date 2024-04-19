package java_first;
import java.util.Scanner;
import java.util.Arrays;

public class PracArray {

	public static void main(String[] args) {
		System.out.println("5개의 정수를 입력하세요");
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt();
		int d = scan.nextInt();
		int e = scan.nextInt();
//		int[] arr1 = new int[5];
//		for(int i = 0; i < arr1.length; i ++){
//			arr1[i] = scan.nextInt();
//		}
		int[] arr1 = {a,b,c,d,e};
//		System.out.println(Arrays.toString(arr1));
		int sum = 0;
		for(int i=0; i < arr1.length; i++) {
			sum += arr1[i];
		}
		System.out.println(sum);
		System.out.println(arr1.length);
		System.out.printf("평균은 : %.1f" , (double)sum/arr1.length);
	}

}
