import React, {Fragment} from 'react';
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => (
    <Fragment>
        <Fragment>
            <Search/>
            <Users/>
        </Fragment>
    </Fragment>
);

export default Home;