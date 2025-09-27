import Header from '@/components/Header';

const layout = ({children}) => {
    return (
        <>
         <Header />
         <div className="container  xl:max-w-screen-xl pb-12">{children}</div>   
        </>
    );
};

export default layout;