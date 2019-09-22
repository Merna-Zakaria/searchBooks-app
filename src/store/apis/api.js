import React from 'react';
import axios from 'axios';

class api extends React.Component {

   static fetchSearchResult = async searchValue => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`);

   static fetchSingleBook =  async bookID => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookID}`)

};

export default api;