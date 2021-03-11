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
        <h2 class="inventor-name">Inventor: ${inventorObj.inventor}</h2>
        <p class="inventor-Invention">Invention: ${inventorObj.invention}</p>
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

// const womanInventor = {
//   id: 1,
//   invention: "Circular saw",
//   inventor: "Tabitha Babbitt",
//   moreDetails:
//     "https://www.usatoday.com/story/money/2019/03/16/inventions-you-have-women-inventors-thank-these-50-things/39158677/",
//   quote: "",
//   details: "",
// };

// console.log(HTMLwomen(womanInventor))
// document.querySelector("#womenInventors").innerHTML = HTMLwomen(womanInventor)






