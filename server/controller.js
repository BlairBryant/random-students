module.exports = {
    postStudent: (req, res) => {
        const db = req.app.get('db')
        console.log(req.body.name)
        db.postStudent([req.body.name])
    },
    removeStudent: (req, res) => {
        const db = req.app.get('db')
        db.removeStudent([req.params.name])
    },
    getStudents: (req, res) => {
        const db = req.app.get('db')
        db.getStudents().then(students => {
            res.status(200).send(students)
        })
    },
    updateYes: (req, res) => {
        const db = req.app.get('db')
        const {student} = req.body
        for ( let i = 0; i < student.length; i++) {
            console.log(student)
            db.updateYes([student[i].id, student[i].yes])
        }
    },
}
