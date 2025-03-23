n = int(input())

array = list(map(int, input().split()))
temp = 0

for i in range(1, n - 1):
    if array[i] > 0 and array[i - 1] > 0:
        temp += 1
        print("YES")
    if array[i] < 0 and array[i - 1] < 0:
        temp += 1
        print("YES")
    if array[i] > 0 and array[i + 1] > 0:
        temp += 1
        print("YES")
    if array[i] < 0 and array[i + 1] < 0:
        temp += 1
        print("YES")

if temp == 0:
    print("NO")