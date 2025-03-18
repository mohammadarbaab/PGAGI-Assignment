// RandomNews.js (Client Component)
import { useEffect, useState } from 'react'
import { getNewsSearch } from '../pages/api'
import { removeDuplicateData } from '../utils'

const RandomNews = () => {
  const [filterArticles, setFilterArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const randomNews = await getNewsSearch("random news")  // async/await inside useEffect
      const filtered = removeDuplicateData(randomNews)
      setFilterArticles(filtered)
    }
    
    fetchData()
  }, [])

  return (
    <div>
      {filterArticles.map((article, idx) => (
        <RandomArticle key={idx} data={article} />
      ))}
    </div>
  )
}

export default RandomNews
