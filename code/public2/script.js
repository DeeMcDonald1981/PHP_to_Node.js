document.addEventListener('DOMContentLoaded', function(){
  const movieTable = document.querySelector('#movieTable');
  
  const movies = {
    'Casablanca': 10,
    'To Kill a Mockingbird': 10,
    'The English Patient': 2,
    'Stranger Than Fiction': 9,
    'Story of the Weeping Camel': 5,
    'Donnie Darko': 7
  }
  
  movieTable.innerHTML =  `
  <thead>
    <tr>
      <th><h2>Rating</h2></th>
      <th><h2>TitleRating</h2></th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  `;
  const tbody = movieTable.querySelector('tbody')

  let tbodyOrigin = `<tr><td colspan="2"><strong>Original Order:</strong></td></tr>`; 
  tbody.innerHTML += tbodyOrigin;
  
  // Equivalent of PHP's foreach
  for(const[title, rating] of Object.entries(movies)){
    const row = `<tr><td>${rating}</td><td>${title}</td></tr>`;
    tbody.innerHTML += row;
  }

  // Sort by title (Equivalent of PHP's ksort()) 
  const sortedByTitle = Object.fromEntries(
    Object.entries(movies).sort((a,b)=> a[0].localeCompare(b[0]))
  );

  let tbodyHTML = `<tr><td colspan="2"><strong>Sorted by Title:</strong></td></tr>`; 
  tbody.innerHTML += tbodyHTML;
  for(const [title, rating] of Object.entries(sortedByTitle)){
    const row2 = `<tr><td>${rating}</td><td>${title}</td></tr>`;
    tbody.innerHTML += row2 ;
  }

  let tbodyHTML2 = `<tr><td colspan="2"><strong>Sorted by Rating:</strong></td></tr>`; 
  tbody.innerHTML += tbodyHTML2;

  // Sort by rating (Equivalent of PHP's arsort())
  const sortedByRating = Object.fromEntries(
    Object.entries(movies).sort((a,b) => b[1] -a[1])
  );;

  for(const [title, rating] of Object.entries(sortedByRating)){
    const row3 = `<tr><td>${rating}</td><td>${title}</td></tr>`;
    tbody.innerHTML += row3;
  }

})






