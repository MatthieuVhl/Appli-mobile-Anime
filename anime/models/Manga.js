
class Manga{
    constructor(
        id,
        categorieIds,
        title,
        imageUrl,
        saisons,
        episodes
    ){
        this.id = id;
        this.categorieIds = categorieIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.saisons = saisons;
        this.episodes = episodes;
    }
}

export default Manga