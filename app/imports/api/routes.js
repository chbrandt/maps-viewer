import { Router } from 'meteor/iron:router';
// var fs = Npm.require('fs');

Router.configure({
 noRoutesTemplate: 'noRoutesTemplate',
});

// Router.route('/', function () {
//   this.render('Home');
// });

Router.route('/download/', function () {
  // NodeJS request object
  var request = this.request;
  // console.log(request);

  // NodeJS  response object
  var response = this.response;
  // console.log(response);

  this.response.end('<a href="/download/somefile.txt" download><img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Circle-icons-folder.svg" width=100 alt="Somefile"></a>');
}, {where: 'server'});

Router.route('/download/:file', function () {
  // NodeJS request object
  var request = this.request;
  // console.log(request);

  // NodeJS  response object
  var response = this.response;
  // console.log(response);

  const fs = typeof window === 'object'
      ? null
      : eval('require("fs")')

  var filepath = '/tmp/somefile.txt';
  if (fs.existsSync(filepath)) {
    console.log(fs);
    filetext = fs.readFileSync(filepath, 'utf-8');
  }

  this.response.end(filetext);
}, {where: 'server'});
