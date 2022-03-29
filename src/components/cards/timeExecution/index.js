import React from "react";
import "./style.css";

const timeExecution = () => {
    return(
        <div className="container">
            <h3 className="content">Tempo de execução</h3>
            <div className="counter">
                <h1 className="number">71</h1><h2 className="number">seg</h2>
            </div>
        </div>
    );
}

export default timeExecution;
