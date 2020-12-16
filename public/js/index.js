const data = new Data().data;

let hits = [];

data.forEach(d=> {
    hits.push(new Hit(d));
});

let limInf = 0;
let limSup = 3;
const inc = 3;

const putHits = (lInf, lSup)=> {
    
    for (let i = lInf; i < lSup; i++) {
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

        const item = `
            <div class="item" id="${id}" style="background-image: url();">
                <h2>${title} - ${name}</h2>

                <div class="others-singers">${singers}</div>
                
                <a href="singer.html?tag=${name}" class="cover" style="background-image: url(assets/img/photos/${photo}.png)"><i class="fa fa-eye"></i></a>

                <div class="controllers">
                    <!--<a class="btn-download" href="assets/sounds/hits/${id}.mp3" download="${title} - ${name}"><i class="fa fa-download"></i></a>-->
                    <a class="btn-play" id="${id}" href="${file}" target="_blank"><i id="${id}" class="fa fa-pause"></i></a> 
                    <!-- <a class="btn-share" id="${id}"><i id="${id}" class="fa fa-share" href="#"></i></a> -->
                </div>
            </div>
        `;

        $('#items').append(item);
    }
}

// Init content
putHits(limInf, limSup);

// Pagination
$('button').click(()=> {
    limInf += inc;
    limSup += inc;
    
    if(limSup >= hits.length) {
        $('button').hide();
        putHits(limInf, hits.length);
    } else {
        putHits(limInf, limSup); 
    }

    setTimeout(() => {
        $('body, html').animate({
            scrollTop: scrollY + 300
        });
    }, 1000);

});