"use client";
import { useEffect, useState } from 'react'
import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Business = () => {
  const [filterArticles, setFilterArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const newsWorld = await getNewsSearch("business")
      const filtered = removeDuplicateData(newsWorld)
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

export default Business
