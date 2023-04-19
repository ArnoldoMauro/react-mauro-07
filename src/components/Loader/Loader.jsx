import React from 'react';
import './loader.css';
import { Ring } from '@uiball/loaders'


function Loader() {
return(
    <Ring 
 size={80}
 lineWeight={5}
 speed={2} 
 color="black" 
/>
)
}
export default Loader;