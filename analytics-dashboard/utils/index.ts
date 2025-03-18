import { news } from "@/types";

export const removeDuplicateData = (articles: any) => {
  // Ensure articles.articles exists and is an array
  const randomArticle: news[] = articles?.articles ?? [];

  // Only filter if randomArticle is an array
  const filterArticles = randomArticle.filter(article => article?.source?.id !== null);
  
  return filterArticles;
};
