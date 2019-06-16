var IndexPart = React.createClass({
  render: function() {
    return (
      <div>
        <title>Welcome!</title>
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <section className="main">
          <div className="content-box">
            <div className="welcome">
              <h1>Welcome 👋</h1>
              <p>This is the —app, a system that gives you something to do when you’re bored!</p>
            </div>
            <div className="action">
              <a href="#" />
              <a href="login.html" />
            </div>
          </div>
        </section>
      </div>
    );
  }
});