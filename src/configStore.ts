export type AuthConfig = {
    username: string;
    password: string;
};

export type Config = {
    BASE_URL: string;
    auth?: AuthConfig;
};

let config: Config | null = null;

export const setConfig = (newConfig: Config) => {
    config = newConfig;
};

export const getConfig = (): Config => {
    if (!config) {
        throw new Error('Configuration has not been set.');
    }
    return config;
};
