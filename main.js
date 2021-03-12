const getData = () => {
    return fetch(
      "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json"
    )
      .then((response) => response.json())
    //   .then((data) => {
    //     return data;
    //   });
    
}

const HTMLwomen = (inventorObj => {
    return (`
        <article id="womenInventorCard">
        <h2 class="inventor-name">${inventorObj.inventor}</h2>
        <p class="inventor-Invention">Invented &rArr; ${inventorObj.invention}</p>
        <a class="inventor-link" href="${inventorObj.moreDetails}">More Details about this Woman Inventor</a>
        </article>
    `) 
});


const womenInventorList = ( inventorData => {
    let HTMlforDOM = "";
    for (const item of inventorData) {
        HTMlforDOM += HTMLwomen(item);
    }
    return HTMlforDOM;
})

const DOMTarget = document.querySelector("#womenInventors");

const showWomenInventorList = () => {
    getData().then(allwomenInventors => {
        DOMTarget.innerHTML = womenInventorList(allwomenInventors);
    })
}

showWomenInventorList();







