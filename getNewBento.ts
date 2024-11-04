const apiUrl =
  "https://opbento.edgexhq.tech/api/bento?n=Anish%20Biswas&g=xeven777&x=xevebiswas&l=anishbiswas777&i=https%3A%2F%2Fblastro.netlify.app%2Fassets%2Fanish.webp&p=anish7.me&z=a3a2f";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
