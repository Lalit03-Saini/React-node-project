import React, { useEffect, useState } from "react";


function UserBeackend() {
    const [bdata, setBdata] = useState([]);

    useEffect(() => {
        fetch("/details").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setBdata(jsonRes.id))
    })
    return (
        <>
            {
            bdata && bdata.length> 0  && bdata.map(data => <ul>
                <li>{data.title}</li>
                <li>{data.Image}</li>
                <li>{data.description}</li>
                <li>{data.category}</li>
                <li>{data.date}</li>
            </ul>)}
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


