import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    <div>
      <h2>Meu Primeiro Componente em React</h2>
      
      {/*Hierarquia entre componentes*/}
      <MyComponent/>
    </div>
  );
};

export default FirstComponent;