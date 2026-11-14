export interface CurrencyExchangeRate {
  id: number;
  currencyFrom: string;
  currencyTo: string;
  rate: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CurrencyResponse {
  data: CurrencyExchangeRate[];
  perPage: number;
  totalPages: number;
  totalRecords: number;
}

interface CurrencySetting {
  currency: string;
  currencyAddon: number;
  actionType: number;
}

export interface CountryConversionList {
  id?: number;
  countryId: number;
  countryName: string;
  isChipperCash: boolean;
  isMoneyBack: boolean;
  isBankTransfer: boolean;
  currencyAddonSettings: CurrencySetting[];
}

export interface CountryCurrencyResponseData {
  data: CountryConversionList[];
  perPage: number;
  totalPages: number;
  totalRecords: number;
}

export interface CountryCurrencyDeleteResponse {
  message: string;
  success: boolean;
}
