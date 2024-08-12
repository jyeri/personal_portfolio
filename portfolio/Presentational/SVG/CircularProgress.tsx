import React from 'react';

//REUSABLE COMPONENT

export const CircularProgress = ({percentage}: {percentage: number}) => {
    const strokeDashoffset = ((100 - percentage) / 100) * 2 * Math.PI * 45;
  
    return (
      <svg width="100" height="100" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#black" strokeWidth="15" />
        <circle cx="60" cy="60" r="45" fill="none" stroke="url(#gradient)" strokeWidth="15" strokeDasharray="282.743" strokeDashoffset={strokeDashoffset} />
        <text x="60" y="65" textAnchor="middle" fill="#fff" fontSize="25px" fontFamily="Toko">{percentage}%</text>
      </svg>
    );
}