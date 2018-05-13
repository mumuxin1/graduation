module.exports = function (app, conn) {
  const queryString = require('querystring')

  app.post('/register', (req, res) => { // 注册
    res.header('Access-Control-Allow-Origin', '*')
    let data = queryString.stringify(req.body) // %7B%22phoneRegister%22%3A%22545645%22%2C%22passwordValue%22%3A%2254646%22%7D=
    let data2 = data.substr(0, data.length - 1)
    let data3 = queryString.unescape(data2) // 解码
    let data4 = JSON.parse(data3)
    let post = {
      phone: data4.phoneRegister,
      pwd: data4.passwordValue
    }

    conn.query('insert into loregint set ?', post, function (err, rs) {
      if (err) {
        console.log(err.message)
      } else {
        res.send('ok')
      }
    })
  })
  app.post('/login', (req, res) => { // 注册
    res.header('Access-Control-Allow-Origin', '*')
    let data = queryString.stringify(req.body) // %7B%22phoneRegister%22%3A%22545645%22%2C%22passwordValue%22%3A%2254646%22%7D=
    let data2 = data.substr(0, data.length - 1)
    let data3 = queryString.unescape(data2) // 解码
    let data4 = JSON.parse(data3)

    conn.query('SELECT * FROM  loregint WHERE phone = ' + data4.phoneRegister +' && pwd = ' + data4.passwordValue, function (err, rs) {

      if (err) {
        console.log(err.message)
      } else { 
        if (rs[0]) {
          res.send('1') // 成功
        } else {
          res.send('0')
        }
        
      }
    })
  })
}