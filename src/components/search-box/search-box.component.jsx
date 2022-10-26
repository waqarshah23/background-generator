import './search-box.styles.css';
const SearchBox = ({searchClassName,searchplaceholder,onChangeHandler}) => {

        return (
            <input 
            className={ `search-box ${searchClassName}`} 
            type='search' 
            placeholder={searchplaceholder} 
            onChange={onChangeHandler}/>
        )
}

export default SearchBox;