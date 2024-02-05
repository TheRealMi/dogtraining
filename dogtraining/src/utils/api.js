export default {
    login: ({username, password}) => {
        return fetch("/api/users/login", {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    },
    signup: ({username, password, email, pet_name, breed}) => {
        return fetch("/api/users", {
            method: 'POST',
            body: JSON.stringify({ username, password, email, pet_name, breed }),
            headers: { 'Content-Type': 'application/json' }
        })
    },
    createPet: ({name, breed}) => {
        return fetch("/api/pets", {
            method: 'POST',
            body: JSON.stringify({ name, breed }),
            headers: { 'Content-Type': 'application/json' }
        })
    },
    getPets: () => {
        return fetch("/api/pets")
        //format raw data to json format
        .then (response => response.json())
    },
    getBehaviors: () => {
        return fetch("/api/behaviors")
        .then (response => response.json())
    },
    createBehavior: ({name, description, pawgress, pet_id}) => {
        return fetch("/api/behaviors", {
            method: 'POST',
            body: JSON.stringify({ name, description, pawgress, pet_id }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
 }