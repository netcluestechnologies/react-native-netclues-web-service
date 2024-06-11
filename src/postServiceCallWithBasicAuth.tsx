import axios, { type AxiosResponse } from 'axios';
import { getConfig, type AuthConfig } from './configStore';

type Params = Record<string, any>;

type SuccessCallback = (response: AxiosResponse) => void;
type FailureCallback = (error: { success: boolean; message: string }) => void;

export type DynamicHeaders = Record<string, string>;

export const postServiceCallWithBasicAuth = async (
    endpoint: string,
    params: Params = {},  // Default to an empty object if no params are provided
    headers: DynamicHeaders = {},  // Default to an empty object if no headers are provided
    auth?: AuthConfig,  // Optional authentication
    onSuccessCallBack?: SuccessCallback,
    onFailureCallBack?: FailureCallback
): Promise<void | AxiosResponse> => {
    const config = getConfig();

    const { BASE_URL } = config;

    // Combine default headers with provided headers
    const combinedHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers,
    };

    const axiosConfig = {
        headers: combinedHeaders,
        auth: auth || config.auth,  // Use provided auth or default config auth
    };

    try {
        const response = await axios.post(BASE_URL + endpoint, params, axiosConfig);
        if (onSuccessCallBack) {
            onSuccessCallBack(response);
        } else {
            return response;
        }
    } catch (error: any) {
        const err = {
            success: false,
            message: error.message,
        };
        if (onFailureCallBack) {
            onFailureCallBack(err);
        }
    }
};