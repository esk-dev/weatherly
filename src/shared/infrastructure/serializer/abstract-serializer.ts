/**
 * TBody - request body interface
 * TReq - request interface
 * TRes -
 * */
export abstract class AbstractSerializer<
  TBody extends object = object,
  TReq extends object = object,
  TRes extends object = object,
> {
  /**
   * Serialize req body into request type
   * @param body
   */
  abstract serialize(body: TBody): TReq;
  /**
   * Parse response to a model
   * @param response
   */
  abstract parse(response: TRes): TBody;
}
