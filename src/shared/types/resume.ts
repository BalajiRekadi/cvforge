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
  name: string;
  defaultFormBlock: DefaultFormBlock;
  formBlocks: FormBlocks;
}

interface FormBlock {
  id: string;
  name: string;
  entries: FormBlockEntry[];
}

interface FormBlockEntry {
  id: string;
  title: string;
  subTitle: string;
  subTitle2: string;
  summary: string;
}

interface FormBlocks {
  [id: string]: FormBlock;
}

export type { Resume, DefaultFormBlock, FormBlock, FormBlocks, FormBlockEntry };
