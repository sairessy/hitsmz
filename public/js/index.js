let data = new Data().data;

let hits = [];

data.forEach(d=> {
    hits.push(new Hit(d));
});


const putHits = ()=> {
    let items = '';
    
    for (let i = 0; i < hits.length; i++) {
        const id = hits[i].id;
        const photo = hits[i].photo == "" ? 'rap' : hits[i].photo;
        const title = hits[i].title;
        const name = hits[i].name;
        const file = hits[i].file;
        const others = hits[i].others;

        let singers = '';

        if(others.length > 0) {
            others.forEach(o=> {
                singers += `<a href="singer.html?tag=${o}">${o}</a>`; 
            });
        }

        items += `
            <div class="item" id="${id}" style="background-image: url();">
                <h2>${title} - ${name}</h2>

                <div class="others-singers">${singers}</div>
                
                <a href="singer.html?tag=${name}" class="cover" style="background-image: url(assets/img/photos/${photo}.png)"></a>

                <div class="controllers">
                    <!--<a class="btn-download" href="assets/sounds/hits/${id}.mp3" download="${title} - ${name}"><i class="fa fa-download"></i></a>-->
                    <a class="btn-play" id="${id}" href="${file}" target="_blank"><i id="${id}" class="fa fa-pause"></i></a> 
                    <!-- <a class="btn-share" id="${id}"><i id="${id}" class="fa fa-share" href="#"></i></a> -->
                </div>
            </div>
        `;
    }

    $('#items').html(items);
}

putHits();