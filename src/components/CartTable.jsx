// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { TableFooter } from "@mui/material";
// import DeleteIcon from "../images/delete.png";
// import { Link } from "react-router-dom";
// import { ClientContext } from "../context/ClientProvider";


// export default function CartTable({ cart }) {
//   const { changeCountCartProduct, deleteProductInCart } =
//     React.useContext(ClientContext);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Brand</TableCell>
//             <TableCell align="right">Type</TableCell>
//             <TableCell align="right">Image</TableCell>
//             <TableCell align="right">Count</TableCell>
//             <TableCell align="right">SubPrice</TableCell>
//             <TableCell align="right">#</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {cart.products.map((item) => (
//             <TableRow
//               key={item.product.id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {item.product.name}
//               </TableCell>
//               <TableCell align="right">{item.product.brand}</TableCell>
//               <TableCell align="right">
//                 <Link to={`/product/${item.product.id}`}>
//                   <img width="60" src={item.product.image} alt="product" />
//                 </Link>
//               </TableCell>
//               <TableCell align="right">
//                 <input
//                   onChange={(event) => {
//                     if (event.target.value < 1) {
//                       return;
//                     }
//                     changeCountCartProduct(event.target.value, item.product.id);
//                   }}
//                   type="number"
//                   value={item.count}
//                   min="1"
//                 />
//               </TableCell>
//               <TableCell align="right">{item.subPrice}</TableCell>
//               <TableCell align="right">
//                 <img
//                   style={{ cursor: "pointer" }}
//                   width="30"
//                   src={DeleteIcon}
//                   alt="del-icon"
//                   onClick={() => deleteProductInCart(item.product.id)}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell>Total price:</TableCell>
//             <TableCell>{cart.totalPrice}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }