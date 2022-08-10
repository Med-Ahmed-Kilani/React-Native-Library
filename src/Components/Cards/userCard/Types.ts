export type UserProps = {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  age?: string;
  company?: companyProps;
};

type companyProps = {
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
};

export type UserCardProps = {
  item: UserProps;
  onPress: () => void;
  onDelete: () => void;
};
