const data = 
{ cols:[
  {},
  { rows: [
    {},
    {
      view:"form", 
      id:"log_form",
      width:300,
      elements:[
          { view:"text", label:"Email", name:"email"},
          { view:"text", type:"password", label:"Password", name:"password"},
          { margin:5, cols:[
              { view:"button", value:"Login" , type:"form"},
              { view:"button", value:"Cancel"}
          ]}
      ]
    },
    {}
    ] },
  {}
] }


export { data };