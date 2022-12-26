import  {useState}   from "react";

export function User() {
  console.log(useState("welcome to user component"));
  const [message, setMessage] = useState("welcome to user component");
//   message is var name
//  setState is function changing name [ we can change object(message) values using setState]
// useState is going to return string and method and this is one of the function in React

  return (
    <div>
      <h2> {message}</h2>
      <button
        onClick={() => {
          setMessage("Iam Changed by SetMessage");
        }}
      >
        Change Message
      </button>
    </div>
  );
}
