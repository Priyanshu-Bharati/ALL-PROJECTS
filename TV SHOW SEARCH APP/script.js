const form = document.querySelector('#formm');
const divv = document.querySelector('#container')
const btn = document.querySelector('#btn')
const refreshButton = document.getElementById('refreshButton');

// Add a click event listener to the button
refreshButton.addEventListener('click', function() {
  // Reload the page
  location.reload();
});



form.addEventListener('submit', async function(e){
    e.preventDefault();
    const key = form.elements.input.value;
    if(key!=null){
        const config = {params:{q:key}}
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);   
        makeImages(res.data)
        form.elements.input.value = '';
    }else {
        document.body.style.backgroundColor = "white";
    }
})


const makeImages = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const imgg = document.createElement('img');
            imgg.src = result.show.image.medium;
            divv.append(imgg);
        }
    }
}