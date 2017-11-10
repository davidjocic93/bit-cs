class Thing{
    constructor(name, avatarUrl, url, kind){
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._kind = kind;
        this._url = url;
    }

    get name(){
        return this._name;
    }

    get avatarUrl(){
        return this._avatarUrl;
    }

    get kind(){
        return this._kind;
    }

    getData() {
        return `${this._kind} name: ${this._name}\navatar: ${this._avatarUrl}\n`;
    }

    getName () {
        return `${this._name}`;
    }

    getAvatarUrl () {
        return `${this.avatarUrl}`;
    }

    getUrl () {
        return `${this._url}`;
    }
}

export default Thing;
