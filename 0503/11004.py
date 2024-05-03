N, K = (map(int,input().split()))            # 숫자 입력
lists = list(map(int,input().split()))   # 숫자리스트 입력
def solution(N,K,lists):                # 정답 함수
    answer = 0
    quicksort(0,N-1,K-1)
    answer = lists[K-1]
    return answer

def quicksort(S,E,K):  # 퀵소트 정의  S : 리스트의 맨 왼쪽index -> 0, E : 리스트의 맨 오른쪽index -> N
    global lists
    if (S < E):

        pivot = partition(S,E)

        if (pivot < K): # 피봇보다 큰 경우 reQuickSort
            quicksort(pivot+1,E,K)  
        elif (K < pivot): # 피봇보다 작은 값들 reQuickSort
            quicksort(S,pivot-1,K)
        else:
            return


def partition(S,E):           # S -> 0, E->N 
    global lists

    if(S+1 == E): # 데이터가 2개인 경우 바로 비교해서 정렬
        if lists[S] > lists[E]:
            swap(S,E)
        return E

    pivot = (S+E)//2     # 피봇은 전체리스트의 중앙의 위치한 값
    swap(S,pivot)   # 피봇을 왼쪽 끝으로 보내기
    pivot = S       
    i = S + 1
    j = E
    while(i<=j):  
        while lists[pivot]> lists[i] and i<len(lists)-1: #피벗보다 큰 수가 나올 때 까지 i 증가
            i+=1
        while(lists[pivot] < lists[j] and j>0): #피벗보다 작은 수가 나올때 까지 j 감소
            j-=1
        if i <= j:
            swap(i, j)
            i += 1
            j -= 1
    temp = lists[pivot]
    lists[S] = lists[j]
    lists[j] = temp
    return j



def swap(a,b):
    global lists
    lists[a], lists[b] = lists[b], lists[a]


print(solution(N,K,lists))