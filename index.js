const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");
const { Student } = require("./database");

const app = express();
app.use(express.json());

app.use(cors());

const studentPath = "/students";

app.get(studentPath, async (req, res) => {
    try {
        const result = await Student.find();
        const final = result.map(({ id, name, description }) => ({ id, name, description }));
        res.json({
            succes: true,
            result: final
        });
    } catch (error) {
        res.json({ succes: false, result: "db crashed" })
    }
});

app.post(studentPath, async (req, res) => {
    const { name, description } = req.body;
    const id = nanoid(5);
    try {
        if(!name || !description)
            throw new Error("Faltan datos");
        const saved = { id, name, description };
        const student = new Student(saved)
        const response = await student.save();
        res.json({ succes: true, result: saved });
    } catch (error) {
        res.json({ succes: false, result: error.message });
    }
});

app.put(studentPath, async (req, res) => {
    const { id, name, description } = req.body;
    try {
        if(!id) throw new Error("No enviaste el id prro >:v");
        let edited = null;
        if(name && description) {
            edited = await Student.findOneAndUpdate({ id }, { name, description })
        } else if(name) {
            edited = await Student.findOneAndUpdate({ id }, { name })
        } else if(description) {
            edited = await Student.findOneAndUpdate({ id }, { description })
        } else {
            throw new Error("Falta enviar que quieres editar");
        }
        if(edited) {
            const { id, name, description } = edited;
            res.json({ succes: true, result: { id, name, description} });
        } else {
            throw new Error("Falta enviar que quieres editar");
        }
    } catch (error) {
        res.json({ succes: false, result: error.message });
    }
})

app.delete(studentPath, async (req, res) => {
    const {id} = req.body;
    try {
        if(!id) throw new Error("No enviaste el id prro >:v");
        const deleted = await Student.findOneAndDelete({ id });
        res.json({ succes: true });
    } catch (error) {
        res.json({ succes: false, result: error.message });
    }
})


app.listen(process.env.PORT || 4001, () => console.log("server running..."));