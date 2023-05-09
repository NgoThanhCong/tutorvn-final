import React from "react";
import { privateUserRoute } from "../utils/privateRoute";

const Home = () =>
{
    return <div className='dark:text=white' >Home</div>
};

export default privateUserRoute(Home);