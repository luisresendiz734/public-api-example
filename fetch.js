// Base URL
const URL = "https://escom-frontend-course.herokuapp.com/students"


// GET
const get = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

// POST
const post = async () => {
    const name = "Tony Stark"
    const description = "I'm Iron-man!"
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, description })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

// PUT
const put = async () => {
    const id = "<student-id>"
    const name = "Tony Stark"
    const description = "I'm Iron-man!"
    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ id, name, description })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

// DELETE
const delete = async () => {
    const id = "<student-id>"
    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
