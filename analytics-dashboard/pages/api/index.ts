// const apiKey = "804b5ac5eb154a81ad4dc4b10ada6b7f";
// console.log("this is api key",apiKey); // Check if the key is loaded correctly


// export const getNewsTopHeadlines = async () => {
//   const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,{cache:"no-store"})
//   console.log("data api",newsData)
//   return newsData.json()
// }

// export const getNewsSearch = async (keyword:string) => {
//   const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${keyword}&pageSize=10`,{cache:"no-store"})
//   return newsData.json()
// }


const apiKey = "804b5ac5eb154a81ad4dc4b10ada6b7f";
console.log("This is the API key:", apiKey); // Log API key to check if it’s loaded correctly

export const getNewsTopHeadlines = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const newsData = await response.json();
    console.log("Data from API:", newsData); // Log the API data to inspect it
    return newsData; // Return the news data from the API
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return { articles: [] }; // Return an empty array in case of an error
  }
};

export const getNewsSearch = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${keyword}&pageSize=10`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const newsData = await response.json();
    return newsData; // Return the news data from the API
  } catch (error) {
    console.error("Error fetching news search:", error);
    return { articles: [] }; // Return an empty array in case of an error
  }
};
