import React from "react";

const Calculator = () => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <input type="text" placeholder="calcular" />
            </div>
            <div className="d-flex ">
                <div className="btn-group-vertical text-center" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                </div>
            </div>
        </div>
    )
};

export default Calculator