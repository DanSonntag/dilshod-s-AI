export const sendMessageToAI = async (message) => {
    const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '644f580fa1msh7b4949b883fa3f1p196caejsn6190c076107a',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: message }],
        web_access: false,
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.result || "Sorry, I couldn't get a response.";
    } catch (error) {
      console.error('Error communicating with AI:', error);
      return 'Error: Could not get a response.';
    }
};  
