import {FC, ReactNode, useState } from 'react';
import SearchButton from './components/SearchButton';
import SearchDataFetch from './components/SearchDataFetch';
import SearchBar from './components/SearchBar';
import PlagiarismChecker from './components/PlagiarismChecker';
import './styles/App.css'
import Container from './components/Container';
import LiteratureReview from './components/literature_review';
import LiteraturePopup from './components/literature_popup';
import ReferencePopup from './components/ReferencePopup';



const App:FC = ()=>{
  const [searchRes,setSearchRes] = useState<unknown>(null)
  const [customLR,setCustomLR] = useState<boolean>(false)
  const [customRef,setCustomRef] = useState<boolean>(false)
  const [query, getQuery] = useState('');
  const [Searching, setSearchState] = useState<boolean>(false)
  const [engine, setEngine] = useState('semantic')

  // This function get the query from the search bar
  const handleSearchInputChange = (e) => {
    getQuery(e.target.value);
    setSearchState(false)
    
  };
  // This function set the Research results output
  const handleSearchButtonClick = (e) => {
    setEngine(e.target.value)
    getQuery(query);
    setSearchState(true)
  };
  const handleViewLiterature = () =>{
    setCustomLR(true)
  }
  const handleViewRef = () =>{
    setCustomRef(true)
  }
  return (
    <main>
    <Container>
      <h1>Search tools</h1> 
      <SearchBar value={query} onChange={handleSearchInputChange} />
      <div className='search-buttons'>
        <SearchButton label="arxiv" onClick={handleSearchButtonClick} />
        <SearchButton label="archive" onClick={handleSearchButtonClick} />
        <SearchButton label="semantic" onClick={handleSearchButtonClick} />
      </div>
      <SearchDataFetch searchEngine={engine}  isSearching={Searching} query={query} onFetch={setSearchRes} />
    </Container>

    
    <Container>
    {(searchRes as ReactNode) && (
     <LiteratureReview query={query} />
    )}
    </Container>
    <Container>
    <PlagiarismChecker />
    <button className='view-custom-lr-btn' onClick={handleViewLiterature}>Create Custom Literature Review</button>
    <button className='view-custom-lr-btn' onClick={handleViewRef}>Create Custom references list</button>
    {customLR && (
    <LiteraturePopup onExit={setCustomLR}  />
    )}
    {customRef && (
    <ReferencePopup onExit={setCustomRef}  />
    )}
    </Container>
    </main>
  );
}

export default App;
