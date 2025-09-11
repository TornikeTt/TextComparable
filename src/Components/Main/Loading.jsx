import { useState, useEffect } from "react";

function Loading({ start, setLoading }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!start) {
            return; // only run when start is true
        }

        setProgress(0); // reset progress on new start

        let current = 0;

        const interval = setInterval(() => {
            // increase randomly 1-5%
            current += Math.floor(Math.random() * 5) + 1;

            if (current >= 100) {
                current = 100;
                clearInterval(interval);

                setLoading(false);
            }

            setProgress(current);
        }, 200);

        return () => clearInterval(interval);
    }, [start]);

    return (
        <div className="loading-container">
            <div className="loading">
                <div className="loading-circle"></div>

                <div className="loading-state">
                    <small>Converting... Thank you for your patience</small>
                    <div className="progress">
                        <p>{`${progress}%`}</p>
                        <div className="loading-line">
                            <div
                                className="loading-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
