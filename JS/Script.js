//document.body.style.background="red"
//document.getElementById("heading").innerHTML="Java class";
//document.getElementsByClassName("test").innerHtml="HTML"

// HW
// Create cart page and revise functions in javascript and DOM also.

//ABCDEFG G se nikla Gandhiji, Gandhiji ne kaya peru, peru nikla Nehru, Nehru ne kaya pan
//Pan se nikla pakistan, Pakistan ne mara 4, 4 se nikla chor, chor ne pakadi catch, India jeeti match


//Thank you for reading


// searchBar.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    searchInput.addEventListener('input', handleSearch);
  
    function handleSearch() {
      const query = searchInput.value.toLowerCase();
      const results = performSearch(query);
      displayResults(results);
    }
  
    function performSearch(query) {
      // Example search logic
      const products = [
        'Product 1',
        'Product 2',
        'Product 3',
        'Another Product',
        'Some Product'
      ];
  
      const results = products.filter(product =>
        product.toLowerCase().includes(query)
      );
  
      return results;
    }
  
    function displayResults(results) {
      searchResults.innerHTML = '';
  
      results.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.textContent = result;
        searchResults.appendChild(resultElement);
      });
    }
  });
  