from math import pi

figure = input()
area = 0
if figure == "square":
    side = float(input())
    area = side**2
elif figure == "rectangle":
    side = float(input())
    side_b = float(input())
    area = side_b * side
elif figure == "circle":
    side = float(input())
    area = pi * side**2
elif figure == "triangle":
    side = float(input())
    height = float(input())
    area = height * side / 2

print("{:.3f}".format(area))