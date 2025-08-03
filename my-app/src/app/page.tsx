import Nav from "./(Sections)/Nav";
import Main from "./(Sections)/Main";
import Blog from "./(Sections)/Blog";
import Footer from "./(Sections)/Footer";

export default function Home() {
  return (
    <div className=" w-full xl:w-2/4 mx-auto">
      <Nav />
      
      <div className="sm:p-4">
        <Main />
      </div>
      
      <Blog/>

      <Footer/>

    </div>
  );
}
