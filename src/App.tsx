import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions', // URL for OpenAI API
        {
          model: 'text-davinci-003', // Use the model you prefer
          prompt: 'Hello, ChatGPT!', // Replace with your prompt
          max_tokens: 50, // Limits the length of the response
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Your API key
          },
        }
      );
      console.log(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

  return (
    <div className="bg-neutral-900 w-full h-screen text-white">
      <h1 className="text-3xl">Hello there</h1>
    </div>
  );
};

export default App;
