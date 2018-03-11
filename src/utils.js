export function getDeepProperty(obj,propstr) {
    var prop = propstr.split('.');
    for (var i=0; i<prop.length; i++) {
        if (typeof obj === 'object')
            obj = obj[prop[i]];
    }
    return obj;
}

export function getListBooks (arrBooks, keySearch){
    const resultSearch = [];
    arrBooks.forEach(item => {
            if (item.get('name').toLowerCase().includes(keySearch.toLowerCase())) {
                resultSearch.push(item.get('id'));
            }
        }
    );
    return resultSearch;
}