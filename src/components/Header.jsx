import React from 'react';
import Button from 'react-bootstrap/lib/Button';



function Header() {
  return (

    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightblue;
          color: blue;
        }
        .color-toggle:hover {
          background-color: lightpink;
          color: red;
        }
        `}</style>
      <div className="color-toggle">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
              <Button bsStyle="danger">Danger</Button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
