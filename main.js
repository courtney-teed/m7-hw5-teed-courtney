var main = document.createElement('main');
main.classList.add('text-center');

var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);
var headerText = document.createTextNode('This is the header text!');
header.appendChild(headerText);
header.classList.add('blue');

var unorderedList = document.createElement('ul');
main.appendChild(unorderedList);

var listItem = document.createElement('li');
unorderedList.appendChild(listItem);
var listItemText = document.createTextNode('This is the list item');
listItem.appendChild(listItemText);

var link = document.createElement('a');
link.href = 'https://www.google.com';
var linkListItem = document.createElement('li');
linkListItem.appendChild(link);
unorderedList.appendChild(linkListItem);

var linkText = document.createTextNode('This is my link');
link.appendChild(linkText);

var notLinkListItem = linkListItem.previousElementSibling;