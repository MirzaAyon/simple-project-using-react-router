import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? 'red' : 'black', textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"}  */}
            {/* active match ei likha ta shorae dilam jno active likha ta na dekhae */}
        </div>
    );
}







//linkprops take shorae fellam eta lagbe na karon eta types check korte use hy
//copy kore anar por ettuk prjntoe sudhu rakhbo


export default CustomLink;