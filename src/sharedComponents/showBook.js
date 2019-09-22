import React from 'react';

class ShowBook extends React.Component {

    render () {
        return (
            <div className='container' key={this.props.bookData.id}>
                <div className="media">
                    <img className="mr-3" src={this.props.bookData.volumeInfo.imageLinks.thumbnail} />
                    <div className="media-body">
                        <h3 className="mt-0">{this.props.bookData.volumeInfo.title}</h3>
                        {this.props.bookData.volumeInfo.authors.map(author => {
                            return <span>{author},</span> 
                        })}
                        <h5>Published Date:{this.props.bookData.volumeInfo.publishedDate}</h5>
                    </div>
                </div>
            </div>
        )
    }
};

export default ShowBook;