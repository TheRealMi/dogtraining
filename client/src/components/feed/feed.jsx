import "./feed.css"

function Feed() {
    return (
        <>
            <section class="section">
        <div class="container">
            <div class="tile is-ancestor is-vertical">
                {/* loop through training sessions from database */}
                <div class="tile is-4 is-parent">
                    <div class="tile is-child">
                        <div class="card">
                            <div class="card-image">
                              <figure class="image is-4by3">
                                <img src="./images/{{training.imageFile}}" alt="Placeholder image"/>
                              </figure>
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <p class="title is-4">Pet Name</p>
                                  <p class="subtitle is-6">User</p>
                                  <p>Behavior Name</p>
                                </div>
                              </div>
    
                              <div class="content">
                                <p>Training Notes </p>                               
                                <br/>
                                <time>Time:Time</time>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Feed;