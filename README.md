# Webix hot reload boilerplate
This boilerplate doesn't manage the state of the webix app. You will need to implement this yourself
## Aim
To create a boiler plate to have:
- Webix
- Dev build (with hot module loading)
- Production build
- - Auto generated html document
- - Auto generate hash values on js files
- - Minified
- - Lazy loading modules (Separate modules, download modules when needed)
- External CDNs
- Update dependency to latest version

Build 
```
npm run-script build
```
Dev build/ hot reload
```
npm start
```

## Build
```
npm run-script build
```
Auto generate hash, updates html and chuncks project into smaller bundles
![Alt text](https://eavmarshall.github.io./react-redux-hot-boilerplate/BundleHashAndChunks.png "")

To include chunk import using import()
```javascript
  import("./Views/Login/LoginView").then((loginModule)=>{
      const LoginView = loginModule.default;
      this.setState({ currentView : <LoginView /> })
  }).catch((err)=>{
      console.error(err)
  })
```
This will break you bundle up and generate a chunk/bundle name. Referencing the module file "./Views/Login/LoginView" is how you lazy load that module into your app.

Build to \dist folder

## Questions
Why lazy load?
- Keep the inital load into your app small, you should keep as many modules out of your entry point as possible. You can then import them into your app when that module is needed. This will greatly increase your initial load of any module, as you will only be downloading what you need to complete the current task.

Why add hash value to js bundle names?
- A different file will generate a different hash name. This will force your browser to ignore cache versions of your app, and download and use the newest version.

Why not bundle vendor code?
- Vendor code doesn't usually change very often. This why you can update your app, and with new hash name values your javascript files, your users can downloaded your newest version of your app, without having to redownload all that vendor code again.

Why generate html from a template?
- because the entry js file will have a different hash per build, I don't want to have to update the index.html every time I create a new build

## Acknowledgement
Starting point from https://github.com/gaearon/react-hot-loader/
