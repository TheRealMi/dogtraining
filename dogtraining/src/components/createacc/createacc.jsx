import "./createacc.css"
import 'bulma/css/bulma.min.css';

function Createacc() {
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
                    <form>
                        <div className="column is-12">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <button className="button is-fullwidth is-warning" type="button">
                                        Username
                                    </button>
                                </div>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Username" />
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
                                    <input className="input" type="email" placeholder="Email" />
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
                                    <input className="input" type="password" placeholder="Password" />
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
                                    <input className="input" type="text" placeholder="Pet Name" />
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
                                    <input className="input" type="text" placeholder="Breed" />
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
            <script src="js/signup.js"></script>
        </>
    )
}

export default Createacc;