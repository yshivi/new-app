import { useState, useEffect, createContext } from 'react'
import { Grid, Pagination, Backdrop, CircularProgress } from '@mui/material';
import NewsCard from './Componets/newsCard';
import Header from './Componets/header';
import Categories from './Componets/categories';
import SortBy from './Componets/SortBy';
import './index.css'

export const LanguageContext = createContext('en')

function App() {
  const [backdrop, setBackdrop] = useState(true)
  const [language, setLanguage] = useState("en")
  const [newsList, setNewsList] = useState([true])
  const [category, setCategory] = useState("Business")
  const [sortBy, setSortBy] = useState("relevancy")
  const [page, setPage] = useState(1)
  useEffect(() => {
    // fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=18fc95f877b84bc3b5334d36c71220c1&pageSize=20&language=${language}&page=${page}&sortBy=${sortBy}`)
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=0a23b4ef5605484291c3793f238887a0&pageSize=15&language=${language}&page=${page}&sortBy=${sortBy}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setBackdrop(false)
        return setNewsList(data.articles)
      })
  }, [language, page, category, sortBy])
  function setLanguageClick() {
    if (language === "en") {
      setBackdrop(true)
      setLanguage("es")
    }
    else {
      setLanguage("en")
    }
  }
  function handleChanagePage(event, value) {
    window.scrollTo(0, 0)
    setPage(value)
    setBackdrop(true)
  }
  function changeCategory(categorys) {
    setCategory(categorys)
    setBackdrop(true)
  }

  function handleChange(event) {
    setBackdrop(true)
    setSortBy(event.target.value);
  }

  return (
    <div className="main-container">
      {<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>}
      <LanguageContext.Provider value='language'>
        <SortBy sortBy={sortBy} handleChange={handleChange}/>
        <Header setLanguaseClick={setLanguageClick} language={language} />
        <Categories changeCategory={changeCategory} />
        <Grid container spacing={4}>
          {newsList.length && newsList.map((newsItem, index) => {
            return <Grid item xs={4} key={index}>
              <NewsCard newsItem={newsItem} />
            </Grid>
          })}
        </Grid>
      </LanguageContext.Provider >
      <Pagination count={5} shape="rounded" onChange={handleChanagePage} className='setPage' />
    </div>
  )
}

export default App

