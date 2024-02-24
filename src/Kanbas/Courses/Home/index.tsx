import ModuleList from "../../Modules/List";
import "./index.css";
function Home() {
    return (
        <div>
            <div style={{display: 'flex', overflowX: 'auto', marginTop: '20px'}}>
                <div style={{marginRight: '20px'}}>
                    <h2>Home</h2>
                    <ModuleList/>
                </div>

                <div>
                <div>
                        <div className="p-4">
                            <h2>Course Status</h2>
                            <hr/>
                        </div>

                        <div className="black-text">
                            <button className="button-gray-vertical">
                                <i className="fa-solid fa-chart-simple"></i>View Course Stream
                            </button>
                            <button className="button-gray-vertical">
                                <i className="fa-solid fa-chart-simple"></i>New Analytics
                            </button>
                            <button className="button-gray-vertical">
                                <i className="fa-solid fa-calendar"></i>View Course Calendar
                            </button>
                            <button className="button-gray-vertical">
                                <i className="fa-solid fa-bell"></i>View Course Notifications
                            </button>
                        </div>
                        <br/>
                        <h4>To Do</h4>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;