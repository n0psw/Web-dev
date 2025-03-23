
x = int(input())
y = int(input())

a = int(x / 1000)
b = int((x / 100) % 10)
c = int((x / 10) % 10)
d = int(x % 10)

if x < 1000 and y != 1:
    print("YES")
elif x < 1000 and y == 1:
    print("NO")
elif a == d and b == c and y == 1:
    print("YES")
elif a == d and b == c and y != 1:
    print("NO")
elif a != d or b != c and y != 1:
    print("YES")