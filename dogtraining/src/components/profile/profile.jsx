import "./profile.css"
import 'bulma/css/bulma.min.css'

function Profile() {
    return (
        <>
            {/* Hero Section - Warning */}
            <section className="hero is-warning">
                <div className="hero-body">
                    <p className="p-title">
                        {`Hello there user`}
                    </p>
                </div>
            </section>

            {/* Render each pet as a card */}
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                {/* Pet Image */}
                                <figure className="image is-128x128">
                                    <img className="is-rounded" src="/images/joysit.jpg" alt='pet image' />
                                </figure>
                            </div>
                            <div className="media-content">
                                {/* Pet Name */}
                                <p className="title is-4">pet name</p>

                                {/* Pet Behaviors */}

                                    <div>
                                        <p className="subtitle is-4">behavior name</p>
                                        <div className="content">
                                            behavior description
                                            <br />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Profile;