const apiUrl = "https://opbento.vercel.app/api/bento?name=Anish&githubURL=xeven777&twitterURL=xevenbiswas&linkedinURL=anishbiswas777&imageUrl=https%3A%2F%2Fblastro.netlify.app%2Fassets%2Fanish.webp&portfolioUrl=anish7.me";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};


// @ts-expect-error
fetchBentoUrl(apiUrl);
