import React, {Suspense} from 'react';
import {Loader} from "../common/Loader/Loader";


export const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Loader/>}>
                <Component {...props}/>
            </Suspense>)
    }
};






