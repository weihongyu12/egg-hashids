import Hashids from 'hashids';

declare module 'egg' {

  interface Application {
    hashids: Hashids
  }

}
