// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Todoli = ({ props }) => {
//     let { state, setstate, loader, setloader } = props

//     let [updateVal , setupdate] = useState("")
//     let [array, setarry] = useState([])
//     let [indexval, setindex] = useState()

//     const getdata = async () => {
//         setstate(false)
//         await axios.get("http://localhost:5000/api/todo/get")
//             .then((response) => {
//                 var { data } = response
                
//                 setarry([...data])



//             })
//             .catch((err) => {
//                 console.log(err);

//             })
//     }

//     useEffect(() => {
//         getdata()


//     }, [state])


//     const deleteOne = (id) => {
//         setstate(true)

//         axios.delete(`http://localhost:5000/api/todo/delete:${id}`)

//             .then((response) => {
//                 console.log(response);


//             })
//             .catch((err) => {
//                 console.log(err);

//             })

//     }
//     const EditeOne = (ind ) => {
//         setindex(ind)
//         console.log(indexval);
//         setupdate("")

//         setstate(true)
        
//     }
//     const update = (id)=>{
//         setstate(true)

//         setindex()
//         setupdate("")
//         let obj2 ={
//             todo:updateVal
//         }
        
        
//                 axios.patch(`http://localhost:5000/api/todo/update:${id}`, obj2 )
        
//                     .then((response) => {
//                         console.log(response);
        
        
//                     })
//                     .catch((err) => {
//                         console.log(err);
        
//                     })

//                 }
//                 return (

//         <>
       
//             {
//                 !array ?
//                     <div className="mainlicontainer">



//                         <div className="liContainer">
//                             <ul>




//                             </ul>

//                         </div>
                        
//                     </div> : <div className="mainlicontainer">



//                         <div className="liContainer">


//                             <ul>
//                                 {array.map((element, index) => {
                                   
//                                     return index===indexval? (

                                        

                                        
//                                         <li key={index}><input value={updateVal} onChange={(e) => setupdate(e.target.value)} className="w-75 p-2" type="email" placeholder="Enter email" />
//                                         <div>
                                            
//                                             <button variant="danger" className='edit-btn' onClick={() => update(element._id)} >update</button>
//                                         </div>
//                                         </li>
                                        
                                        

//                                         ):
                                        
//                                         <li key={index}>{element.todo} 
//                                         <div>
//                                             <button onClick={() => deleteOne(element._id)} variant="danger">Delete</button>
//                                             <button variant="danger" onClick={() => EditeOne( index)} >Edit</button>
//                                         </div>
//                                         </li>

//                                 })}





//                             </ul>

//                         </div>
//                     </div>

//             }
//         </>
//     )
// }
// export default Todoli;