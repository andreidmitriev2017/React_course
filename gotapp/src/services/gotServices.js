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
    }

    checkEmpty = (data) => {
        return data ? data : 'no data :('
    }

    cutId = (str) => {
        return str.match(/\d+$/);
    }

    _transformCharacter = (char) => {
        return {
            id: this.cutId(char.url),
            name: this.checkEmpty(char.name),
            gender: this.checkEmpty(char.gender),
            born: this.checkEmpty(char.born),
            died: this.checkEmpty(char.died),
            culture: this.checkEmpty(char.culture),
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

    _transformHouse = (house) => {
        return {
            id: this.cutId(house.url),
            name: this.checkEmpty(house.name),
            region: this.checkEmpty(house.region),
            words: this.checkEmpty(house.words),
            titles: this.checkEmpty(house.titles),
            overlord: this.checkEmpty(house.overlord),
            ancestralWeapons: this.checkEmpty(house.ancestralWeapons),
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

    _transformBook = (book) => {
        return {
            id: this.cutId(book.url),
            name: this.checkEmpty(book.name),
            numberOfPages: this.checkEmpty(book.numberOfPages),
            publisher: this.checkEmpty(book.publisher),
            country: this.checkEmpty(book.country),
            released: this.checkEmpty(book.released),
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