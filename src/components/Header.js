import React from 'react'

function Header(props) {
    return (
        <header>
            <h1>
                {props.name}
            </h1>
        </header>
    )
}

export default Header

// Make a Header component as a child of App. It should return:

// a <header> element with the following elements inside:
// a <h1> with the name of the blog, passed as a prop