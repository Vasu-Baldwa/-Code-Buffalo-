var LoginPart = React.createClass({
    render: function() {
      return (
        <div>
          <title>Log In</title>
          <link rel="stylesheet" type="text/css" href="css/login.css" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <section className="main">
            <div className="content-box">
              <div className="welcome">
                <h1>Sign Up</h1>
              </div>
              <div className="action">
                <form>
                  <input name="username" placeholder="Username" type="text" />
                  <input name="password" placeholder="Password" type="text" />
                  <button type="button" name="button" />
                </form>
              </div>
            </div>
          </section>
        </div>
      );
    }
  });