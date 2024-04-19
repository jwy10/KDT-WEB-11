package java_first;

import java.util.Arrays;

public class ArraysMethods {
//	가변적 매개변수	
	public static int addNumbers(String str, int... nums) {
		System.out.println("String " + str);
		int total = 0;
		for(int num: nums) {
			total += num;
		}
		
		return total;
	}
	
	
	public static void main(String[] args) {
		int[] arr = {1, 2, 3, 4, 5};
		
		//copyof: 특정 길이 만큼 복사한 새 배열을 반환
		int[] copyOfArr = Arrays.copyOf(arr, 2);
		
		System.out.println(Arrays.toString(copyOfArr));
		
		//copyOfRange: 시작 인덱스부터 종료 인덱스 전까지의 부분을 복사한 새 배열을 반환
		int[] copyOfRangeArr = Arrays.copyOfRange(arr, 1, 4);
		System.out.println(Arrays.toString(copyOfRangeArr));
		
		//fill: 배열의 모든 요소를 주어진 값으로 채움
		Arrays.fill(arr, 10);
		System.out.println(Arrays.toString(arr));
		//fill로 부분요소 채움
		int[] arr2 = new int[10];
		arr2[0] = 1;
		arr2[1] = 2;
		arr2[2] = 3;
		Arrays.fill(arr2, 3, arr2.length, 100);
		System.out.println(Arrays.toString(arr2));
		
		//sort: 배열을 오름차순으로 정렬
		int[] arr3 = {2,1,5,3,4};
		Arrays.sort(arr3);
		System.out.println(Arrays.toString(arr3));
		
		//equals : 두 배열이 같은지 여부 확인
		int[] arr4 = {1,2,3,4,5};
		System.out.println(Arrays.equals(arr2, arr4));
		
		//deepEquals: 다차원 배열 비교
		int[][] arrs1 = {{1,2},{3,4}};
		int[][] arrs2 = {{1,2},{3,5}};
		System.out.println(Arrays.deepEquals(arrs1,arrs2));
		
    	//binarySearch: 특정값의 인덱스값 찾기 단, 배열은 정렬되어 있어야 함
		int index = Arrays.binarySearch(arr3, 4);
		System.out.println(index);
		
//		int sum = addNumbers( 1,2,3,4,5);
//		System.out.println("가변매개변수"+sum);
		
	}

}
