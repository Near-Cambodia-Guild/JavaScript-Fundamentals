function topStudents(array) {
    return array.filter(students => {
        return students.grade >= 90;
    });
}

module.exports = topStudents;