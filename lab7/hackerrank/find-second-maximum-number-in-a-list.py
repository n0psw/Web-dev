
n = int(input())
array = map(int, input().split())

sorted_array = sorted(set(list(array)), reverse = True)

print(sorted_array[1])