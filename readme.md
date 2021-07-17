create an application root level config folder

create password.js file in said config folder

contents should say:
 const password = "[URL OF MONGO DATABASE]"
 module.exports = password;

git rm -r --cached node_modules

git rm -r --cached package-lock.json