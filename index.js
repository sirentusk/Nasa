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


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Retrieve a value from KV
  const value = await Space.get("someKey");
  
  // Check if the value exists
  if (value === null) {
    return new Response("Key not found", { status: 404 });
  }

  // Respond with the value
  return new Response(value, {
    headers: { 'content-type': 'text/plain' },
  });
}
