class Hit {
    constructor(d) {
        this.id = d.id;
        this.photo = d.author.photo;
        this.name = d.author.name;
        this.title = d.hit.title;
        this.file = d.hit.file;
        this.others = d.author.others;
        this.category = d.category;
        this.otherCategories = d.otherCategories; 
    }
}