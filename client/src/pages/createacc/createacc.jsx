import "./createacc.css"
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import Api from "../../utils/api.js";

function Createacc() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        breed: ""
    })
    function handleSubmit(event) {
        event.preventDefault()
        Api.signup(formState)
        .then (response => {
            if (response.ok){
                window.location.assign("/profile")
            }
            else {
                window.alert("Signup Unsuccessful")
            }
        })
    }
    return (
        <>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">
                        SHOW ME MY PAWGRESS!
                    </p>
                </div>
            </section>

            <br /><br />

            <div className="container">
                <div className="columns is-centered">
                    <form onSubmit={handleSubmit}>
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Username
                                    </button>
                                </div>
                                <div className="control">
                                    <input name="username" value={ formState.username } onChange={ (event) => setFormState({...formState, username:event.target.value})} className="input" type="text" placeholder="Username" />
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Email
                                    </button>
                                </div>
                                <div className="control">
                                    <input name="email" value={ formState.email } onChange={ (event) => setFormState({...formState, email:event.target.value})} className="input" type="email" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Password
                                    </button>
                                </div>
                                <div className="control">
                                    <input name="password" value={ formState.password } onChange={ (event) => setFormState({...formState, password:event.target.value})} className="input" type="password" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        {/* Add other form fields as needed */}
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Pet Name
                                    </button>
                                </div>
                                <div className="control">
                                    <input name="name" value={ formState.name } onChange={ (event) => setFormState({...formState, name:event.target.value})} className="input" type="text" placeholder="Pet Name" />
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Breed
                                    </button>
                                </div>
                                <div className="control">
                                    <input name="breed" value={formState.breed} onChange={ (event) => setFormState({...formState, breed:event.target.value})} className="input" type="text" placeholder="Breed" />
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="mt-6 has-text-centered">
                            <button className="button is-white">
                                <img id="signup" src="./images/create.png" alt="Create Account" width="250px" height="150px" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Createacc;