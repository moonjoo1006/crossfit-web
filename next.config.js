const {env} = process;

const isProd = env.NODE_ENV === "production";
const API_URL = env.API_URL || "http://localhost:8080";

module.exports = () => {

    return {
        env: {
            DEPLOY_ID: isProd ? new Date() : "dev",
        },
        assetPreFix: isProd ? env.PUBLIC_URL : "",
        async rewrites() {
            return [{
                source: "/api/:path*",
                destination: `${API_URL}/:path*`
            }]
        }
    }
}
