// import React from 'react'

// const ContentAchievements = () => {
//   return (
//     <div className='container-fluid d-flex justify-content-center align-items-center p-3 rounded lead text-muted'>
//         <div className="d-flex p-4 border shadow-sm rounded">
//             <div className='p-3'>
//                 <h1>22+ min</h1>
//                 <p>Users</p>
//             </div>
//             <div className="data border-start border-end border-dark-subtle p-3">
//                 <h1>50 min</h1>
//                 <p>Created Projects</p>
//             </div>
//             <div className='p-3'>
//                 <h1>5000+</h1>
//                 <p>Postive reveiews</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ContentAchievements

import React from 'react';

const ContentAchievements = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center p-3 rounded lead text-muted'>
      <div className='d-flex flex-column flex-md-row p-2 border shadow-sm rounded'>
        <div className='p-2'>
          <h3>22+ min</h3>
          <p>Users</p>
        </div>
        <div className='data border-md-start border-md-end border-dark-subtle p-2 border-0'>
          <h3>50 min</h3>
          <p>Created Projects</p>
        </div>
        <div className='p-2'>
          <h3>5000+</h3>
          <p>Positive reviews</p>
        </div>
      </div>
    </div>
  );
}

export default ContentAchievements;



