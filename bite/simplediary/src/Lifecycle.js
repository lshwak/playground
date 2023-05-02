import React,{useEffect, useState} from 'react';

const UnMountTest = () => {

    useEffect(() => {
        console.log("Mount!");

        return() => {
            // UnMount시점에 실행.
            console.log("UnMount!");
        };
    }, []);

    return <div>UnMount Testing Component</div>
};

const Lifecycle = () => {
    const[isVisible,setIsVisible] = useState(false);
    const toggle = () => {setIsVisible(!isVisible)};

    return (
        <div style={{padding: 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnMountTest />}
        </div>
    );
};

export default Lifecycle;


