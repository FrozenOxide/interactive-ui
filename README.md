## commands used to get to this stage

```bash
npm init -y
npm install react react-dom --save
npm install webpack webpack-dev-server babel-loader @babel/preset-react @babel/preset-env --save-dev
npx eslint --init
```

## how to use this package
in root dir:

```bash
npm install
```
## how to find where webpack-dev-server is serving the bundle.js

* after ```runing webpack-dev-server --hot```, navigate to http://localhost:8080/webpack-dev-server, and find the bundle.js file.
* compare it's path and manipulate "public path" in webpack.config.js as necessary.