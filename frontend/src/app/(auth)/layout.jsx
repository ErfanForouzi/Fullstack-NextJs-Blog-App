import React from 'react';

const layout = ({children}) => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-md p-4 shadow rounded-xl'>
            {children}
            </div>
        </div>
    );
};

export default layout;