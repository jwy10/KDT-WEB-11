package Collection;
import java.util.List;
import java.util.LinkedList;
import java.util.Set;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.TreeSet;
import java.util.Map;
import java.util.HashMap;
import java.util.*;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		//LinkedList : 데이터의 삽입 및 삭제가 빈번하게 일어나는 작업에 적합
		//ArrayList : 데이터의 접근이 많고, 삽입 삭제가 적은 경우에 적합
		
//		List<String> linked = new LinkedList<>();
//		linked.add("A");
//		linked.add("B");
//		linked.add("C");
//		linked.add("C");
//		linked.remove(1);
//		System.out.println(linked);
//
//		//Set
//		//HashSet : 중복제거, 요소의 순서를 보장하지 않는다
//		Set<String> hashSet = new HashSet<>();
//		hashSet.add("A");
//		hashSet.add("B");
//		hashSet.add("C");
//		hashSet.add("A");
//		System.out.println(hashSet);
//		//LinkedHashSet : 중복제거, HashSet기능유지, 추가순서를 유지한다
//		Set<String> linkedHashSet = new LinkedHashSet<>();
//		linkedHashSet.add("A");
//		linkedHashSet.add("B");
//		linkedHashSet.add("C");
//		linkedHashSet.add("A");
//		System.out.println(linkedHashSet);
//		
//		//TreeSet : 중복제거, 오름차순으로 출력, 시간복잡도 유지
//		Set<String> treeSet = new TreeSet<>();
//		treeSet.add("B");
//		treeSet.add("D");
//		treeSet.add("C");
//		treeSet.add("A");
//		treeSet.add("C");
//		System.out.println(treeSet);
//		
//		//Map
//		//HashMap
//		Map<String, Integer> hashMap = new HashMap<>();
//		hashMap.put("one",1);
//		hashMap.put("two",2);
//		hashMap.put("three", 3);
//		System.out.println(hashMap);
//		//LinkedHashMap
//		Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
//		linkedHashMap.put("three", 3);
//		linkedHashMap.put("one", 1);
//		linkedHashMap.put("two", 2);
//		System.out.println(linkedHashMap);
//		
//		//TreeMap
//		Map<String, Integer> treeMap = new TreeMap<>();
//		treeMap.put("C", 3);
//		treeMap.put("A", 1);
//		treeMap.put("B", 2);
//		System.out.println(treeMap);
		
		Scanner s = new Scanner(System.in);
		System.out.println("정수를 입력하세요. -1을 입력하면 종료됩니다.");
		Set<Integer> nums = new HashSet<>();
		while(true) {
			System.out.println("정수 입력 : ");
			int num = s.nextInt();
			if (num == -1) {
				break;
			}
			nums.add(num);
		}
		System.out.println("중복 제거된 정수 목록 : " + nums);
				
		
		
		
	}

}
