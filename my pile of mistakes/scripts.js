var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://www.boredapi.com/api/activity/', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(activity => {
      console.log(activity.key)
    })
  } else {
    console.log('error')
  }
  }
}

// Send request
request.send()
