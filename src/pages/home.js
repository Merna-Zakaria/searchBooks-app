import React from 'react';
import Header from '../sharedComponents/header';
import SearchBar from '../sharedComponents/searchBar';
import ShowBook from '../sharedComponents/showBook';
import { connect } from 'react-redux';

 

class Home extends React.Component {
    renderBooks=()=>{
        if(this.props.searchResult.searchResult){
            console.log("render list",this.props.searchResult.searchResult)
            return this.props.searchResult.searchResult.map( bookData => {
                console.log(bookData)
                return(
                    <div key={bookData.id} className='mb-5'>
                        <ShowBook bookData={bookData}/>
                        </div>
                    )
                })
        }
    }

    render () {
        // console.log("hello from render homeee",this.props.searchResult.searchResult)
        // if(!this.props.searchResult){
        //     return <div>Loading00000</div>
        // }
        return (
            <div>
                <Header />
                <SearchBar />
               {this.renderBooks()}
           
            {/* {this.props.searchResult.searchResult.map( bookData => {
               console.log(bookData)
               return(
                   <div>
                       <ShowBook bookData={bookData}/>
                       </div>
                   )
               })}  */}
           
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { searchResult : state.searchResult }
};

export default connect(mapStateToProps)(Home);