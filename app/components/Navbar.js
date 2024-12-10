import React from 'react';

const Navbar = ({ onCategoryChange, onSearch }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-warning" href="#">News34</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {['general', 'business', 'sports', 'entertainment', 'technology'].map(category => (
                            <li className="nav-item" key={category}>
                                <a className="nav-link" onClick={() => onCategoryChange(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex" onSubmit={onSearch}>
                        <input className="form-control me-2" type="text" id="newsQuery" placeholder="Search news" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;