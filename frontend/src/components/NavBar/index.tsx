import React from 'react';
import { ReactComponent as GitIcon } from 'assets/img/git.svg'
import "./styles.css"

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/HenriqueMarques12" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GitIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;