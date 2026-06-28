
let About = ({name, age, children}) => {
  console.log(name, age, children);
  return (
     <nav>
  <h1>Hey, I'm about</h1>;
  {children}
  </nav>
  )
   
};

export default About;
