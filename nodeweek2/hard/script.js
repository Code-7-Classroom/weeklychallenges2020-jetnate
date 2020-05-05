let express = require('express')

let app = express()

let data = require('./employees.json')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

app.post('/employees', (req, res) => {
    const employee = {
        name: req.query.name,
        id: data.employees.length + 1,
        salary: req.query.salary,
        department: req.query.department
    };
    data.employees.push(employee);
    res.send(employee)
});

app.get('/', function (req, res) {

    res.send("hello world")
})
app.get('/employees', (req, res) => {

    if (!data) {
        res.status(404).send(`Couldn't find the employees`)

    }
    res.send(data)
})
app.get('/employees/:id', (req, res) => 
{
    const sData = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee id`)
    }
    res.send(sData)
})


app.put('/employees/:id', function (req, res) {
    const employee = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee ID`)
    }
        employee.name = req.body.name,
        employee.salary = req.body.salary,
        employee.job = req.body.job
    res.send(employee)
});

app.delete('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the student id`)
    }
    const index = data.employees.indexOf(sData)
    data.employees.splice(index, 1)
    res.send(sData)
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
