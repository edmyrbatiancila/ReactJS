import Contact from "./Contact";

export default function App() {
    return(
        <div className="contacts">
            <Contact 
                img="./images/cat_1.jpg" 
                name="Mr. Whiskerson"
                contact="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/cat_2.jpg" 
                name="Fluffykins"
                contact="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/cat_3.jpg" 
                name="Felix"
                contact="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/cat_4.jpg" 
                name="Pumpkin"
                contact="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
        
    )
}