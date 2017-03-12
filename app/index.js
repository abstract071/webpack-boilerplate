import './scss/main.scss';
import './test';
//import 'babel-polyfill';
//require('./main.scss');
//require('./scss/ddd.scss');
//var component = require(`./component`);
//var component2 = require('./jade/ddd.jade');

document.body.innerHTML = '<h2 class="ui icon header">' +
    '<i class="settings icon"></i>' +
    '<div class="content">' +
    'Account Settings' +
    '</div>' +
    '</h2>';
//document.body.innerHTML = 'Howdy )';
document.body.appendChild(document.createElement('div'));
document.body.appendChild(document.createElement('div'));
document.body.appendChild(document.createElement('div'));

let i = 0;

if (module.hot) {
    module.hot.accept('./test', () => {
        let element = document.createElement('div');
        element.textContent = i;
        document.body.appendChild(element);
        i++;
    });
}