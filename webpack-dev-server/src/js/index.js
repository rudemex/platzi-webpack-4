import '../css/index.css';
import text from './test';

text();

if(module.hot){
    module.hot.accept('./test.js', function () {
        console.log("hot")
        text()
    })
}