export interface Property {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
}

type Location = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

type Rates = {
  nightly?: number;
  weekly?: number;
  monthly?: number;
};

type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};
