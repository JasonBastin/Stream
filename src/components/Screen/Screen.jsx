import React from 'react';
import "./Screen.css";

export default function Screen() {
    return (
        <div className="screen">
            <iframe 
                title='Reds Game'
                allow='encrypted-media'
                width='640'
                height='360'
                marginWidth='0'
                marginHeight='0' 
                scrolling='no'
                frameborder='0' 
                allowFullscreen='yes'
                src='//sportsbay.org/embed/108629/1/cincinnati-reds-kansas-city-royals-live.html'
            />
        </div>
    )
}
