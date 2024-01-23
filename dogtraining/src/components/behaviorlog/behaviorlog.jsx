import 'bulma/css/bulma.min.css';

function Behaviorlog() {
    return (
        <>
            <div className="container">
                <section className="section box">
                    <h2 className="title is-2">Add new session</h2>
                    <div className="block">
                        <h4 className="title is-4">Name your session:</h4>
                        <input
                            id="title"
                            className="input is-info"
                            style={{ width: '33%' }}
                            type="text"
                            placeholder="Summary"
                            value=""
                            onChange=""
                        />
                    </div>
                    <div className="block">
                        <h4 className="title is-4">Tell us about your paw-gress:</h4>
                        <textarea
                            id="notes"
                            className="textarea is-info"
                            placeholder="Session Notes"
                            value=""
                            onChange=""
                        ></textarea>
                    </div>
                    <div className="block">
                        <h4 className="title is-4">Show us what you've got!</h4>
                        <h4 className="subtitle is-6">Add a picture or video of your session:</h4>
                        {/* Add file input here if needed */}
                    </div>
                    <div className="block level-right">
                        <button
                            id="training submit btn"
                            className="button is-info"
                            onClick=""
                        >
                            Submit
                        </button>
                    </div>
                </section>
            </div>
            <section className="section">
                <div className="container">
                        <article className="message">
                            <div className="message-header">
                                <p>session title</p>
                                <button
                                    className="delete"
                                    aria-label="delete"
                                    onClick={() => handleDeleteSession(index)}
                                ></button>
                            </div>
                            <div className="message-body">
                                <p>session notes</p>
                                <p>session date</p>
                            </div>
                        </article>
                </div>
            </section>
        </>
    )
}

export default Behaviorlog;