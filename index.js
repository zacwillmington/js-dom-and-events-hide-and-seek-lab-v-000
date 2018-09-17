function getFirstSelector(selector){
        return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){


    const rankedLists = document.querySelectorAll('.ranked-list')
    const firstList = rankedLists[0]
    const secondList = rankedLists[1]

    let childElementsOfFirstList = firstList.children
    let childElementsOfSecondList = secondList.children
    let allKids = childElementsOfFirstList + childElementsOfSecondList;
    console.log(childElementsOfFirstList);
    for(let i = 0; i < allKids.length; i++){
             allKids[i].innerHTML = parseInt(allKids[i].innerHTML) + 3; 
        };


}
