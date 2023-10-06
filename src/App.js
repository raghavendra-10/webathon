import React from 'react';
import './App.css';
import CardComponent from './components/Card';


function App() {
  return (
    <>
    <div className="App">
      <header className="flex justify-between items-center p-4 bg-blue-500">
        <div className="flex space-x-4">
          <img src="/path-to-image1.jpg" alt="Image1" className="w-16 h-16"/>
          <img src="/path-to-image2.jpg" alt="Image2" className="w-16 h-16"/>
        </div>
        <div className="flex space-x-4">
          <button className="text-white">Home</button>
          <button className="text-white">Login</button>
          <button className="text-white">Contact Us</button>
        </div>
      </header>
      
      <main className="p-10">
        <section className="text-center my-10">
          <h1 className="text-5xl font-bold">XYZ College Placement Section</h1>
        </section>

        <section className="flex flex-inline justify-around">
            <CardComponent />
        </section>
      </main>
    </div>
  </>
  );
}

export default App;