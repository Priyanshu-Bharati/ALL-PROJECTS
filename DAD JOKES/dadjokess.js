const btn = document.querySelector('#btn');
const ul = document.querySelector('#ul');

const getJoke = async() => {
    const store = await getDadJokes();
    const newLI = document.createElement('li');
    newLI.append(store);
    ul.append(newLI);
}

const getDadJokes = async() => {
    try{
        const config = {headers:{Accept : 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
    }catch(e){
        return "NO JOKES AVAILABLE!:("
    }
    
}

btn.addEventListener('click', getJoke)