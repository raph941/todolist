import React from 'react'

function About() {
    return (
        //you use the react fragment like a ghost element when you donw want to you a DIV to hold all your stuffs
        // however it woulkd not be displayed in your dom ooo, so we r happy
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList App verion 1.00 </p>
        </React.Fragment>
    )
}

export default About;