import React from 'react';
import "./Screen.css";

export default function Screen() {
    return (
        <div className="screen">
            <iframe 
                title='UFC 264'
                allow='encrypted-media'
                width='800'
                height='450'
                marginWidth='0'
                marginHeight='0' 
                scrolling='no'
                frameBorder='0' 
                allowFullScreen='yes'
                src='//sportsbay.org/embed/112574/1/scottish-open-live.html'
            />
        </div>
    )
}
