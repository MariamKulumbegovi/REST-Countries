// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import { withCountries } from "../../../hoc/withCountries";

//  const Pagination =({countries}) =>{
//     const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);
//     function PaginatedItems({ itemsPerPage }) {
      
        
    
//         useEffect(() => {
//           // Fetch items from another resources.
//           const endOffset = itemOffset + itemsPerPage;
//           console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//           setCurrentItems(countries.slice(itemOffset, endOffset));
//           setPageCount(Math.ceil(countries.length / itemsPerPage));
//         }, [itemOffset, itemsPerPage]);
    
//         // Invoke when user click to request another page.
//         const handlePageClick = event => {
//           const newOffset = (event.selected * itemsPerPage) % countries.length;
//           console.log(
//             `User requested page number ${event.selected}, which is offset ${newOffset}`
//           );
//           setItemOffset(newOffset);
//         };
    
//         return [currentItems] && (
//           <>
//             <countries currentItems={currentItems} />
//             <ReactPaginate
//               breakLabel="..."
//               nextLabel="next >"
//               onPageChange={handlePageClick}
//               pageRangeDisplayed={5}
//               pageCount={pageCount}
//               previousLabel="< previous"
//               renderOnZeroPageCount={null}
//               className="pagination-link  pagination is-flex is-justify-content-space-evenly backWhite"
//             />
//           </>
//         );
//       }
      
//       return {currentItems} && (
//         <>
            
//           <PaginatedItems itemsPerPage={5} />
//         </>
//       );

   
// }

// export default withCountries(Pagination)