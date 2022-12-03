import React, { useEffect, useState } from "react";
import "./backend.css"
import axios from "axios";


function UserBeackend() {
    const [bdata, setBdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/details")
            .then(res => {
                setBdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <h1 className="first-heading">This data fetch From Backend</h1>
            {
                bdata.map(bdata =>
                    <div className="" key={bdata.id}>
                        <div className="main-container">
                            <h1 className="container-title">{bdata.title}</h1>
                            <img className="container-Image" src={bdata.Image}></img>
                            <div className="container-des">{bdata.description}
                                <h3 className="container-cate">{bdata.category}/{bdata.date}</h3>
                            </div>
                        </div>
                        <hr className="bottom-line"></hr>
                    </div>
                    
                )
            }
        </>
    )
}

export default UserBeackend;

// import { Component } from "react";
// import axios from "axios";

// class UserBeackend extends Component {
//     state = {
//         DataList: []
//     };
//     componentDidMount() {
//         axios.get(DataRouter.route("/details/data"))
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({
//                     DataList: response.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//         console.log("fetching Data")
//     };
//     render() {
//         return (
//             <>
//             <div>
//                 <h1>All Data Get fetched.</h1>
//             </div>
//             {this.state.DataList.map(
//                 (item) => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <div>{item.Image}</div>
//                         <h4>{item.description}</h4>
//                         <p>{item.category}</p>
//                         <p>{item.date}</p>
//                     </div>
//                 )
//             )

//             }
//             </>
//         )
//     }
// }

// // function Backend () {
// //     const [Use, setUse] = useState([]);

// //     useEffect(() =>{
// //         fetch("/user/").then( res =>{
// //             if(res.ok){
// //                 return res.json()
// //             }
// //         }).then(jsonRes => setUse(jsonRes.id))
// //     })
// //     return(
// //         <>
// //         <div className="">
// //             {Use.map(user => <div>
// //                <div>{index.title}</div>
// //                <div>{index.Image}</div>
// //                <div>{index.description}</div>
// //                <div>{index.category}</div>
// //                <div>{index.date}</div>
// //             </div>)}
// //         </div>
// //         </>
// //     )
// // }

// // export default Backend;


