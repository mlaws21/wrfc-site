import React from "react";

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
                
//                 <div onClick={() => this.setState({open: true,})}> 
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

function Login() {
    return (
        <div>
            <h1>404 Page Not Found</h1>

            {/* <Hidden /> */}
        </div>
    )
}
export default Login;