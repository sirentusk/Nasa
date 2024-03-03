addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // URL to your NEOWISE_Dataset.json on GitHub
  const datasetUrl = 'https://raw.githubusercontent.com/yourusername/yourrepository/main/NEOWISE_Dataset.json';

  // Fetch the dataset
  const response = await fetch(datasetUrl);
  const data = await response.json();

  // Process the data as needed
  // For example, return the data or a part of it as a response
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  });
}
