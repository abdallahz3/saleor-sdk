import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  AccountRegisterInput,
  MutationAccountAddressCreateArgs,
  MutationAccountAddressUpdateArgs,
  MutationAccountSetDefaultAddressArgs,
  MutationAccountUpdateArgs,
  MutationExternalAuthenticationUrlArgs,
  MutationPasswordChangeArgs,
  MutationTokenCreateArgs,
  MutationTokenRefreshArgs,
  MutationRequestPasswordResetArgs,
  MutationSetPasswordArgs,
  MutationRequestEmailChangeArgs,
  AccountConfirmMutationVariables,
} from "../apollo/types";
import { AuthSDK } from "./auth";
import { UserSDK } from "./user";
import { State } from "./state";

export interface SaleorClientInternals {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
export interface SaleorClientConfig {
  channel: string;
  autologin: boolean;
  setChannel(channel: string): string;
}
export interface SaleorClient {
  auth: AuthSDK;
  user: UserSDK;
  config: SaleorClientConfig;
  _internal: SaleorClientInternals;
  getState(): State;
}

export interface SaleorClientOpts {
  apiUrl: string;
  channel: string;
  autologin?: boolean;
}

export type SaleorClientMethodsProps = SaleorClientInternals &
  Pick<SaleorClientConfig, "channel">;

export type CreateAccountAddressOpts = MutationAccountAddressCreateArgs;
export type ChangeUserPasswordOpts = MutationPasswordChangeArgs;
export type LoginOpts = MutationTokenCreateArgs;
export type RefreshTokenOpts = Pick<MutationTokenRefreshArgs, "csrfToken">;
export type RegisterOpts = AccountRegisterInput;
export type RequestEmailChangeOpts = MutationRequestEmailChangeArgs;
export type RequestPasswordResetOpts = MutationRequestPasswordResetArgs;
export type SetAccountDefaultAddressOpts = MutationAccountSetDefaultAddressArgs;
export type SetPasswordOpts = MutationSetPasswordArgs;
export type UpdateAccountOpts = MutationAccountUpdateArgs;
export type UpdateAccountAddressOpts = MutationAccountAddressUpdateArgs;
export type ExternalAuthOpts = MutationExternalAuthenticationUrlArgs;
export type ConfirmAccountOpts = AccountConfirmMutationVariables;

export type JWTToken = {
  iat: number;
  iss: string;
  owner: string;
  exp: number;
  token: string;
  email: string;
  type: string;
  user_id: string;
  is_staff: boolean;
};
