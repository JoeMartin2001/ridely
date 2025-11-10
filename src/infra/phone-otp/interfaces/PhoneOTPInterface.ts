export interface PhoneOTPRequest {
  phoneNumber: string;
  message: string;
  from?: Date;
  callback_url?: Date;
}

export interface PhoneOTPResponse {
  id: string;
  message: string;
  status: string;
}

export interface PhoneOTPGlobalRequest {
  phoneNumber: string;
  message: string;
  countryCode: string;
  callback_url?: Date;
  unicode: number;
}

export interface PhoneOTPGlobalResponse {
  id: string;
  message: string;
  status: string;
}

export interface PhoneOTPBatchRequest {
  messages: {
    user_sms_id: string;
    to: number;
    text: string;
  }[];
}

export interface PhoneOTPBatchResponse {
  id: string;
  message: string;
  status: string[];
}

export interface NormalizeMessageResponse {
  special_characters: {
    position: number;
    code: string;
    char: string;
  }[];
}

export interface PhoneOTPInterface {
  send(phoneOTP: PhoneOTPRequest): Promise<PhoneOTPResponse>;
  sendBatch(phoneOTP: PhoneOTPBatchRequest): Promise<PhoneOTPBatchResponse>;
  sendGlobalMessage(
    phoneOTPGlobalRequest: PhoneOTPGlobalRequest,
  ): Promise<PhoneOTPGlobalResponse>;
  normalizeMessage(message: string): Promise<NormalizeMessageResponse>;
}
