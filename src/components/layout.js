import Footer from "./footer"


export default function Layout ({ children }){
  return(
    <div className="">
     <div className="min-h-[90vh] h-[90vh] overflow-scroll [margin-bottom:2em] mb-16"> {children} </div>
     <Footer />
    </div>
    )
}