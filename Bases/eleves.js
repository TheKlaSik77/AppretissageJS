const students = [
    {
        name: "John",
        marks: [1,20,18,19,12]
    },
    {
        name: "Jane",
        marks: [17,18,20,13,15]
    },
    {
        name: "Sophie",
        marks: [17,12,14,15,13]
    },
    {
        name: "Marc",
        marks: [2,3,5,8,9]
    },
    {
        name: "Manon",
        marks: [18,17,18,19,12]
    }
]


const calcAvg = function (student){
    let sum = 0
    for (let m of student.marks){
        sum += m
    }
    return sum / student.marks.length
}

const addAvgStudent = function (students){
    for (let s of students){
        s.average = calcAvg(s)
    }
}

addAvgStudent(students)


const sortByAvg = function (students){
    let isSort = false
    while (!isSort){
        isSort = true
        // ATTENTION s'arrêter à length - 2 car students[length - 1 + 1] n'existe pas!
        for (let i = 0 ; i < students.length - 1 ; i++){
            if (students[i].average < students[i+1].average){
                let temp = students[i+1]
                students[i+1] = students[i]
                students[i] = temp
                isSort = false
            }
        }
    }
}

sortByAvg(students)

for (let s of students){
    console.log("Moyenne de " + s.name + " : " + s.average)
}

const nBestStudents = function (n, students){
    for (let i = 0 ; i < n ; i++){
        console.log((i+1) + ". " + students[i].name + " with an average of " + students[i].average)
    }
}
