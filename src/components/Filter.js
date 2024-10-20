import React, { useState } from 'react';
import './filterStyles.css';

const Filter = () => {
    const [isTypesOpen, setTypesOpen] = useState(false);
    const [isPriceOpen, setPriceOpen] = useState(false);
    const [isNurseryOpen, setNurseryOpen] = useState(false);
    const [isLocationOpen, setLocationOpen] = useState(false);
    const [isIndoorOutdoorOpen, setIndoorOutdoorOpen] = useState(false);
    const [isMaintenanceOpen, setMaintenanceOpen] = useState(false);
    const [isSizeOpen, setSizeOpen] = useState(false);
    const [isWaterScheduleOpen, setWaterScheduleOpen] = useState(false);
    const [isColorOpen, setColorOpen] = useState(false);
    const [isSeasonalOpen, setSeasonalOpen] = useState(false);

    const toggleSection = (setStateFunc) => {
        setStateFunc((prevState) => !prevState);
    };

    return (
        <div className="filter-container">
            <div className="filter-actions">
                <button className="filter-button">Filter</button>
                <button className="clear-button">Clear</button>
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setTypesOpen)}>
                    Types of Plants <span>{isTypesOpen ? '-' : '+'}</span>
                </h4>
                {isTypesOpen && (
                    <ul className="filter-options">
                        <li>Flowering</li>
                        <li>Succulents</li>
                        <li>Foliage</li>
                        <li>Herbs</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setPriceOpen)}>
                    Price <span>{isPriceOpen ? '-' : '+'}</span>
                </h4>
                {isPriceOpen && (
                    <div className="filter-options">
                        <input type="range" min="0" max="1000" />
                    </div>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setNurseryOpen)}>
                    Nursery <span>{isNurseryOpen ? '-' : '+'}</span>
                </h4>
                {isNurseryOpen && (
                    <ul className="filter-options">
                        <li>Green Nursery</li>
                        <li>Urban Nursery</li>
                        <li>Plant Haven</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setLocationOpen)}>
                    Ideal Plants Location <span>{isLocationOpen ? '-' : '+'}</span>
                </h4>
                {isLocationOpen && (
                    <ul className="filter-options">
                        <li>Balcony</li>
                        <li>Living Room</li>
                        <li>Office</li>
                        <li>Garden</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setIndoorOutdoorOpen)}>
                    Indoor/Outdoor <span>{isIndoorOutdoorOpen ? '-' : '+'}</span>
                </h4>
                {isIndoorOutdoorOpen && (
                    <ul className="filter-options">
                        <li>Indoor</li>
                        <li>Outdoor</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setMaintenanceOpen)}>
                    Maintenance <span>{isMaintenanceOpen ? '-' : '+'}</span>
                </h4>
                {isMaintenanceOpen && (
                    <ul className="filter-options">
                        <li>Low</li>
                        <li>Moderate</li>
                        <li>High</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setSizeOpen)}>
                    Plant Size <span>{isSizeOpen ? '-' : '+'}</span>
                </h4>
                {isSizeOpen && (
                    <ul className="filter-options">
                        <li>Small (0-1 feet)</li>
                        <li>Medium (1-3 feet)</li>
                        <li>Large (3+ feet)</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setWaterScheduleOpen)}>
                    Water Schedule <span>{isWaterScheduleOpen ? '-' : '+'}</span>
                </h4>
                {isWaterScheduleOpen && (
                    <ul className="filter-options">
                        <li>Once a Week</li>
                        <li>Twice a Week</li>
                        <li>Daily</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setColorOpen)}>
                    Color <span>{isColorOpen ? '-' : '+'}</span>
                </h4>
                {isColorOpen && (
                    <ul className="filter-options">
                        <li>Green</li>
                        <li>Red</li>
                        <li>Yellow</li>
                        <li>White</li>
                    </ul>
                )}
            </div>

            <div className="filter-section">
                <h4 className="filter-header" onClick={() => toggleSection(setSeasonalOpen)}>
                    Seasonal <span>{isSeasonalOpen ? '-' : '+'}</span>
                </h4>
                {isSeasonalOpen && (
                    <ul className="filter-options">
                        <li>Spring</li>
                        <li>Summer</li>
                        <li>Fall</li>
                        <li>Winter</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Filter;
