import React from 'react';
import Header from '../sharedComponents/header';
import SearchBar from '../sharedComponents/searchBar';
import ShowBook from '../sharedComponents/showBook';
 

class Home extends React.Component {

    render () {
        return (
            <div>
                <Header />
                <SearchBar />
                <ShowBook />
            </div>
        )
    }
};

export default Home;