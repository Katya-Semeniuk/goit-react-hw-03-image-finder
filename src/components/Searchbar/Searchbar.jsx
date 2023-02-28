import React, {Component } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// import PropTypes from 'prop-types';



class Searchbar extends Component {
  state = {
    searchQuery: '',
  }
handleSubmit = e => {
 const { searchQuery } = this.state;
  e.preventDefault();

  if(searchQuery.trim() === '' ){
    toast.error("Write correct name")
    return;
  }
 this.props.onSubmit(this.state.searchQuery);
 this.setState({searchQuery: ''});


};
//   async handleSubmit (e) { 
//     const { searchQuery, page } = this.state;
//     e.preventDefault();
//     console.log('Form submit')
// const url = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
   
//     try {
//        const response = await axios.get(url);
//       ;
      
//     }
//     catch (error) {
//       console.log(error.message);
//     }

//     this.props.onSubmit(this.state.searchQuery);
//   };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
    <header className='searchbar'>
        <form onSubmit={this.handleSubmit} className='form'>
        <button type="submit" className='button'>
          <div className='search_icon'>
            <SearchIcon />
          </div>
        </button>
          <input
            onChange={this.handleNameChange}
      className='input'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
      </form>
  </header>
    )
  }
};
 
export default Searchbar;


// ContactList.propTypes = {
//    arrayContact:PropTypes.arrayOf(PropTypes.shape({
//     id:  PropTypes.oneOfType([ PropTypes.string,PropTypes.number]),
//     name: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
//     number: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
//     })),
// }


// Filter.propTypes = {
//     value:PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
// }
