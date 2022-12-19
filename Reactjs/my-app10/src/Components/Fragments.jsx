function ParentFragComponent(){
    return <h2> This is Called Fragments <>...</> </h2>
}
  function ChildFragComponent(){
    return <h2> Hello Everyone</h2>
}
export default function MainFragComponent(){
     return <>
     {/* <div>  */}
     <h2> This text inside the Fragments</h2>
     <ChildFragComponent/>
     <ParentFragComponent/>
     </>
    //  </div> we can use div also
    
}
