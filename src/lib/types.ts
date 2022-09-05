export type Query = string;
export type Variables = string;

export interface iImageResize {
  readonly transformation: {
    readonly image: {
      readonly resize: {
        height: number
        width: number
      }
    }
  }
}

export interface iMode {
  readonly name: string;
  readonly item: Array<object>;
}

export interface iQuery {
  readonly name: string;
  readonly request: {
    readonly body: {
      readonly graphql: {
        readonly query: string;
        readonly variables: string;
      }
    }
  };
}

export interface iCollection {
  readonly query: Query;
  variables: Variables;
}

export interface iContactMethod {
  readonly method: string;
  readonly iconImage: {
    readonly url: string;
  };
  readonly url: string;
}

export interface iContactMethods {
  readonly contactMethods: Array<iContactMethod>;
}
