export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
    
        const data = await result.json();
        return this.checkEmpty(data);
    };

    checkEmpty(obj) {

        for (let item in obj) {
            if (obj[item] === '') {
                obj[item] = "no data :("
            }
        }

        return obj;
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    async getAllCharcters() {
        const result = await this.getResource('/characters?page=5&pageSize=10');

        return result.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const result = await this.getResource(`/characters/${id}/`);
        return this._transformCharacter(result);
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        }
    }

    async getAllHouses() {
        const result = this.getResource(`/houses/`)
        return result.map(this._transformHouse);
    }

    getHouse(id) {
        const result = this.getResource(`/houses/${id}/`)
        return this._transformHouse(result);
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            country: book.country,
            released: book.released,
        }
    }

    getAllBooks() {
        const result = this.getResource(`/books/`);
        return result.map(this._transformBook);
    }

    getBook(id) {
        const result = this.getResource(`/books/${id}/`);
        return this._transformBook(result);
    }
}