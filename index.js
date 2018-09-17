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
    let childElementsOfSecondList = SecondList.children

    childElementsOfFirstList.forEach(function (child){
            child.innerHTML = parseInt(child.innerHTML) + 3;
        }
    );


}
