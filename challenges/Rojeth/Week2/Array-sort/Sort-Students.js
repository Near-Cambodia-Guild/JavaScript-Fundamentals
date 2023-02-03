function sortStudents(students) {
    return students.sort( (a, b) => {
        return ((b.graduated) - (a.graduated) || (b.grade - a.grade));
    });
}

module.exports = sortStudents;