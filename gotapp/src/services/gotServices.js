export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
    
        return await result.json();
    };

    getAllCharcters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }

    getCharacter(id) {
        return this.getResource(`characters/${id}`);
    }
}