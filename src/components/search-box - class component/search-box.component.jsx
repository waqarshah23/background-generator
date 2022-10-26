import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component{

    render(){

        return (
            <input 
            className={ `search-box ${this.props.searchClassName}`} 
            type='search' 
            placeholder={this.props.searchplaceholder} 
            onChange={this.props.onChangeHandler}/>
        )
    }
}

export default SearchBox;