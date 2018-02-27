import { ISimpleMap } from '../interface/simple-map.interface';

export class Obj {
  /**
   * @description
   * Given an object and flat keys translation map
   * returns the object with the translated keys.
   * @param object
   * @param map
   */

  public static mapKeys = <T, U>(object: T, map: ISimpleMap): U => Object
    .keys(object)
    .reduce(
      (a: any, p: string) => ({
        ... a,
        [ map[p] || p ]: object[p],
      }),
      {},
    );

  /**
   * @description
   * Given a flat object returns a url parameters string.
   * @param parameters
   */

  public static toUrlParams (parameters: ISimpleMap) {
    let urlParam = parameters.reduce( (a, b) => {
      return a + b.join(', ') + '&';
    }, '');

    urlParam = urlParam.slice(0, -1);
    return urlParam;
  }

  // public static toUrlParams = (parameters: ISimpleMap): string => Object
  //   .entries(parameters)
  //   .map(i => i.join('='))
  //   .join('&');
}
