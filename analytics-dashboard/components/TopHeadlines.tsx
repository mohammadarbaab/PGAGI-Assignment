import { useEffect, useState } from 'react'
import { getNewsTopHeadlines } from '../pages/api'
import { removeDuplicateData } from '../utils'
import Article from './Article'

const TopHeadlines = () => {
  const [filterArticles, setFilterArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const newsTop = await getNewsTopHeadlines()
      const filtered = removeDuplicateData(newsTop)
      setFilterArticles(filtered)
    }

    fetchData()
  }, []) // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default TopHeadlines
