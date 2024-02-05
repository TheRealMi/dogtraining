import './nav.css'

function Nav() {
    return (
        <>
        <nav class="navbar has-shadow is-primary">
        <div>
            <a class="navbar-burger" id="burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
        <div class="navbar-menu is-active" id="nav-links">
            <a href="/" class="navbar-item navbar-front">Home</a>
            <div class="navbar-end">
                {/* check if logged in to display these*/}
                {/* <a href="/profile" class="navbar-item">Profile</a>
                <a href="#" id="logout" class="navbar-item">Logout</a> */}
                {/* if not logged in display the following */}
                <a href="/login" class="navbar-item">Login</a>
                <a href="/createaccount" class="navbar-item">Create Account</a>
                <a href="/feed" class="navbar-item">Feed<img src="images/feed bowl.png" width="60" height="70"/></a>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Nav;