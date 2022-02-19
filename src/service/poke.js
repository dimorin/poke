class Poke{
    async getPoke(query){
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, requestOptions).then(response => response.json());
        return result;
    };
    async getPokeAll(){
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon`, requestOptions).then(response => response.json());
        return result;
    };
    async getType(query){
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = query ? `https://pokeapi.co/api/v2/type/${query}` : "https://pokeapi.co/api/v2/type";
        const result = await fetch(url, requestOptions).then(response => response.json());
        return result;
    }
}
export default Poke;