def find_min(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())

min_num = find_min(a, b, c, d)
print(min_num)