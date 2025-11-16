const TENANT_NAME = "ecenursybllhwcustomertenant";
const TENANT_DOMAIN = `${TENANT_NAME}.ciamlogin.com`;

export const msalConfig = {
    auth: {
        clientId: "56f82b34-0e98-4568-b7d6-edcdd67c85c7",
        authority: `https://${TENANT_DOMAIN}`,
        knownAuthorities: [TENANT_DOMAIN],

        // ❗ Kesin olarak sadece origin (CIAM bunu zorunlu kılıyor)
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "email"]
};
