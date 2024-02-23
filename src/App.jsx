
import './App.css';

function App() {
 

  return (
    <div>
    <nav className="bg-red-400 py-4 px-8 flex justify-between items-center">
    
    <div className="flex items-center space-x-4">
       
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Logo" className="h-8"></img>
        
        <a href="#" className="hover:text-gray-500">Contact</a>
        <a href="#" className="hover:text-gray-500">About Us</a>
        <a href="#" className="hover:text-gray-500">Courses</a>
        
    </div>
    <div>
    <a href="#" className=' text-white border border-white px-4 py-2 rounded-lg'>Login</a>
    </div>
</nav>

<div className="mt-4 ml-28 bg-blue-500 text-white py-3 px-4 w-36 rounded-lg">
        Button One
      </div>

      <div className="mt-4 ml-28 mr-14 border border-red-600 bg-red-100 text-red-600 p-4 rounded">
        Alert! This is awesome!
      </div>

      

      <div className="mt-4  w-96 border ml-80 mr-40  bg-white  p-4 rounded shadow-md flex items-center">
        <img
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt="Store Logo"
          className="h-4 mr-4"
        />

      <div>
          <p className="font-bold">Kalvium Store</p>
          <p>You have a new course!</p>
        </div>
      </div>

      <div className="mt-4 border  bg-gray-200 text-black p-4 rounded">
      ©2021: Copyright:Kalvium
      </div>
      </div>

  )
}

export default App
