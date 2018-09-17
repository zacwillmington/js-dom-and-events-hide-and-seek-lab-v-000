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

    console.log(childElementsOfFirstList);
    for(let i = 0; i < childElementsOfFirstList.length; i++){
             childElementsOfFirstList[i] = "hi" //parseInt(childElementsOfFirstList[i].innerHTML) + 3;
        };


}
