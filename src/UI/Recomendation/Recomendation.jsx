import React from "react";
import "./Recomendation.scss"
import { useLocation } from 'react-router-dom'

const Recomendation = (items) => {
    const location = useLocation()
	const navItems = items.items
	return (
        <div className="recommendation">
            {navItems.map(item => {
                return (
                    <div key={item.key} className={"item " + (location.pathname === item.path ? "active" : "")} >
                        {item.key}
                    </div>
                )
            })}
        </div>
    );
};

export default Recomendation;
