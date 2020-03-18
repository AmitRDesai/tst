var zipFolder = require('zip-folder');
 
zipFolder('./node_modules', './archive.zip', function(err) {
    if(err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT');
    }
});