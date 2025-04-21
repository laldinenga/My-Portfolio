// import React from 'react';

// const ScrollButton = ({ label, targetId, activeSection }) => {
//   const isActive = activeSection === targetId;

//   const handleClick = () => {
//     const element = document.getElementById(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <button
//       className={`flex items-center rounded-3xl h-7 px-3 hover:bg-neutral-800 active:bg-neutral-700 ${
//         isActive ? 'bg-neutral-800' : ''
//       }`}
//       onClick={handleClick}
//     >
//       {label}
//     </button>
//   );
// };

// export default ScrollButton;


// {sections.map((section) => (
//     <ScrollButton
//       key={section.targetId}
//       label={section.label}
//       targetId={section.targetId}
//       activeSection={activeSection}
//     />
//   ))}


// import React from 'react';
// import ScrollButton from './ScrollButton'; // adjust the path as needed

// const NavButtons = ({ activeSection }) => {
//   const sections = [
//     { label: 'About', targetId: 'about' },
//     { label: 'Skills', targetId: 'skills' },
//     { label: 'Project', targetId: 'project' },
//   ];

//   return (
//     <div className="flex flex-row justify-center border-2 space-x-3 w-fit h-8 rounded-3xl p-2 items-center">
//       {sections.map((section) => (
//         <ScrollButton
//           key={section.targetId}
//           label={section.label}
//           targetId={section.targetId}
//           activeSection={activeSection}
//         />
//       ))}
//     </div>
//   );
// };

// export default NavButtons;
