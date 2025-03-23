x = int(input())
temp = 0
for i in range(1, x + 1):
    if x % i == 0:
        temp = temp + 1

print(temp)
