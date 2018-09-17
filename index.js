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
    let firstList = document.querySelectorAll('.ranked-list')[0]
    let secondList = document.querySelectorAll('.ranked-list')[1]

    let childElementsOfFirstList = firstList.children
    let childElementsOfSecondList = secondList.children

    console.log(childElementsOfFirstList);
    // childElementsOfFirstList.innerHTML.forEach(function (child){
    //         child = parseInt(child.innerHTML) + 3;
    //     }
    // );


}
