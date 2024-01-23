import "./homepage.css"

function Homepage() {
    return (
        <>
        <section class="hero is-primary">
        <div class="hero-body top-part">
            <p class="title is-justify-content-center">PAWGRESS.COM</p>
        </div>
        </section>

        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    "Sorry my dogs are barking"
                </p>
            </div>
        </section>

        <section class="hero">
            <div class="hero-foot"> 

                <img align="left" src="images/dogs.jpeg"/>

                <article class="message is-primary">
                    <div class="message-body">
                    Welcome to our cozy corner of the internet, where tails wag and good behavior is celebrated! :feet: At Pawgress, we are passionate about helping you and your furry friend embark on a journey of positive change together. Our mission is simple: to create a hub for dog lovers like you, where you can track your pup’s behavior progress and become part of a vibrant community that shares the same love and
                    dedication for their four-legged companions.
                    </div>
                </article>

                <div class="mt-6">
                    <button id="login" class="button is-white"><img id="signin page" src="images/login.png" width="200px" height="150px"/></button>
                </div>

                <div class="mt-6">
                    <button id="create" class="button is-white"><img id="signup page" src="images/createaccount.png" width="200px" height="150px"/></button>
                </div>
                </div>
        </section>

        <nav class="level">
            <div class="level-item">
                <img id="paw-watermark" src="images/dog-paw.png"/>
            </div>
        </nav>
        </>
    );
};

export default Homepage;