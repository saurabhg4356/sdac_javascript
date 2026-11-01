function getStudentInfo<T>(info: T):T{
    return info
}

const obje = {
    "studentName" : "Saurabh",
    "Roll No." : 40
}
console.log(getStudentInfo(obje));
