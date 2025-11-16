export const msalConfig = {
    auth: {
        clientId: "56f82b34-0e98-4568-b7d6-edcdd67c85c7",
        authority: `https://${TENANT_DOMAIN}`,
        knownAuthorities: [TENANT_DOMAIN],
        
        // ✅ WEB için TAM PATH gerekiyor
        redirectUri: `${window.location.origin}/auth-callback`,
        postLogoutRedirectUri: `${window.location.origin}/`,
    },
    cache: {
        cacheLocation: "localStorage", // ✅ Web için localStorage
        storeAuthStateInCookie: true,  // ✅ WEB için CRITICAL (true olmalı)
    }
};
