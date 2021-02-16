import React from "react";
import imageLoading from '../../../assets/image/LoaderImage.svg'

export const Loader = () => {
    return (
        <div>
            <img src={imageLoading} alt={'Loader'}/>
        </div>
    );
}

