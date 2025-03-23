n = int(input())
marks = {}

for i in range(n):
    name, *line = input().split()
    scores = list(map(float,line))
    marks[name] = scores

query = input()

avg_mark = sum(marks[query]) / len(marks[query])

print("{:.2f}".format(avg_mark))