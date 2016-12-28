module.exports = (app) => {
  
  app.get('/', (req, res)=>{
    res.send(
      `<form method="post" action="/formsubmit"><input name="email" type="email"> <input type="submit"></form>`
//       "Well, Helloo!! "
    )
  })
  
  app.post(`/formsubmit`, (req, res)=>{
    res.redirect(`/success`);
  })
  
  app.get(`/success`, (req, res)=>{
  res.send("Success!")
  })
}

