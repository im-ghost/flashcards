import Footer from "./footer"


export default function Layout ({ children }) =>{
  return(
    <div className="">
     <div className="min-h-[90vh]"> {children} </div>
     <Footer />
    </div>
    )
}