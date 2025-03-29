/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: "/",
                destination: "/a",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
