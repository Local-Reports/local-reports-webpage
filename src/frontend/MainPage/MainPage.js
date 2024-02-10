import React from "react";

const MainPage = ({ onRouteChange }) => {
    return (
        <div>
            <div>Identify Yourself</div>
            <div>
                <input
                    type="submit"
                    value="Police"
                    onClick={() => onRouteChange('police')}
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Civilian"
                    onClick={() => onRouteChange('civilian')}
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Map Visualization"
                    onClick={() => onRouteChange('map')}
                />
            </div>
        </div>
    );
};

export default MainPage;