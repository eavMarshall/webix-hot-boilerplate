
var data = {
  view:"form", width:400,
  elements:[
      { view:"segmented",
        options:["General Info", "History"]
      },
      { view:"text",
        value:"Gothenburg!"
      },
      { view:"text",
        value:"Barrington Court 112"
      },
      { view:"text",
        value:"€ 3 860 000"
      },
      { view:"datepicker",
        value: new Date(2017,8,1)
      }
  ]
}
webix.ui(data);

if (module.hot) {
    module.hot.accept();
    for (var key in webix.ui.views)
      webix.$$(key).destructor();
    webix.ui(data);
}
  