import './login.css'

function Login() {
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
            <form>
                <div class="column is-12">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <a class="button is-fullwidth is-warning">
                            Username
                            </a>
                        </div>
                        <div class="control">
                            <input class="input" type="text" placeholder="Username"/> 
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
                            <input class="input" type="password" placeholder="Password"/> 
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