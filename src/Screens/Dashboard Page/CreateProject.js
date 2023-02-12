import React from 'react';
import { Link } from 'react-router-dom';

function CreateProjectScreen(props) {
    return (
        <>
            <div>
                <h1>Dashboardx Page</h1>
                <Link to="/verification"><button>Main Screen</button> </Link>
                <Link to="/updateprofile"><button>click here to login</button> </Link>

            </div>
        </>

    )
}
export default CreateProjectScreen;