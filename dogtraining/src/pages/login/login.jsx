import './login.css';
import {useState} from "react";
import Api from "../../utils/api";

function Login() {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })
    function handleSubmit (event) {
        event.preventDefault();
        Api.login(formState)
        .then (response => {
            if (response.ok) {
                window.location.replace("/profile")
            }
            else {
                window.alert("Invalid Login")
            }
        })
    }
    return (
        <>
        <section class="hero">
            <div class="hero-body">
                <p class="title">
                    SHOW ME MY PAWGRESS!
                </p>
            </div>
        </section>

    <br></br>

    <div class="container">
        <div class="columns is-centered">
            <form onSubmit={handleSubmit}>
                <div class="column is-12">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <a class="button is-fullwidth is-warning">
                            Username
                            </a>
                        </div>
                        <div class="control">
                            <input name="username" value={formState.username} class="input" type="text" placeholder="Username" onChange={(event)=>setFormState({ ...formState, username: event.target.value})}/> 
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <a class="button is-fullwidth is-warning">
                            Password
                            </a>
                        </div>
                        <div class="control">
                            <input name="password" value={formState.password} class="input" type="password" placeholder="Password" onChange={(event)=>setFormState({...formState, password: event.target.value})}/> 
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="mt-6 has-text-centered">
                    <button class="button is-white"><img id="signin" src="./images/signin.png" width="200px" height="150px"/></button>
                </div>
                <br></br>
                <div class="mt-6 has-text-centered">
                    <button class="button is-white">Forgot Password?</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

export default Login;