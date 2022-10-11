import React from "react";
import "./heroBanner.css"

export const HeroBanner = () => {
    return (
        <div id="HeroBanner">
            <h1 className="pt-5">HeroBanner</h1>
            {/* En lugar de usar class usamos className, y podemos meter clases de bootstrap y ya funciona */}
            <button>Click</button>
        </div>
    )
}