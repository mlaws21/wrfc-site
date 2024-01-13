// import React from "react";
// // var x = "test"
// var pword = ""
// function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();

//     // Read the form data
//     const form = e.target;
//     const formData = new FormData(form);


//     // You can pass formData as a fetch body directly:
//     // fetch('/some-api', { method: form.method, body: formData });

//     // // Or you can work with it as a plain object:
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson["pword"]);
//     pword = formJson["pword"]
    
// }



// class Hidden extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//         }

//     }

    
//     renderOpen() {
//         return (
//             <h1>OPEN</h1>
//         )
//     }

//     renderClosed() {
//         return (
//             <div>
//                 <form method="post" onSubmit={handleSubmit}>
//                 <label>
//                     Text input: <input name="pword" defaultValue="Some initial value" />
//                 </label>
//                 <hr />
//                 {/* <button type="submit">Submit form</button> */}
//                 </form>
//                 {/* {() => if (pword == "whitedawgs69") {
//                     this.setState({open: true,})
//                 }} */}
//                 <div onClick={() => handleSubmit(pword)}> 
//                     Login
//                 </div>
//             </div>

            
//         )
//     }

//     render() {
//         if (this.state.open) {
//             return this.renderOpen();
//         } else {
//             return this.renderClosed();
//         }

//     }
// }

// function Login() {
//     return (
//         <div>
//             <h1>404 Page Not Found</h1>

//             <Hidden />
//         </div>
//     )
// }
// export default Login;