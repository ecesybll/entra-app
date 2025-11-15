// authConfig.js
const TENANT_NAME = "ecenursybllhwcustomertenant";
const TENANT_DOMAIN = `${TENANT_NAME}.ciamlogin.com`;

// Dinamik redirect URI
const getRedirectUri = () => {
    return window.location.origin + "/auth/redirect";
};

export const msalConfig = {
    auth: {
        clientId: "56f82b34-0e98-4568-b7d6-edcdd67c85c7",
        // ✅ External ID için DOĞRU format (User Flow YOK)
        authority: `https://${TENANT_DOMAIN}`,
        knownAuthorities: [TENANT_DOMAIN],
        redirectUri: getRedirectUri(),
        postLogoutRedirectUri: getRedirectUri(),
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) return;
                console.log(message);
            }
        }
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "email"]
};