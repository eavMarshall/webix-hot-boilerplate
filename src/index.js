
const data = {
  id:'app'
}
var view = webix.ui(data);

const loadLogin = ()=>{
  import("./Views/Login").then((LoginView)=>{
      for (var key in webix.ui.views)
        webix.$$(key).destructor();

      view = webix.ui(LoginView.data);
  }).catch((err)=>{
      console.error(err)
  })
}

setTimeout(loadLogin, 2000);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept();
  for (var key in webix.ui.views)
    webix.$$(key).destructor();
  view = webix.ui(data);
  webix.extend($$("app"), webix.ProgressBar);
  $$("app").showProgress({
    type:"icon"
 });
}