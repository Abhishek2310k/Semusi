import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Product from './Pages/Product/Product';
import Contact from "./Pages/Contact/Contact";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Page_not_found from "./Pages/Page_not_found/Page_not_found";
const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const data = [
  {
    id:1,
    src: ['https://imgs.search.brave.com/_gqd7FAjGX_RkarJbT1fVqRrRPceUY6pkVV8OcmcUwM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUyLzU0/LzgyLzUyNTQ4MmZh/YzM2Y2IxZDliMWVj/M2Q2YWM2ODQ0ZDNi/LmpwZw',""],
    alt: 'John Cena',
    address: '6 Oak Meadow Road Apt 52 Henrico, VA 23228',
    rooms: '2',
    type: "roommate",
    email: "abhishekku@iitbhilai.ac.in",
  },
  {
    id:2,
    src: ['https://imgs.search.brave.com/PzvvJcrsB55LiugcBiYt-zXuuxVU-nNIZOQAwQKaIts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIxLzEwLzE2/LzU1MHgzMDkvOGEx/MTg4NTgtMjZjZS0x/MWVjLTk3YWQtZGVm/MWZlYjEyYjA5XzE2/MzQ0MDkzMDc4NjIu/anBn',""],
    alt: 'Saumya Tandon',
    address: '42 Saxton Ave.San Carlos, CA 94070',
    rooms: '2',
    type: "roommate",
    email: "abhishekku@iitbhilai.ac.in",
  },
  {
    id:3,
    src: ['https://imgs.search.brave.com/N4nZSnI0ZelAp06DE17oj6woOIhV3VrnjAqkThnXvvI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bXJkdXN0YmluLmNv/bS9lbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8xMS9FbW1h/LVdhdHNvbi04NjR4/MTAyNC5qcGc',""],
    alt: 'Pragya',
    address: '95 North Peg Shop Dr. Allison Park, PA 15101',
    rooms: '1',
    type: "roommate",
    email: "abhishekku@iitbhilai.ac.in",
  },
  {
    id:4,
      src:["https://imgs.search.brave.com/oN93oc09p85zkNyuF4LuAc7EZaggJ6s7eWHAWenQ6NI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9icmlnaHQtbGl2/aW5nLXJvb20tbW9k/ZXJuLWx1eHVyeS1o/b3VzZV8zMDUzNDMt/MTAxMS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    "https://plus.unsplash.com/premium_photo-1672252617602-e5de5c6aba9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww"],
      alt: "Park Queen Apartments",
      address: "558 Thompson Dr.Rahway, NJ 07065",
      rooms: '4',
      type: "apartment",
      email: "abhishekku@iitbhilai.ac.in",
  },
  {
    id:5,
      src:["https://imgs.search.brave.com/mvOL5kuqxPH8ZpohbJz7VwsNZrsHSmjPsKMTiiysAdY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b3p5LXN0dWR5LXJv/b20tbW9kZXJuLWFw/YXJ0bWVudF8xODE2/MjQtNTcxNDMuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      alt: "Central Park Apartments",
      address: "421 Edgefield Road Danvers, MA 01923",
      rooms: "5",
      type:"apartment",
      email: "abhishekku@iitbhilai.ac.in",
  }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/products/apartment",
        element:<Products type="apartment" data={data}/>
      },
      {
        path:"/products/roommate",
        element:<Products type="roommate" data={data}/>
      },
      {
        path:"/offers",
        element: <Products data={data} type="" />
      },
      {
        path:"/product/:id",
        element:<Product data={data}/>
      },
      {
        path:"/contact/:id",
        element:<Contact data={data}/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
      {
        path:"*",
        element:<Page_not_found/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;