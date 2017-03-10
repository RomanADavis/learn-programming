import cs50
from student import Student
import csv

students = []
for i in range(3):
    print("name: ", end = "")
    name = cs50.get_string()
    print("dorm: ", end = "")
    dorm = cs50.get_string()
    
    students.append(Student(name, dorm))
    
file = open("students.csv", "w")
writer = csv.writer(file)
for student in students:
    writer.writerow((student.name, student.dorm))
file.close()
    