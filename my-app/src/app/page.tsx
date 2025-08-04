import Nav from "./(Sections)/Nav";
import Main from "./(Sections)/Main";
import Blog from "./(Sections)/Blog";
import Footer from "./(Sections)/Footer";
import Animation from "./(Compornent)/Animation" ;
export default function Home() {
  return (
    <div>
      <Animation/>
       <div className=" w-full xl:w-[1084px] mx-auto">
   
      <Nav />
      
      <div className="sm:p-4">
        <Main />
      </div>
      
      <Blog/>

      <Footer/>

    </div>
    </div>
 
  );
}
