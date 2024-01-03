type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

interface IA {
  A: { D: number };
  B: { C: number };
}

const myObj: DeepReadonly<IA> = {
  A: {
    D: 2,
  },
  B: {
    C: 3,
  },
};

interface IB {
  A?: { D: number };
  B?: { C: number };
}

const myObjB: Required<DeepReadonly<IB>> = {
  A: {
    D: 2,
  },
  B: {
    C: 3,
  },
};

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};
