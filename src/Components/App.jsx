import "./App.scss";
import logo from "../assets/logo.png";
import chevron from "../assets/chevron.png";

function App() {
    return (
        <>
            <aside className="sidebar">
                {/* Toggle button */}
                <div className="sidebar__content">
                    <div className="sidebar__toggle">
                        <button>
                            <img src={chevron} alt="Toggle sidebar" />
                        </button>
                    </div>

                    {/* Logo or branding */}
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </aside>
        </>
    );
}

export default App;
