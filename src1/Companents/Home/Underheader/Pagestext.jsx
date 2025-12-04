import { Link } from "react-router-dom"

export const Pagestext = ()=>{
    return <ul className="text-white grid-cols-3 grid gap-4 *:w-10 *:bg-[#868688] *:rounded *:hover:bg-[#acacad] transition-all *:text-center">
         <Link to={"/pages/1"}><li>1</li></Link> 
         <Link to={"/pages/2"}><li>2</li></Link> 
         <Link to={"/pages/3"}><li>3</li></Link> 
         <Link to={"/pages/4"}><li>4</li></Link> 
         <Link to={"/pages/5"}><li>5</li></Link> 
         <Link to={"/pages/6"}><li>6</li></Link> 
         <Link to={"/pages/7"}><li>7</li></Link> 
    </ul>
}