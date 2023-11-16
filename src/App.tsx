import React from 'react';
import NavBar from "./components/NavBar";
import imagePath from "./assets/image-books.png";



function App() {
  let items = ["Home","Product", "Service"];
  return (
    <div>
      <NavBar 
      imageSrcPath={imagePath} 
      navItems={items}/>
    </div>
  );
}
export default App;
