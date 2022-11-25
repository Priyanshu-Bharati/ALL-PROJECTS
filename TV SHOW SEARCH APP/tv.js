const form = document.querySelector('#formm');
const divv = document.querySelector('#container')
const btn = document.querySelector('#btn')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const key = form.elements.input.value;
    const config = {params:{q:key}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);   
    makeImages(res.data)
    form.elements.input.value = '';
    // removeSecondClick();
    // document.body.remove(imgg)
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

// const removeSecondClick = () => {
//     divv.addEventListener('submit', function(){
//         divv.remove(imgg);
//     })
// }

// divv.addEventListener('submit',function(e){
//     e.target.remove();
// })

// e.target.nodeName === divv &&