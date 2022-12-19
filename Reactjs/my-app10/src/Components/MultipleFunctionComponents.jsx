  function ParentComponent(){
    return <h2> This is Multiple Functional components...</h2>
}
  function ChildComponent(){
    return <h2> This is Child Functional Component</h2>
}
export default function MainComponent(){
     return <h2> This is about Main Functional Component</h2>
}
export {
    ParentComponent,ChildComponent
}