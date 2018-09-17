function getFirstSelector(selector){
        return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function deepestChild(){
    const grandNode = document.querySelector('#grand-node');
    return grandNode.document.querySelector('div div div');
}
