const {env} = process;

const isProd = env.NODE_ENV === "production";

module.exports = () => {
    console.log("isProd " + isProd)

    return {
        env: {
            DEPLOY_ID: isProd ? new Date() : "dev",
        },
        assetPreFix: isProd ? env.PUBLIC_URL : ""
    }
}
