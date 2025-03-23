import math

n = int(input())
k = int(input())
x = math.floor(k/n)
y = k - (x * n)
print(y)