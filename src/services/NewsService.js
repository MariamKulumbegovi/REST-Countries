import axios from 'axios';

export const getNews = async () => {
  try {
    const result = await axios.get(
      `https://newsapi.org/v2/everything?apiKey=c412962716b14ed9853ae3a5ef240781`,
      {
        headers: {
          'X-Api-Key': 'c412962716b14ed9853ae3a5ef240781',
        },
        params: {
          q: 'apple',
          pageSize: 40,
        },
      }
    );

    console.log(result.data.articles, 'fromNewsService');

    return result.data.articles;
  } catch (error) {
    if (error) console.log(error, 'getNews');
  }
};
