import type { DynamicHeaders } from './postServiceCallWithBasicAuth';
import type { Config, AuthConfig } from './configStore';
import { setConfig } from './configStore';
import { postServiceCallWithBasicAuth } from './postServiceCallWithBasicAuth';

export { postServiceCallWithBasicAuth, setConfig };
export type { DynamicHeaders, Config, AuthConfig };

