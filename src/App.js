import React from "react";
import { useDispatch } from "react-redux";

import { fetchAuthMe } from "./redux/slices/auth";

import { Routes } from "./routes";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <>
            <Routes isAuthorized={true} />
        </>
    );
}

export default App;
