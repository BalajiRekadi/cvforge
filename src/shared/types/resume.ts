interface DefaultFormBlock {
  id: string;
  title: string;
  fullName: string;
  designation: string;
  github: string;
  linkedIn: string;
  mail: string;
  phone: string;
  about: string;
}

interface Resume {
  id: string;
  defaultFormBlock: DefaultFormBlock;
}

export type { Resume, DefaultFormBlock };
