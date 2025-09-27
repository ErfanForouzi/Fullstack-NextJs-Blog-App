/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"http",
                port:"5000",
                hostname:"localhost",
                
            }
        ]
    },
    logging:{
        fetches:{
            fullUrl:true
        }
    }
};

export default nextConfig;
