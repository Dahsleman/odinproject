body {
    background-color: powderblue;
}

h1 {
    color: #333;
}

:root {
    --grid-cols: 0;
    --grid-rows: 0;
    --my-custom-property:transparent
}
  
#grid {
    display: grid;
    grid-template-rows: repeat(var(--grid-rows), 20px);
    grid-template-columns: repeat(var(--grid-cols), 20px);
    
}

.comands {
    margin-top: 20px;
}
.grid-container {
    display: grid;
    margin:0 auto;
    width: 6in;
    height: 6in;
    padding:5px;
    border-radius: 5px;   
    background-color: white; 
    justify-content: center;
    box-shadow: 5px 10px #888888;
}

.grid-item {
  border: 1px solid rgb(204, 199, 199);
  background-color: var(--my-custom-property);
}


/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
    margin:0 auto;
    margin-bottom: 10px;
    width: 6in;
    padding:5px;
    border-radius: 5px;
  }
  
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
