import { ReactElement } from "react";

export interface CoreUserData {
  id: number;
  name: string;
  lastName: string;
  prefix?: string;
  title?: string;
  imageUrl?: string,
  imageElement?: JSX.Element
}

export interface Company {
  name: string;
  suffix: string;
}

export interface Address {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
}

export interface FullUserData extends CoreUserData {
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  company: Company;
  address: Address;
}

export interface ApiResponse<T> {
  pagination: {
    previousPage: null | number;
    current: number;
    nextPage: null | number;
    total: number;
    pageSize: number;
  },
  list: T[],
}