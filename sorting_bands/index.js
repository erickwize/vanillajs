function insertUnOrderedListItem(ul, item) {
    const li = document.createElement('li');
    const textNode = document.createTextNode(item);
    li.appendChild(textNode);
    ul.appendChild(li);
}

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['the', 'a', 'an'];
const pattern = /((the|a|an|) |\s)/g;

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

bands.sort((first, second) => {
    const firstWithoutArticles = first.toLocaleLowerCase().replace(pattern, '');
    const secondWithoutArticles = second.toLocaleLowerCase().replace(pattern, '');

    return firstWithoutArticles.localeCompare(secondWithoutArticles);
}).forEach(band => insertUnOrderedListItem(ul, band));
