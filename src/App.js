import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('App Rendered');
  const [searchField, setSearchField] = useState(''); //[value , setvalue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monsters Rolodex');

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters)
  }, [monsters,searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();
    setTitle(titleFieldString? titleFieldString : 'Monsters Rolodex');
  }
  return (
    <div className="App">
    <h1 className='app-title'>{title}</h1>
      <SearchBox 
        searchClassName={'monster-search-box'} 
        searchplaceholder = {'search monsters'} 
        onChangeHandler={onSearchChange}
        />
      <SearchBox 
        searchClassName={'title-search-box'}
        searchplaceholder = {'set title'}
        onChangeHandler = {onTitleChange}
      />
      <CardList monster={filteredMonsters} />
    </div>
  )
}

export default App;
