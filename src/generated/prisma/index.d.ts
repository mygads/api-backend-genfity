
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model Subcategory
 * 
 */
export type Subcategory = $Result.DefaultSelection<Prisma.$SubcategoryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Addon
 * 
 */
export type Addon = $Result.DefaultSelection<Prisma.$AddonPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model WhatsAppSession
 * 
 */
export type WhatsAppSession = $Result.DefaultSelection<Prisma.$WhatsAppSessionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model WhatsappApiPackage
 * 
 */
export type WhatsappApiPackage = $Result.DefaultSelection<Prisma.$WhatsappApiPackagePayload>
/**
 * Model WhatsappApiTransaction
 * 
 */
export type WhatsappApiTransaction = $Result.DefaultSelection<Prisma.$WhatsappApiTransactionPayload>
/**
 * Model WhatsappApiService
 * 
 */
export type WhatsappApiService = $Result.DefaultSelection<Prisma.$WhatsappApiServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategory.findMany()
    * ```
    */
  get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addon`: Exposes CRUD operations for the **Addon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addons
    * const addons = await prisma.addon.findMany()
    * ```
    */
  get addon(): Prisma.AddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppSession`: Exposes CRUD operations for the **WhatsAppSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppSessions
    * const whatsAppSessions = await prisma.whatsAppSession.findMany()
    * ```
    */
  get whatsAppSession(): Prisma.WhatsAppSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappApiPackage`: Exposes CRUD operations for the **WhatsappApiPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappApiPackages
    * const whatsappApiPackages = await prisma.whatsappApiPackage.findMany()
    * ```
    */
  get whatsappApiPackage(): Prisma.WhatsappApiPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappApiTransaction`: Exposes CRUD operations for the **WhatsappApiTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappApiTransactions
    * const whatsappApiTransactions = await prisma.whatsappApiTransaction.findMany()
    * ```
    */
  get whatsappApiTransaction(): Prisma.WhatsappApiTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappApiService`: Exposes CRUD operations for the **WhatsappApiService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappApiServices
    * const whatsappApiServices = await prisma.whatsappApiService.findMany()
    * ```
    */
  get whatsappApiService(): Prisma.WhatsappApiServiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Feature: 'Feature',
    Subcategory: 'Subcategory',
    Category: 'Category',
    Addon: 'Addon',
    Package: 'Package',
    WhatsAppSession: 'WhatsAppSession',
    Transaction: 'Transaction',
    Payment: 'Payment',
    WhatsappApiPackage: 'WhatsappApiPackage',
    WhatsappApiTransaction: 'WhatsappApiTransaction',
    WhatsappApiService: 'WhatsappApiService'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "feature" | "subcategory" | "category" | "addon" | "package" | "whatsAppSession" | "transaction" | "payment" | "whatsappApiPackage" | "whatsappApiTransaction" | "whatsappApiService"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      Subcategory: {
        payload: Prisma.$SubcategoryPayload<ExtArgs>
        fields: Prisma.SubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findMany: {
            args: Prisma.SubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          create: {
            args: Prisma.SubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          createMany: {
            args: Prisma.SubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          update: {
            args: Prisma.SubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategory>
          }
          groupBy: {
            args: Prisma.SubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Addon: {
        payload: Prisma.$AddonPayload<ExtArgs>
        fields: Prisma.AddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          findFirst: {
            args: Prisma.AddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          findMany: {
            args: Prisma.AddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>[]
          }
          create: {
            args: Prisma.AddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          createMany: {
            args: Prisma.AddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          update: {
            args: Prisma.AddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          deleteMany: {
            args: Prisma.AddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          aggregate: {
            args: Prisma.AddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddon>
          }
          groupBy: {
            args: Prisma.AddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddonCountArgs<ExtArgs>
            result: $Utils.Optional<AddonCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppSession: {
        payload: Prisma.$WhatsAppSessionPayload<ExtArgs>
        fields: Prisma.WhatsAppSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findMany: {
            args: Prisma.WhatsAppSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>[]
          }
          create: {
            args: Prisma.WhatsAppSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          createMany: {
            args: Prisma.WhatsAppSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsAppSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          update: {
            args: Prisma.WhatsAppSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsAppSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppSession>
          }
          groupBy: {
            args: Prisma.WhatsAppSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      WhatsappApiPackage: {
        payload: Prisma.$WhatsappApiPackagePayload<ExtArgs>
        fields: Prisma.WhatsappApiPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappApiPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappApiPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          findFirst: {
            args: Prisma.WhatsappApiPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappApiPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          findMany: {
            args: Prisma.WhatsappApiPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>[]
          }
          create: {
            args: Prisma.WhatsappApiPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          createMany: {
            args: Prisma.WhatsappApiPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsappApiPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          update: {
            args: Prisma.WhatsappApiPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          deleteMany: {
            args: Prisma.WhatsappApiPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappApiPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsappApiPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiPackagePayload>
          }
          aggregate: {
            args: Prisma.WhatsappApiPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappApiPackage>
          }
          groupBy: {
            args: Prisma.WhatsappApiPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappApiPackageCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiPackageCountAggregateOutputType> | number
          }
        }
      }
      WhatsappApiTransaction: {
        payload: Prisma.$WhatsappApiTransactionPayload<ExtArgs>
        fields: Prisma.WhatsappApiTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappApiTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappApiTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          findFirst: {
            args: Prisma.WhatsappApiTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappApiTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          findMany: {
            args: Prisma.WhatsappApiTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>[]
          }
          create: {
            args: Prisma.WhatsappApiTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          createMany: {
            args: Prisma.WhatsappApiTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsappApiTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          update: {
            args: Prisma.WhatsappApiTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WhatsappApiTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappApiTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsappApiTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiTransactionPayload>
          }
          aggregate: {
            args: Prisma.WhatsappApiTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappApiTransaction>
          }
          groupBy: {
            args: Prisma.WhatsappApiTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappApiTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiTransactionCountAggregateOutputType> | number
          }
        }
      }
      WhatsappApiService: {
        payload: Prisma.$WhatsappApiServicePayload<ExtArgs>
        fields: Prisma.WhatsappApiServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappApiServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappApiServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          findFirst: {
            args: Prisma.WhatsappApiServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappApiServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          findMany: {
            args: Prisma.WhatsappApiServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>[]
          }
          create: {
            args: Prisma.WhatsappApiServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          createMany: {
            args: Prisma.WhatsappApiServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsappApiServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          update: {
            args: Prisma.WhatsappApiServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          deleteMany: {
            args: Prisma.WhatsappApiServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappApiServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsappApiServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappApiServicePayload>
          }
          aggregate: {
            args: Prisma.WhatsappApiServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappApiService>
          }
          groupBy: {
            args: Prisma.WhatsappApiServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappApiServiceCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappApiServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    feature?: FeatureOmit
    subcategory?: SubcategoryOmit
    category?: CategoryOmit
    addon?: AddonOmit
    package?: PackageOmit
    whatsAppSession?: WhatsAppSessionOmit
    transaction?: TransactionOmit
    payment?: PaymentOmit
    whatsappApiPackage?: WhatsappApiPackageOmit
    whatsappApiTransaction?: WhatsappApiTransactionOmit
    whatsappApiService?: WhatsappApiServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    whatsAppSessions: number
    transactions: number
    whatsappApiTransactions: number
    whatsappApiServices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    whatsAppSessions?: boolean | UserCountOutputTypeCountWhatsAppSessionsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    whatsappApiTransactions?: boolean | UserCountOutputTypeCountWhatsappApiTransactionsArgs
    whatsappApiServices?: boolean | UserCountOutputTypeCountWhatsappApiServicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhatsAppSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhatsappApiTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhatsappApiServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiServiceWhereInput
  }


  /**
   * Count Type SubcategoryCountOutputType
   */

  export type SubcategoryCountOutputType = {
    packages: number
  }

  export type SubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | SubcategoryCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryCountOutputType
     */
    select?: SubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
    packages: number
    addons: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
    packages?: boolean | CategoryCountOutputTypeCountPackagesArgs
    addons?: boolean | CategoryCountOutputTypeCountAddonsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonWhereInput
  }


  /**
   * Count Type AddonCountOutputType
   */

  export type AddonCountOutputType = {
    transactions: number
  }

  export type AddonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AddonCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AddonCountOutputType without action
   */
  export type AddonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonCountOutputType
     */
    select?: AddonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddonCountOutputType without action
   */
  export type AddonCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    features: number
    transactions: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | PackageCountOutputTypeCountFeaturesArgs
    transactions?: boolean | PackageCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type WhatsappApiPackageCountOutputType
   */

  export type WhatsappApiPackageCountOutputType = {
    services: number
    transactions: number
  }

  export type WhatsappApiPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | WhatsappApiPackageCountOutputTypeCountServicesArgs
    transactions?: boolean | WhatsappApiPackageCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * WhatsappApiPackageCountOutputType without action
   */
  export type WhatsappApiPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackageCountOutputType
     */
    select?: WhatsappApiPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsappApiPackageCountOutputType without action
   */
  export type WhatsappApiPackageCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiServiceWhereInput
  }

  /**
   * WhatsappApiPackageCountOutputType without action
   */
  export type WhatsappApiPackageCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    otp: string | null
    otpExpires: Date | null
    otpVerificationDeadline: Date | null
    emailVerified: Date | null
    phoneVerified: Date | null
    image: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    otp: string | null
    otpExpires: Date | null
    otpVerificationDeadline: Date | null
    emailVerified: Date | null
    phoneVerified: Date | null
    image: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    otp: number
    otpExpires: number
    otpVerificationDeadline: number
    emailVerified: number
    phoneVerified: number
    image: number
    emailVerificationToken: number
    emailVerificationTokenExpires: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    otp?: true
    otpExpires?: true
    otpVerificationDeadline?: true
    emailVerified?: true
    phoneVerified?: true
    image?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    otp?: true
    otpExpires?: true
    otpVerificationDeadline?: true
    emailVerified?: true
    phoneVerified?: true
    image?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    otp?: true
    otpExpires?: true
    otpVerificationDeadline?: true
    emailVerified?: true
    phoneVerified?: true
    image?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    otp: string | null
    otpExpires: Date | null
    otpVerificationDeadline: Date | null
    emailVerified: Date | null
    phoneVerified: Date | null
    image: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    otpExpires?: boolean
    otpVerificationDeadline?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    image?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    role?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    whatsAppSessions?: boolean | User$whatsAppSessionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    whatsappApiTransactions?: boolean | User$whatsappApiTransactionsArgs<ExtArgs>
    whatsappApiServices?: boolean | User$whatsappApiServicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    otpExpires?: boolean
    otpVerificationDeadline?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    image?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "otp" | "otpExpires" | "otpVerificationDeadline" | "emailVerified" | "phoneVerified" | "image" | "emailVerificationToken" | "emailVerificationTokenExpires" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    whatsAppSessions?: boolean | User$whatsAppSessionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    whatsappApiTransactions?: boolean | User$whatsappApiTransactionsArgs<ExtArgs>
    whatsappApiServices?: boolean | User$whatsappApiServicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      whatsAppSessions: Prisma.$WhatsAppSessionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      whatsappApiTransactions: Prisma.$WhatsappApiTransactionPayload<ExtArgs>[]
      whatsappApiServices: Prisma.$WhatsappApiServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      password: string | null
      otp: string | null
      otpExpires: Date | null
      otpVerificationDeadline: Date | null
      emailVerified: Date | null
      phoneVerified: Date | null
      image: string | null
      emailVerificationToken: string | null
      emailVerificationTokenExpires: Date | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsAppSessions<T extends User$whatsAppSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$whatsAppSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsappApiTransactions<T extends User$whatsappApiTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$whatsappApiTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsappApiServices<T extends User$whatsappApiServicesArgs<ExtArgs> = {}>(args?: Subset<T, User$whatsappApiServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpires: FieldRef<"User", 'DateTime'>
    readonly otpVerificationDeadline: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly phoneVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.whatsAppSessions
   */
  export type User$whatsAppSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    where?: WhatsAppSessionWhereInput
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    cursor?: WhatsAppSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.whatsappApiTransactions
   */
  export type User$whatsappApiTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    where?: WhatsappApiTransactionWhereInput
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    cursor?: WhatsappApiTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappApiTransactionScalarFieldEnum | WhatsappApiTransactionScalarFieldEnum[]
  }

  /**
   * User.whatsappApiServices
   */
  export type User$whatsappApiServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    where?: WhatsappApiServiceWhereInput
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    cursor?: WhatsappApiServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappApiServiceScalarFieldEnum | WhatsappApiServiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    included: boolean | null
    packageId: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    included: boolean | null
    packageId: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    name_en: number
    name_id: number
    included: number
    packageId: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    included?: true
    packageId?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    included?: true
    packageId?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    included?: true
    packageId?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    name_en: string
    name_id: string
    included: boolean
    packageId: string
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    included?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>



  export type FeatureSelectScalar = {
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    included?: boolean
    packageId?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_id" | "included" | "packageId", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_en: string
      name_id: string
      included: boolean
      packageId: string
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly name_en: FieldRef<"Feature", 'String'>
    readonly name_id: FieldRef<"Feature", 'String'>
    readonly included: FieldRef<"Feature", 'Boolean'>
    readonly packageId: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model Subcategory
   */

  export type AggregateSubcategory = {
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  export type SubcategoryMinAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    categoryId: string | null
  }

  export type SubcategoryMaxAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    categoryId: string | null
  }

  export type SubcategoryCountAggregateOutputType = {
    id: number
    name_en: number
    name_id: number
    categoryId: number
    _all: number
  }


  export type SubcategoryMinAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    categoryId?: true
  }

  export type SubcategoryMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    categoryId?: true
  }

  export type SubcategoryCountAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    categoryId?: true
    _all?: true
  }

  export type SubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategory to aggregate.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcategories
    **/
    _count?: true | SubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryMaxAggregateInputType
  }

  export type GetSubcategoryAggregateType<T extends SubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategory[P]>
      : GetScalarType<T[P], AggregateSubcategory[P]>
  }




  export type SubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithAggregationInput | SubcategoryOrderByWithAggregationInput[]
    by: SubcategoryScalarFieldEnum[] | SubcategoryScalarFieldEnum
    having?: SubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryCountAggregateInputType | true
    _min?: SubcategoryMinAggregateInputType
    _max?: SubcategoryMaxAggregateInputType
  }

  export type SubcategoryGroupByOutputType = {
    id: string
    name_en: string
    name_id: string
    categoryId: string
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  type GetSubcategoryGroupByPayload<T extends SubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    packages?: boolean | Subcategory$packagesArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>



  export type SubcategorySelectScalar = {
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    categoryId?: boolean
  }

  export type SubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_id" | "categoryId", ExtArgs["result"]["subcategory"]>
  export type SubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    packages?: boolean | Subcategory$packagesArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      packages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_en: string
      name_id: string
      categoryId: string
    }, ExtArgs["result"]["subcategory"]>
    composites: {}
  }

  type SubcategoryGetPayload<S extends boolean | null | undefined | SubcategoryDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryPayload, S>

  type SubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryCountAggregateInputType | true
    }

  export interface SubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcategory'], meta: { name: 'Subcategory' } }
    /**
     * Find zero or one Subcategory that matches the filter.
     * @param {SubcategoryFindUniqueArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryFindUniqueArgs>(args: SelectSubset<T, SubcategoryFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryFindUniqueOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryFindFirstArgs>(args?: SelectSubset<T, SubcategoryFindFirstArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategory.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryFindManyArgs>(args?: SelectSubset<T, SubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategory.
     * @param {SubcategoryCreateArgs} args - Arguments to create a Subcategory.
     * @example
     * // Create one Subcategory
     * const Subcategory = await prisma.subcategory.create({
     *   data: {
     *     // ... data to create a Subcategory
     *   }
     * })
     * 
     */
    create<T extends SubcategoryCreateArgs>(args: SelectSubset<T, SubcategoryCreateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {SubcategoryCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryCreateManyArgs>(args?: SelectSubset<T, SubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcategory.
     * @param {SubcategoryDeleteArgs} args - Arguments to delete one Subcategory.
     * @example
     * // Delete one Subcategory
     * const Subcategory = await prisma.subcategory.delete({
     *   where: {
     *     // ... filter to delete one Subcategory
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDeleteArgs>(args: SelectSubset<T, SubcategoryDeleteArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategory.
     * @param {SubcategoryUpdateArgs} args - Arguments to update one Subcategory.
     * @example
     * // Update one Subcategory
     * const subcategory = await prisma.subcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryUpdateArgs>(args: SelectSubset<T, SubcategoryUpdateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {SubcategoryDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryUpdateManyArgs>(args: SelectSubset<T, SubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcategory.
     * @param {SubcategoryUpsertArgs} args - Arguments to update or create a Subcategory.
     * @example
     * // Update or create a Subcategory
     * const subcategory = await prisma.subcategory.upsert({
     *   create: {
     *     // ... data to create a Subcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategory we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryUpsertArgs>(args: SelectSubset<T, SubcategoryUpsertArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategory.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryCountArgs>(
      args?: Subset<T, SubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubcategoryAggregateArgs>(args: Subset<T, SubcategoryAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryAggregateType<T>>

    /**
     * Group by Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcategory model
   */
  readonly fields: SubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    packages<T extends Subcategory$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subcategory model
   */
  interface SubcategoryFieldRefs {
    readonly id: FieldRef<"Subcategory", 'String'>
    readonly name_en: FieldRef<"Subcategory", 'String'>
    readonly name_id: FieldRef<"Subcategory", 'String'>
    readonly categoryId: FieldRef<"Subcategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subcategory findUnique
   */
  export type SubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findUniqueOrThrow
   */
  export type SubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findFirst
   */
  export type SubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findFirstOrThrow
   */
  export type SubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findMany
   */
  export type SubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategories to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory create
   */
  export type SubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcategory.
     */
    data: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
  }

  /**
   * Subcategory createMany
   */
  export type SubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subcategory update
   */
  export type SubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcategory.
     */
    data: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
    /**
     * Choose, which Subcategory to update.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory updateMany
   */
  export type SubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
  }

  /**
   * Subcategory upsert
   */
  export type SubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcategory to update in case it exists.
     */
    where: SubcategoryWhereUniqueInput
    /**
     * In case the Subcategory found by the `where` argument doesn't exist, create a new Subcategory with this data.
     */
    create: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
    /**
     * In case the Subcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
  }

  /**
   * Subcategory delete
   */
  export type SubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter which Subcategory to delete.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory deleteMany
   */
  export type SubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategories to delete
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to delete.
     */
    limit?: number
  }

  /**
   * Subcategory.packages
   */
  export type Subcategory$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Subcategory without action
   */
  export type SubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    icon: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    icon: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name_en: number
    name_id: number
    icon: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    icon?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    icon?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    icon?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name_en: string
    name_id: string
    icon: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    icon?: boolean
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    packages?: boolean | Category$packagesArgs<ExtArgs>
    addons?: boolean | Category$addonsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    icon?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_id" | "icon", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    packages?: boolean | Category$packagesArgs<ExtArgs>
    addons?: boolean | Category$addonsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subcategories: Prisma.$SubcategoryPayload<ExtArgs>[]
      packages: Prisma.$PackagePayload<ExtArgs>[]
      addons: Prisma.$AddonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_en: string
      name_id: string
      icon: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends Category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Category$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Category$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addons<T extends Category$addonsArgs<ExtArgs> = {}>(args?: Subset<T, Category$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name_en: FieldRef<"Category", 'String'>
    readonly name_id: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subcategories
   */
  export type Category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Category.packages
   */
  export type Category$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Category.addons
   */
  export type Category$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    where?: AddonWhereInput
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    cursor?: AddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Addon
   */

  export type AggregateAddon = {
    _count: AddonCountAggregateOutputType | null
    _avg: AddonAvgAggregateOutputType | null
    _sum: AddonSumAggregateOutputType | null
    _min: AddonMinAggregateOutputType | null
    _max: AddonMaxAggregateOutputType | null
  }

  export type AddonAvgAggregateOutputType = {
    price_idr: Decimal | null
    price_usd: Decimal | null
    duration: number | null
  }

  export type AddonSumAggregateOutputType = {
    price_idr: Decimal | null
    price_usd: Decimal | null
    duration: number | null
  }

  export type AddonMinAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    description_en: string | null
    description_id: string | null
    price_idr: Decimal | null
    price_usd: Decimal | null
    image: string | null
    categoryId: string | null
    duration: number | null
    durationUnit: string | null
  }

  export type AddonMaxAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    description_en: string | null
    description_id: string | null
    price_idr: Decimal | null
    price_usd: Decimal | null
    image: string | null
    categoryId: string | null
    duration: number | null
    durationUnit: string | null
  }

  export type AddonCountAggregateOutputType = {
    id: number
    name_en: number
    name_id: number
    description_en: number
    description_id: number
    price_idr: number
    price_usd: number
    image: number
    categoryId: number
    duration: number
    durationUnit: number
    _all: number
  }


  export type AddonAvgAggregateInputType = {
    price_idr?: true
    price_usd?: true
    duration?: true
  }

  export type AddonSumAggregateInputType = {
    price_idr?: true
    price_usd?: true
    duration?: true
  }

  export type AddonMinAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    duration?: true
    durationUnit?: true
  }

  export type AddonMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    duration?: true
    durationUnit?: true
  }

  export type AddonCountAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    duration?: true
    durationUnit?: true
    _all?: true
  }

  export type AddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addon to aggregate.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addons
    **/
    _count?: true | AddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddonMaxAggregateInputType
  }

  export type GetAddonAggregateType<T extends AddonAggregateArgs> = {
        [P in keyof T & keyof AggregateAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddon[P]>
      : GetScalarType<T[P], AggregateAddon[P]>
  }




  export type AddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonWhereInput
    orderBy?: AddonOrderByWithAggregationInput | AddonOrderByWithAggregationInput[]
    by: AddonScalarFieldEnum[] | AddonScalarFieldEnum
    having?: AddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddonCountAggregateInputType | true
    _avg?: AddonAvgAggregateInputType
    _sum?: AddonSumAggregateInputType
    _min?: AddonMinAggregateInputType
    _max?: AddonMaxAggregateInputType
  }

  export type AddonGroupByOutputType = {
    id: string
    name_en: string
    name_id: string
    description_en: string | null
    description_id: string | null
    price_idr: Decimal
    price_usd: Decimal
    image: string | null
    categoryId: string
    duration: number
    durationUnit: string
    _count: AddonCountAggregateOutputType | null
    _avg: AddonAvgAggregateOutputType | null
    _sum: AddonSumAggregateOutputType | null
    _min: AddonMinAggregateOutputType | null
    _max: AddonMaxAggregateOutputType | null
  }

  type GetAddonGroupByPayload<T extends AddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddonGroupByOutputType[P]>
            : GetScalarType<T[P], AddonGroupByOutputType[P]>
        }
      >
    >


  export type AddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    description_en?: boolean
    description_id?: boolean
    price_idr?: boolean
    price_usd?: boolean
    image?: boolean
    categoryId?: boolean
    duration?: boolean
    durationUnit?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    transactions?: boolean | Addon$transactionsArgs<ExtArgs>
    _count?: boolean | AddonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addon"]>



  export type AddonSelectScalar = {
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    description_en?: boolean
    description_id?: boolean
    price_idr?: boolean
    price_usd?: boolean
    image?: boolean
    categoryId?: boolean
    duration?: boolean
    durationUnit?: boolean
  }

  export type AddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_id" | "description_en" | "description_id" | "price_idr" | "price_usd" | "image" | "categoryId" | "duration" | "durationUnit", ExtArgs["result"]["addon"]>
  export type AddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    transactions?: boolean | Addon$transactionsArgs<ExtArgs>
    _count?: boolean | AddonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Addon"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_en: string
      name_id: string
      description_en: string | null
      description_id: string | null
      price_idr: Prisma.Decimal
      price_usd: Prisma.Decimal
      image: string | null
      categoryId: string
      duration: number
      durationUnit: string
    }, ExtArgs["result"]["addon"]>
    composites: {}
  }

  type AddonGetPayload<S extends boolean | null | undefined | AddonDefaultArgs> = $Result.GetResult<Prisma.$AddonPayload, S>

  type AddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddonCountAggregateInputType | true
    }

  export interface AddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Addon'], meta: { name: 'Addon' } }
    /**
     * Find zero or one Addon that matches the filter.
     * @param {AddonFindUniqueArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddonFindUniqueArgs>(args: SelectSubset<T, AddonFindUniqueArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddonFindUniqueOrThrowArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddonFindUniqueOrThrowArgs>(args: SelectSubset<T, AddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindFirstArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddonFindFirstArgs>(args?: SelectSubset<T, AddonFindFirstArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindFirstOrThrowArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddonFindFirstOrThrowArgs>(args?: SelectSubset<T, AddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addons
     * const addons = await prisma.addon.findMany()
     * 
     * // Get first 10 Addons
     * const addons = await prisma.addon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addonWithIdOnly = await prisma.addon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddonFindManyArgs>(args?: SelectSubset<T, AddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addon.
     * @param {AddonCreateArgs} args - Arguments to create a Addon.
     * @example
     * // Create one Addon
     * const Addon = await prisma.addon.create({
     *   data: {
     *     // ... data to create a Addon
     *   }
     * })
     * 
     */
    create<T extends AddonCreateArgs>(args: SelectSubset<T, AddonCreateArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addons.
     * @param {AddonCreateManyArgs} args - Arguments to create many Addons.
     * @example
     * // Create many Addons
     * const addon = await prisma.addon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddonCreateManyArgs>(args?: SelectSubset<T, AddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Addon.
     * @param {AddonDeleteArgs} args - Arguments to delete one Addon.
     * @example
     * // Delete one Addon
     * const Addon = await prisma.addon.delete({
     *   where: {
     *     // ... filter to delete one Addon
     *   }
     * })
     * 
     */
    delete<T extends AddonDeleteArgs>(args: SelectSubset<T, AddonDeleteArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addon.
     * @param {AddonUpdateArgs} args - Arguments to update one Addon.
     * @example
     * // Update one Addon
     * const addon = await prisma.addon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddonUpdateArgs>(args: SelectSubset<T, AddonUpdateArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addons.
     * @param {AddonDeleteManyArgs} args - Arguments to filter Addons to delete.
     * @example
     * // Delete a few Addons
     * const { count } = await prisma.addon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddonDeleteManyArgs>(args?: SelectSubset<T, AddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addons
     * const addon = await prisma.addon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddonUpdateManyArgs>(args: SelectSubset<T, AddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addon.
     * @param {AddonUpsertArgs} args - Arguments to update or create a Addon.
     * @example
     * // Update or create a Addon
     * const addon = await prisma.addon.upsert({
     *   create: {
     *     // ... data to create a Addon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addon we want to update
     *   }
     * })
     */
    upsert<T extends AddonUpsertArgs>(args: SelectSubset<T, AddonUpsertArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonCountArgs} args - Arguments to filter Addons to count.
     * @example
     * // Count the number of Addons
     * const count = await prisma.addon.count({
     *   where: {
     *     // ... the filter for the Addons we want to count
     *   }
     * })
    **/
    count<T extends AddonCountArgs>(
      args?: Subset<T, AddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddonAggregateArgs>(args: Subset<T, AddonAggregateArgs>): Prisma.PrismaPromise<GetAddonAggregateType<T>>

    /**
     * Group by Addon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddonGroupByArgs['orderBy'] }
        : { orderBy?: AddonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Addon model
   */
  readonly fields: AddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Addon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Addon$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Addon$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Addon model
   */
  interface AddonFieldRefs {
    readonly id: FieldRef<"Addon", 'String'>
    readonly name_en: FieldRef<"Addon", 'String'>
    readonly name_id: FieldRef<"Addon", 'String'>
    readonly description_en: FieldRef<"Addon", 'String'>
    readonly description_id: FieldRef<"Addon", 'String'>
    readonly price_idr: FieldRef<"Addon", 'Decimal'>
    readonly price_usd: FieldRef<"Addon", 'Decimal'>
    readonly image: FieldRef<"Addon", 'String'>
    readonly categoryId: FieldRef<"Addon", 'String'>
    readonly duration: FieldRef<"Addon", 'Int'>
    readonly durationUnit: FieldRef<"Addon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Addon findUnique
   */
  export type AddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon findUniqueOrThrow
   */
  export type AddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon findFirst
   */
  export type AddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addons.
     */
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon findFirstOrThrow
   */
  export type AddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addons.
     */
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon findMany
   */
  export type AddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addons to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon create
   */
  export type AddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The data needed to create a Addon.
     */
    data: XOR<AddonCreateInput, AddonUncheckedCreateInput>
  }

  /**
   * Addon createMany
   */
  export type AddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addons.
     */
    data: AddonCreateManyInput | AddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Addon update
   */
  export type AddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The data needed to update a Addon.
     */
    data: XOR<AddonUpdateInput, AddonUncheckedUpdateInput>
    /**
     * Choose, which Addon to update.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon updateMany
   */
  export type AddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addons.
     */
    data: XOR<AddonUpdateManyMutationInput, AddonUncheckedUpdateManyInput>
    /**
     * Filter which Addons to update
     */
    where?: AddonWhereInput
    /**
     * Limit how many Addons to update.
     */
    limit?: number
  }

  /**
   * Addon upsert
   */
  export type AddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The filter to search for the Addon to update in case it exists.
     */
    where: AddonWhereUniqueInput
    /**
     * In case the Addon found by the `where` argument doesn't exist, create a new Addon with this data.
     */
    create: XOR<AddonCreateInput, AddonUncheckedCreateInput>
    /**
     * In case the Addon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddonUpdateInput, AddonUncheckedUpdateInput>
  }

  /**
   * Addon delete
   */
  export type AddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter which Addon to delete.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon deleteMany
   */
  export type AddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addons to delete
     */
    where?: AddonWhereInput
    /**
     * Limit how many Addons to delete.
     */
    limit?: number
  }

  /**
   * Addon.transactions
   */
  export type Addon$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Addon without action
   */
  export type AddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    price_idr: Decimal | null
    price_usd: Decimal | null
    duration: number | null
  }

  export type PackageSumAggregateOutputType = {
    price_idr: Decimal | null
    price_usd: Decimal | null
    duration: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    description_en: string | null
    description_id: string | null
    price_idr: Decimal | null
    price_usd: Decimal | null
    image: string | null
    categoryId: string | null
    subcategoryId: string | null
    popular: boolean | null
    bgColor: string | null
    duration: number | null
    durationUnit: string | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    name_en: string | null
    name_id: string | null
    description_en: string | null
    description_id: string | null
    price_idr: Decimal | null
    price_usd: Decimal | null
    image: string | null
    categoryId: string | null
    subcategoryId: string | null
    popular: boolean | null
    bgColor: string | null
    duration: number | null
    durationUnit: string | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name_en: number
    name_id: number
    description_en: number
    description_id: number
    price_idr: number
    price_usd: number
    image: number
    categoryId: number
    subcategoryId: number
    popular: number
    bgColor: number
    duration: number
    durationUnit: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    price_idr?: true
    price_usd?: true
    duration?: true
  }

  export type PackageSumAggregateInputType = {
    price_idr?: true
    price_usd?: true
    duration?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    subcategoryId?: true
    popular?: true
    bgColor?: true
    duration?: true
    durationUnit?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    subcategoryId?: true
    popular?: true
    bgColor?: true
    duration?: true
    durationUnit?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name_en?: true
    name_id?: true
    description_en?: true
    description_id?: true
    price_idr?: true
    price_usd?: true
    image?: true
    categoryId?: true
    subcategoryId?: true
    popular?: true
    bgColor?: true
    duration?: true
    durationUnit?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal
    price_usd: Decimal
    image: string
    categoryId: string
    subcategoryId: string
    popular: boolean | null
    bgColor: string | null
    duration: number
    durationUnit: string
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    description_en?: boolean
    description_id?: boolean
    price_idr?: boolean
    price_usd?: boolean
    image?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    popular?: boolean
    bgColor?: boolean
    duration?: boolean
    durationUnit?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    features?: boolean | Package$featuresArgs<ExtArgs>
    transactions?: boolean | Package$transactionsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>



  export type PackageSelectScalar = {
    id?: boolean
    name_en?: boolean
    name_id?: boolean
    description_en?: boolean
    description_id?: boolean
    price_idr?: boolean
    price_usd?: boolean
    image?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    popular?: boolean
    bgColor?: boolean
    duration?: boolean
    durationUnit?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_id" | "description_en" | "description_id" | "price_idr" | "price_usd" | "image" | "categoryId" | "subcategoryId" | "popular" | "bgColor" | "duration" | "durationUnit", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    features?: boolean | Package$featuresArgs<ExtArgs>
    transactions?: boolean | Package$transactionsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      subcategory: Prisma.$SubcategoryPayload<ExtArgs>
      features: Prisma.$FeaturePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_en: string
      name_id: string
      description_en: string
      description_id: string
      price_idr: Prisma.Decimal
      price_usd: Prisma.Decimal
      image: string
      categoryId: string
      subcategoryId: string
      popular: boolean | null
      bgColor: string | null
      duration: number
      durationUnit: string
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategory<T extends SubcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDefaultArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    features<T extends Package$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Package$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Package$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Package$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly name_en: FieldRef<"Package", 'String'>
    readonly name_id: FieldRef<"Package", 'String'>
    readonly description_en: FieldRef<"Package", 'String'>
    readonly description_id: FieldRef<"Package", 'String'>
    readonly price_idr: FieldRef<"Package", 'Decimal'>
    readonly price_usd: FieldRef<"Package", 'Decimal'>
    readonly image: FieldRef<"Package", 'String'>
    readonly categoryId: FieldRef<"Package", 'String'>
    readonly subcategoryId: FieldRef<"Package", 'String'>
    readonly popular: FieldRef<"Package", 'Boolean'>
    readonly bgColor: FieldRef<"Package", 'String'>
    readonly duration: FieldRef<"Package", 'Int'>
    readonly durationUnit: FieldRef<"Package", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.features
   */
  export type Package$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Package.transactions
   */
  export type Package$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppSession
   */

  export type AggregateWhatsAppSession = {
    _count: WhatsAppSessionCountAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  export type WhatsAppSessionMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    status: string | null
    qr: string | null
    isNotification: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    status: string | null
    qr: string | null
    isNotification: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    status: number
    qr: number
    isNotification: number
    createdAt: number
    updatedAt: number
    aiConfig: number
    _all: number
  }


  export type WhatsAppSessionMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    qr?: true
    isNotification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    qr?: true
    isNotification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    qr?: true
    isNotification?: true
    createdAt?: true
    updatedAt?: true
    aiConfig?: true
    _all?: true
  }

  export type WhatsAppSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSession to aggregate.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppSessions
    **/
    _count?: true | WhatsAppSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type GetWhatsAppSessionAggregateType<T extends WhatsAppSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppSession[P]>
      : GetScalarType<T[P], AggregateWhatsAppSession[P]>
  }




  export type WhatsAppSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSessionWhereInput
    orderBy?: WhatsAppSessionOrderByWithAggregationInput | WhatsAppSessionOrderByWithAggregationInput[]
    by: WhatsAppSessionScalarFieldEnum[] | WhatsAppSessionScalarFieldEnum
    having?: WhatsAppSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppSessionCountAggregateInputType | true
    _min?: WhatsAppSessionMinAggregateInputType
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type WhatsAppSessionGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    status: string
    qr: string | null
    isNotification: boolean
    createdAt: Date
    updatedAt: Date
    aiConfig: JsonValue | null
    _count: WhatsAppSessionCountAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  type GetWhatsAppSessionGroupByPayload<T extends WhatsAppSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    qr?: boolean
    isNotification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiConfig?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppSession"]>



  export type WhatsAppSessionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    qr?: boolean
    isNotification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiConfig?: boolean
  }

  export type WhatsAppSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "status" | "qr" | "isNotification" | "createdAt" | "updatedAt" | "aiConfig", ExtArgs["result"]["whatsAppSession"]>
  export type WhatsAppSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WhatsAppSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      status: string
      qr: string | null
      isNotification: boolean
      createdAt: Date
      updatedAt: Date
      aiConfig: Prisma.JsonValue | null
    }, ExtArgs["result"]["whatsAppSession"]>
    composites: {}
  }

  type WhatsAppSessionGetPayload<S extends boolean | null | undefined | WhatsAppSessionDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppSessionPayload, S>

  type WhatsAppSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppSessionCountAggregateInputType | true
    }

  export interface WhatsAppSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppSession'], meta: { name: 'WhatsAppSession' } }
    /**
     * Find zero or one WhatsAppSession that matches the filter.
     * @param {WhatsAppSessionFindUniqueArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppSessionFindUniqueArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppSessionFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppSessionFindFirstArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany()
     * 
     * // Get first 10 WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppSessionWithIdOnly = await prisma.whatsAppSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppSessionFindManyArgs>(args?: SelectSubset<T, WhatsAppSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppSession.
     * @param {WhatsAppSessionCreateArgs} args - Arguments to create a WhatsAppSession.
     * @example
     * // Create one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.create({
     *   data: {
     *     // ... data to create a WhatsAppSession
     *   }
     * })
     * 
     */
    create<T extends WhatsAppSessionCreateArgs>(args: SelectSubset<T, WhatsAppSessionCreateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppSessions.
     * @param {WhatsAppSessionCreateManyArgs} args - Arguments to create many WhatsAppSessions.
     * @example
     * // Create many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppSessionCreateManyArgs>(args?: SelectSubset<T, WhatsAppSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsAppSession.
     * @param {WhatsAppSessionDeleteArgs} args - Arguments to delete one WhatsAppSession.
     * @example
     * // Delete one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppSession
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppSessionDeleteArgs>(args: SelectSubset<T, WhatsAppSessionDeleteArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppSession.
     * @param {WhatsAppSessionUpdateArgs} args - Arguments to update one WhatsAppSession.
     * @example
     * // Update one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppSessionUpdateArgs>(args: SelectSubset<T, WhatsAppSessionUpdateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppSessions.
     * @param {WhatsAppSessionDeleteManyArgs} args - Arguments to filter WhatsAppSessions to delete.
     * @example
     * // Delete a few WhatsAppSessions
     * const { count } = await prisma.whatsAppSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppSessionDeleteManyArgs>(args?: SelectSubset<T, WhatsAppSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppSessionUpdateManyArgs>(args: SelectSubset<T, WhatsAppSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsAppSession.
     * @param {WhatsAppSessionUpsertArgs} args - Arguments to update or create a WhatsAppSession.
     * @example
     * // Update or create a WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.upsert({
     *   create: {
     *     // ... data to create a WhatsAppSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppSession we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppSessionUpsertArgs>(args: SelectSubset<T, WhatsAppSessionUpsertArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionCountArgs} args - Arguments to filter WhatsAppSessions to count.
     * @example
     * // Count the number of WhatsAppSessions
     * const count = await prisma.whatsAppSession.count({
     *   where: {
     *     // ... the filter for the WhatsAppSessions we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppSessionCountArgs>(
      args?: Subset<T, WhatsAppSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppSessionAggregateArgs>(args: Subset<T, WhatsAppSessionAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppSessionAggregateType<T>>

    /**
     * Group by WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppSessionGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppSession model
   */
  readonly fields: WhatsAppSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppSession model
   */
  interface WhatsAppSessionFieldRefs {
    readonly id: FieldRef<"WhatsAppSession", 'String'>
    readonly sessionId: FieldRef<"WhatsAppSession", 'String'>
    readonly userId: FieldRef<"WhatsAppSession", 'String'>
    readonly status: FieldRef<"WhatsAppSession", 'String'>
    readonly qr: FieldRef<"WhatsAppSession", 'String'>
    readonly isNotification: FieldRef<"WhatsAppSession", 'Boolean'>
    readonly createdAt: FieldRef<"WhatsAppSession", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppSession", 'DateTime'>
    readonly aiConfig: FieldRef<"WhatsAppSession", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppSession findUnique
   */
  export type WhatsAppSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findUniqueOrThrow
   */
  export type WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findFirst
   */
  export type WhatsAppSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findFirstOrThrow
   */
  export type WhatsAppSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findMany
   */
  export type WhatsAppSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSessions to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession create
   */
  export type WhatsAppSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
  }

  /**
   * WhatsAppSession createMany
   */
  export type WhatsAppSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppSessions.
     */
    data: WhatsAppSessionCreateManyInput | WhatsAppSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppSession update
   */
  export type WhatsAppSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppSession to update.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession updateMany
   */
  export type WhatsAppSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppSessions.
     */
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppSessions to update
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to update.
     */
    limit?: number
  }

  /**
   * WhatsAppSession upsert
   */
  export type WhatsAppSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppSession to update in case it exists.
     */
    where: WhatsAppSessionWhereUniqueInput
    /**
     * In case the WhatsAppSession found by the `where` argument doesn't exist, create a new WhatsAppSession with this data.
     */
    create: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
    /**
     * In case the WhatsAppSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
  }

  /**
   * WhatsAppSession delete
   */
  export type WhatsAppSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppSession to delete.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession deleteMany
   */
  export type WhatsAppSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSessions to delete
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppSession without action
   */
  export type WhatsAppSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    addonId: string | null
    paymentId: string | null
    transactionDate: Date | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    referenceLink: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    addonId: string | null
    paymentId: string | null
    transactionDate: Date | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    referenceLink: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    addonId: number
    paymentId: number
    transactionDate: number
    startDate: number
    endDate: number
    status: number
    referenceLink: number
    _all: number
  }


  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    addonId?: true
    paymentId?: true
    transactionDate?: true
    startDate?: true
    endDate?: true
    status?: true
    referenceLink?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    addonId?: true
    paymentId?: true
    transactionDate?: true
    startDate?: true
    endDate?: true
    status?: true
    referenceLink?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    addonId?: true
    paymentId?: true
    transactionDate?: true
    startDate?: true
    endDate?: true
    status?: true
    referenceLink?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    packageId: string | null
    addonId: string | null
    paymentId: string | null
    transactionDate: Date
    startDate: Date
    endDate: Date
    status: string
    referenceLink: string | null
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    addonId?: boolean
    paymentId?: boolean
    transactionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    referenceLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | Transaction$packageArgs<ExtArgs>
    addon?: boolean | Transaction$addonArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    addonId?: boolean
    paymentId?: boolean
    transactionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    referenceLink?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "addonId" | "paymentId" | "transactionDate" | "startDate" | "endDate" | "status" | "referenceLink", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | Transaction$packageArgs<ExtArgs>
    addon?: boolean | Transaction$addonArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$PackagePayload<ExtArgs> | null
      addon: Prisma.$AddonPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string | null
      addonId: string | null
      paymentId: string | null
      transactionDate: Date
      startDate: Date
      endDate: Date
      status: string
      referenceLink: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends Transaction$packageArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addon<T extends Transaction$addonArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$addonArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Transaction$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly packageId: FieldRef<"Transaction", 'String'>
    readonly addonId: FieldRef<"Transaction", 'String'>
    readonly paymentId: FieldRef<"Transaction", 'String'>
    readonly transactionDate: FieldRef<"Transaction", 'DateTime'>
    readonly startDate: FieldRef<"Transaction", 'DateTime'>
    readonly endDate: FieldRef<"Transaction", 'DateTime'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly referenceLink: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.package
   */
  export type Transaction$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }

  /**
   * Transaction.addon
   */
  export type Transaction$addonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    where?: AddonWhereInput
  }

  /**
   * Transaction.payment
   */
  export type Transaction$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    amount: Decimal | null
    method: string | null
    status: string | null
    paymentDate: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    amount: Decimal | null
    method: string | null
    status: string | null
    paymentDate: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    transactionId: number
    amount: number
    method: number
    status: number
    paymentDate: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    method?: true
    status?: true
    paymentDate?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    method?: true
    status?: true
    paymentDate?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    transactionId?: true
    amount?: true
    method?: true
    status?: true
    paymentDate?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    transactionId: string | null
    amount: Decimal
    method: string
    status: string
    paymentDate: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paymentDate?: boolean
    transaction?: boolean | Payment$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    transactionId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paymentDate?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "amount" | "method" | "status" | "paymentDate", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Payment$transactionArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string | null
      amount: Prisma.Decimal
      method: string
      status: string
      paymentDate: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends Payment$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.transaction
   */
  export type Payment$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappApiPackage
   */

  export type AggregateWhatsappApiPackage = {
    _count: WhatsappApiPackageCountAggregateOutputType | null
    _avg: WhatsappApiPackageAvgAggregateOutputType | null
    _sum: WhatsappApiPackageSumAggregateOutputType | null
    _min: WhatsappApiPackageMinAggregateOutputType | null
    _max: WhatsappApiPackageMaxAggregateOutputType | null
  }

  export type WhatsappApiPackageAvgAggregateOutputType = {
    priceMonth: number | null
    priceYear: number | null
    maxSession: number | null
  }

  export type WhatsappApiPackageSumAggregateOutputType = {
    priceMonth: number | null
    priceYear: number | null
    maxSession: number | null
  }

  export type WhatsappApiPackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceMonth: number | null
    priceYear: number | null
    maxSession: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappApiPackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceMonth: number | null
    priceYear: number | null
    maxSession: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappApiPackageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsappApiPackageAvgAggregateInputType = {
    priceMonth?: true
    priceYear?: true
    maxSession?: true
  }

  export type WhatsappApiPackageSumAggregateInputType = {
    priceMonth?: true
    priceYear?: true
    maxSession?: true
  }

  export type WhatsappApiPackageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMonth?: true
    priceYear?: true
    maxSession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappApiPackageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMonth?: true
    priceYear?: true
    maxSession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappApiPackageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceMonth?: true
    priceYear?: true
    maxSession?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsappApiPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiPackage to aggregate.
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiPackages to fetch.
     */
    orderBy?: WhatsappApiPackageOrderByWithRelationInput | WhatsappApiPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappApiPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappApiPackages
    **/
    _count?: true | WhatsappApiPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsappApiPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsappApiPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappApiPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappApiPackageMaxAggregateInputType
  }

  export type GetWhatsappApiPackageAggregateType<T extends WhatsappApiPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappApiPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappApiPackage[P]>
      : GetScalarType<T[P], AggregateWhatsappApiPackage[P]>
  }




  export type WhatsappApiPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiPackageWhereInput
    orderBy?: WhatsappApiPackageOrderByWithAggregationInput | WhatsappApiPackageOrderByWithAggregationInput[]
    by: WhatsappApiPackageScalarFieldEnum[] | WhatsappApiPackageScalarFieldEnum
    having?: WhatsappApiPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappApiPackageCountAggregateInputType | true
    _avg?: WhatsappApiPackageAvgAggregateInputType
    _sum?: WhatsappApiPackageSumAggregateInputType
    _min?: WhatsappApiPackageMinAggregateInputType
    _max?: WhatsappApiPackageMaxAggregateInputType
  }

  export type WhatsappApiPackageGroupByOutputType = {
    id: string
    name: string
    description: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt: Date
    updatedAt: Date
    _count: WhatsappApiPackageCountAggregateOutputType | null
    _avg: WhatsappApiPackageAvgAggregateOutputType | null
    _sum: WhatsappApiPackageSumAggregateOutputType | null
    _min: WhatsappApiPackageMinAggregateOutputType | null
    _max: WhatsappApiPackageMaxAggregateOutputType | null
  }

  type GetWhatsappApiPackageGroupByPayload<T extends WhatsappApiPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappApiPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappApiPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappApiPackageGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappApiPackageGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappApiPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceMonth?: boolean
    priceYear?: boolean
    maxSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | WhatsappApiPackage$servicesArgs<ExtArgs>
    transactions?: boolean | WhatsappApiPackage$transactionsArgs<ExtArgs>
    _count?: boolean | WhatsappApiPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappApiPackage"]>



  export type WhatsappApiPackageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    priceMonth?: boolean
    priceYear?: boolean
    maxSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsappApiPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "priceMonth" | "priceYear" | "maxSession" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsappApiPackage"]>
  export type WhatsappApiPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | WhatsappApiPackage$servicesArgs<ExtArgs>
    transactions?: boolean | WhatsappApiPackage$transactionsArgs<ExtArgs>
    _count?: boolean | WhatsappApiPackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WhatsappApiPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappApiPackage"
    objects: {
      services: Prisma.$WhatsappApiServicePayload<ExtArgs>[]
      transactions: Prisma.$WhatsappApiTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      priceMonth: number
      priceYear: number
      maxSession: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsappApiPackage"]>
    composites: {}
  }

  type WhatsappApiPackageGetPayload<S extends boolean | null | undefined | WhatsappApiPackageDefaultArgs> = $Result.GetResult<Prisma.$WhatsappApiPackagePayload, S>

  type WhatsappApiPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappApiPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappApiPackageCountAggregateInputType | true
    }

  export interface WhatsappApiPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappApiPackage'], meta: { name: 'WhatsappApiPackage' } }
    /**
     * Find zero or one WhatsappApiPackage that matches the filter.
     * @param {WhatsappApiPackageFindUniqueArgs} args - Arguments to find a WhatsappApiPackage
     * @example
     * // Get one WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappApiPackageFindUniqueArgs>(args: SelectSubset<T, WhatsappApiPackageFindUniqueArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappApiPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappApiPackageFindUniqueOrThrowArgs} args - Arguments to find a WhatsappApiPackage
     * @example
     * // Get one WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappApiPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappApiPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageFindFirstArgs} args - Arguments to find a WhatsappApiPackage
     * @example
     * // Get one WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappApiPackageFindFirstArgs>(args?: SelectSubset<T, WhatsappApiPackageFindFirstArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageFindFirstOrThrowArgs} args - Arguments to find a WhatsappApiPackage
     * @example
     * // Get one WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappApiPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappApiPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappApiPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappApiPackages
     * const whatsappApiPackages = await prisma.whatsappApiPackage.findMany()
     * 
     * // Get first 10 WhatsappApiPackages
     * const whatsappApiPackages = await prisma.whatsappApiPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappApiPackageWithIdOnly = await prisma.whatsappApiPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappApiPackageFindManyArgs>(args?: SelectSubset<T, WhatsappApiPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappApiPackage.
     * @param {WhatsappApiPackageCreateArgs} args - Arguments to create a WhatsappApiPackage.
     * @example
     * // Create one WhatsappApiPackage
     * const WhatsappApiPackage = await prisma.whatsappApiPackage.create({
     *   data: {
     *     // ... data to create a WhatsappApiPackage
     *   }
     * })
     * 
     */
    create<T extends WhatsappApiPackageCreateArgs>(args: SelectSubset<T, WhatsappApiPackageCreateArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappApiPackages.
     * @param {WhatsappApiPackageCreateManyArgs} args - Arguments to create many WhatsappApiPackages.
     * @example
     * // Create many WhatsappApiPackages
     * const whatsappApiPackage = await prisma.whatsappApiPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappApiPackageCreateManyArgs>(args?: SelectSubset<T, WhatsappApiPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsappApiPackage.
     * @param {WhatsappApiPackageDeleteArgs} args - Arguments to delete one WhatsappApiPackage.
     * @example
     * // Delete one WhatsappApiPackage
     * const WhatsappApiPackage = await prisma.whatsappApiPackage.delete({
     *   where: {
     *     // ... filter to delete one WhatsappApiPackage
     *   }
     * })
     * 
     */
    delete<T extends WhatsappApiPackageDeleteArgs>(args: SelectSubset<T, WhatsappApiPackageDeleteArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappApiPackage.
     * @param {WhatsappApiPackageUpdateArgs} args - Arguments to update one WhatsappApiPackage.
     * @example
     * // Update one WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappApiPackageUpdateArgs>(args: SelectSubset<T, WhatsappApiPackageUpdateArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappApiPackages.
     * @param {WhatsappApiPackageDeleteManyArgs} args - Arguments to filter WhatsappApiPackages to delete.
     * @example
     * // Delete a few WhatsappApiPackages
     * const { count } = await prisma.whatsappApiPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappApiPackageDeleteManyArgs>(args?: SelectSubset<T, WhatsappApiPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappApiPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappApiPackages
     * const whatsappApiPackage = await prisma.whatsappApiPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappApiPackageUpdateManyArgs>(args: SelectSubset<T, WhatsappApiPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsappApiPackage.
     * @param {WhatsappApiPackageUpsertArgs} args - Arguments to update or create a WhatsappApiPackage.
     * @example
     * // Update or create a WhatsappApiPackage
     * const whatsappApiPackage = await prisma.whatsappApiPackage.upsert({
     *   create: {
     *     // ... data to create a WhatsappApiPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappApiPackage we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappApiPackageUpsertArgs>(args: SelectSubset<T, WhatsappApiPackageUpsertArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappApiPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageCountArgs} args - Arguments to filter WhatsappApiPackages to count.
     * @example
     * // Count the number of WhatsappApiPackages
     * const count = await prisma.whatsappApiPackage.count({
     *   where: {
     *     // ... the filter for the WhatsappApiPackages we want to count
     *   }
     * })
    **/
    count<T extends WhatsappApiPackageCountArgs>(
      args?: Subset<T, WhatsappApiPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappApiPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappApiPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappApiPackageAggregateArgs>(args: Subset<T, WhatsappApiPackageAggregateArgs>): Prisma.PrismaPromise<GetWhatsappApiPackageAggregateType<T>>

    /**
     * Group by WhatsappApiPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappApiPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappApiPackageGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappApiPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappApiPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappApiPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappApiPackage model
   */
  readonly fields: WhatsappApiPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappApiPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappApiPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends WhatsappApiPackage$servicesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappApiPackage$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends WhatsappApiPackage$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappApiPackage$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappApiPackage model
   */
  interface WhatsappApiPackageFieldRefs {
    readonly id: FieldRef<"WhatsappApiPackage", 'String'>
    readonly name: FieldRef<"WhatsappApiPackage", 'String'>
    readonly description: FieldRef<"WhatsappApiPackage", 'String'>
    readonly priceMonth: FieldRef<"WhatsappApiPackage", 'Int'>
    readonly priceYear: FieldRef<"WhatsappApiPackage", 'Int'>
    readonly maxSession: FieldRef<"WhatsappApiPackage", 'Int'>
    readonly createdAt: FieldRef<"WhatsappApiPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsappApiPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappApiPackage findUnique
   */
  export type WhatsappApiPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiPackage to fetch.
     */
    where: WhatsappApiPackageWhereUniqueInput
  }

  /**
   * WhatsappApiPackage findUniqueOrThrow
   */
  export type WhatsappApiPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiPackage to fetch.
     */
    where: WhatsappApiPackageWhereUniqueInput
  }

  /**
   * WhatsappApiPackage findFirst
   */
  export type WhatsappApiPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiPackage to fetch.
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiPackages to fetch.
     */
    orderBy?: WhatsappApiPackageOrderByWithRelationInput | WhatsappApiPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiPackages.
     */
    cursor?: WhatsappApiPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiPackages.
     */
    distinct?: WhatsappApiPackageScalarFieldEnum | WhatsappApiPackageScalarFieldEnum[]
  }

  /**
   * WhatsappApiPackage findFirstOrThrow
   */
  export type WhatsappApiPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiPackage to fetch.
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiPackages to fetch.
     */
    orderBy?: WhatsappApiPackageOrderByWithRelationInput | WhatsappApiPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiPackages.
     */
    cursor?: WhatsappApiPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiPackages.
     */
    distinct?: WhatsappApiPackageScalarFieldEnum | WhatsappApiPackageScalarFieldEnum[]
  }

  /**
   * WhatsappApiPackage findMany
   */
  export type WhatsappApiPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiPackages to fetch.
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiPackages to fetch.
     */
    orderBy?: WhatsappApiPackageOrderByWithRelationInput | WhatsappApiPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappApiPackages.
     */
    cursor?: WhatsappApiPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiPackages.
     */
    skip?: number
    distinct?: WhatsappApiPackageScalarFieldEnum | WhatsappApiPackageScalarFieldEnum[]
  }

  /**
   * WhatsappApiPackage create
   */
  export type WhatsappApiPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappApiPackage.
     */
    data: XOR<WhatsappApiPackageCreateInput, WhatsappApiPackageUncheckedCreateInput>
  }

  /**
   * WhatsappApiPackage createMany
   */
  export type WhatsappApiPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappApiPackages.
     */
    data: WhatsappApiPackageCreateManyInput | WhatsappApiPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappApiPackage update
   */
  export type WhatsappApiPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappApiPackage.
     */
    data: XOR<WhatsappApiPackageUpdateInput, WhatsappApiPackageUncheckedUpdateInput>
    /**
     * Choose, which WhatsappApiPackage to update.
     */
    where: WhatsappApiPackageWhereUniqueInput
  }

  /**
   * WhatsappApiPackage updateMany
   */
  export type WhatsappApiPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappApiPackages.
     */
    data: XOR<WhatsappApiPackageUpdateManyMutationInput, WhatsappApiPackageUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappApiPackages to update
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * Limit how many WhatsappApiPackages to update.
     */
    limit?: number
  }

  /**
   * WhatsappApiPackage upsert
   */
  export type WhatsappApiPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappApiPackage to update in case it exists.
     */
    where: WhatsappApiPackageWhereUniqueInput
    /**
     * In case the WhatsappApiPackage found by the `where` argument doesn't exist, create a new WhatsappApiPackage with this data.
     */
    create: XOR<WhatsappApiPackageCreateInput, WhatsappApiPackageUncheckedCreateInput>
    /**
     * In case the WhatsappApiPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappApiPackageUpdateInput, WhatsappApiPackageUncheckedUpdateInput>
  }

  /**
   * WhatsappApiPackage delete
   */
  export type WhatsappApiPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
    /**
     * Filter which WhatsappApiPackage to delete.
     */
    where: WhatsappApiPackageWhereUniqueInput
  }

  /**
   * WhatsappApiPackage deleteMany
   */
  export type WhatsappApiPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiPackages to delete
     */
    where?: WhatsappApiPackageWhereInput
    /**
     * Limit how many WhatsappApiPackages to delete.
     */
    limit?: number
  }

  /**
   * WhatsappApiPackage.services
   */
  export type WhatsappApiPackage$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    where?: WhatsappApiServiceWhereInput
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    cursor?: WhatsappApiServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappApiServiceScalarFieldEnum | WhatsappApiServiceScalarFieldEnum[]
  }

  /**
   * WhatsappApiPackage.transactions
   */
  export type WhatsappApiPackage$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    where?: WhatsappApiTransactionWhereInput
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    cursor?: WhatsappApiTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappApiTransactionScalarFieldEnum | WhatsappApiTransactionScalarFieldEnum[]
  }

  /**
   * WhatsappApiPackage without action
   */
  export type WhatsappApiPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiPackage
     */
    select?: WhatsappApiPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiPackage
     */
    omit?: WhatsappApiPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiPackageInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappApiTransaction
   */

  export type AggregateWhatsappApiTransaction = {
    _count: WhatsappApiTransactionCountAggregateOutputType | null
    _avg: WhatsappApiTransactionAvgAggregateOutputType | null
    _sum: WhatsappApiTransactionSumAggregateOutputType | null
    _min: WhatsappApiTransactionMinAggregateOutputType | null
    _max: WhatsappApiTransactionMaxAggregateOutputType | null
  }

  export type WhatsappApiTransactionAvgAggregateOutputType = {
    price: number | null
  }

  export type WhatsappApiTransactionSumAggregateOutputType = {
    price: number | null
  }

  export type WhatsappApiTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    duration: string | null
    price: number | null
    status: string | null
    createdAt: Date | null
  }

  export type WhatsappApiTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    duration: string | null
    price: number | null
    status: string | null
    createdAt: Date | null
  }

  export type WhatsappApiTransactionCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    duration: number
    price: number
    status: number
    createdAt: number
    _all: number
  }


  export type WhatsappApiTransactionAvgAggregateInputType = {
    price?: true
  }

  export type WhatsappApiTransactionSumAggregateInputType = {
    price?: true
  }

  export type WhatsappApiTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    duration?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type WhatsappApiTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    duration?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type WhatsappApiTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    duration?: true
    price?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WhatsappApiTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiTransaction to aggregate.
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiTransactions to fetch.
     */
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappApiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappApiTransactions
    **/
    _count?: true | WhatsappApiTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsappApiTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsappApiTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappApiTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappApiTransactionMaxAggregateInputType
  }

  export type GetWhatsappApiTransactionAggregateType<T extends WhatsappApiTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappApiTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappApiTransaction[P]>
      : GetScalarType<T[P], AggregateWhatsappApiTransaction[P]>
  }




  export type WhatsappApiTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiTransactionWhereInput
    orderBy?: WhatsappApiTransactionOrderByWithAggregationInput | WhatsappApiTransactionOrderByWithAggregationInput[]
    by: WhatsappApiTransactionScalarFieldEnum[] | WhatsappApiTransactionScalarFieldEnum
    having?: WhatsappApiTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappApiTransactionCountAggregateInputType | true
    _avg?: WhatsappApiTransactionAvgAggregateInputType
    _sum?: WhatsappApiTransactionSumAggregateInputType
    _min?: WhatsappApiTransactionMinAggregateInputType
    _max?: WhatsappApiTransactionMaxAggregateInputType
  }

  export type WhatsappApiTransactionGroupByOutputType = {
    id: string
    userId: string
    packageId: string
    duration: string
    price: number
    status: string
    createdAt: Date
    _count: WhatsappApiTransactionCountAggregateOutputType | null
    _avg: WhatsappApiTransactionAvgAggregateOutputType | null
    _sum: WhatsappApiTransactionSumAggregateOutputType | null
    _min: WhatsappApiTransactionMinAggregateOutputType | null
    _max: WhatsappApiTransactionMaxAggregateOutputType | null
  }

  type GetWhatsappApiTransactionGroupByPayload<T extends WhatsappApiTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappApiTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappApiTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappApiTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappApiTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappApiTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    duration?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | WhatsappApiPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappApiTransaction"]>



  export type WhatsappApiTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    duration?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WhatsappApiTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "duration" | "price" | "status" | "createdAt", ExtArgs["result"]["whatsappApiTransaction"]>
  export type WhatsappApiTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | WhatsappApiPackageDefaultArgs<ExtArgs>
  }

  export type $WhatsappApiTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappApiTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$WhatsappApiPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string
      duration: string
      price: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["whatsappApiTransaction"]>
    composites: {}
  }

  type WhatsappApiTransactionGetPayload<S extends boolean | null | undefined | WhatsappApiTransactionDefaultArgs> = $Result.GetResult<Prisma.$WhatsappApiTransactionPayload, S>

  type WhatsappApiTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappApiTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappApiTransactionCountAggregateInputType | true
    }

  export interface WhatsappApiTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappApiTransaction'], meta: { name: 'WhatsappApiTransaction' } }
    /**
     * Find zero or one WhatsappApiTransaction that matches the filter.
     * @param {WhatsappApiTransactionFindUniqueArgs} args - Arguments to find a WhatsappApiTransaction
     * @example
     * // Get one WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappApiTransactionFindUniqueArgs>(args: SelectSubset<T, WhatsappApiTransactionFindUniqueArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappApiTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappApiTransactionFindUniqueOrThrowArgs} args - Arguments to find a WhatsappApiTransaction
     * @example
     * // Get one WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappApiTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappApiTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionFindFirstArgs} args - Arguments to find a WhatsappApiTransaction
     * @example
     * // Get one WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappApiTransactionFindFirstArgs>(args?: SelectSubset<T, WhatsappApiTransactionFindFirstArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionFindFirstOrThrowArgs} args - Arguments to find a WhatsappApiTransaction
     * @example
     * // Get one WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappApiTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappApiTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappApiTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappApiTransactions
     * const whatsappApiTransactions = await prisma.whatsappApiTransaction.findMany()
     * 
     * // Get first 10 WhatsappApiTransactions
     * const whatsappApiTransactions = await prisma.whatsappApiTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappApiTransactionWithIdOnly = await prisma.whatsappApiTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappApiTransactionFindManyArgs>(args?: SelectSubset<T, WhatsappApiTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappApiTransaction.
     * @param {WhatsappApiTransactionCreateArgs} args - Arguments to create a WhatsappApiTransaction.
     * @example
     * // Create one WhatsappApiTransaction
     * const WhatsappApiTransaction = await prisma.whatsappApiTransaction.create({
     *   data: {
     *     // ... data to create a WhatsappApiTransaction
     *   }
     * })
     * 
     */
    create<T extends WhatsappApiTransactionCreateArgs>(args: SelectSubset<T, WhatsappApiTransactionCreateArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappApiTransactions.
     * @param {WhatsappApiTransactionCreateManyArgs} args - Arguments to create many WhatsappApiTransactions.
     * @example
     * // Create many WhatsappApiTransactions
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappApiTransactionCreateManyArgs>(args?: SelectSubset<T, WhatsappApiTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsappApiTransaction.
     * @param {WhatsappApiTransactionDeleteArgs} args - Arguments to delete one WhatsappApiTransaction.
     * @example
     * // Delete one WhatsappApiTransaction
     * const WhatsappApiTransaction = await prisma.whatsappApiTransaction.delete({
     *   where: {
     *     // ... filter to delete one WhatsappApiTransaction
     *   }
     * })
     * 
     */
    delete<T extends WhatsappApiTransactionDeleteArgs>(args: SelectSubset<T, WhatsappApiTransactionDeleteArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappApiTransaction.
     * @param {WhatsappApiTransactionUpdateArgs} args - Arguments to update one WhatsappApiTransaction.
     * @example
     * // Update one WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappApiTransactionUpdateArgs>(args: SelectSubset<T, WhatsappApiTransactionUpdateArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappApiTransactions.
     * @param {WhatsappApiTransactionDeleteManyArgs} args - Arguments to filter WhatsappApiTransactions to delete.
     * @example
     * // Delete a few WhatsappApiTransactions
     * const { count } = await prisma.whatsappApiTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappApiTransactionDeleteManyArgs>(args?: SelectSubset<T, WhatsappApiTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappApiTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappApiTransactions
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappApiTransactionUpdateManyArgs>(args: SelectSubset<T, WhatsappApiTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsappApiTransaction.
     * @param {WhatsappApiTransactionUpsertArgs} args - Arguments to update or create a WhatsappApiTransaction.
     * @example
     * // Update or create a WhatsappApiTransaction
     * const whatsappApiTransaction = await prisma.whatsappApiTransaction.upsert({
     *   create: {
     *     // ... data to create a WhatsappApiTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappApiTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappApiTransactionUpsertArgs>(args: SelectSubset<T, WhatsappApiTransactionUpsertArgs<ExtArgs>>): Prisma__WhatsappApiTransactionClient<$Result.GetResult<Prisma.$WhatsappApiTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappApiTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionCountArgs} args - Arguments to filter WhatsappApiTransactions to count.
     * @example
     * // Count the number of WhatsappApiTransactions
     * const count = await prisma.whatsappApiTransaction.count({
     *   where: {
     *     // ... the filter for the WhatsappApiTransactions we want to count
     *   }
     * })
    **/
    count<T extends WhatsappApiTransactionCountArgs>(
      args?: Subset<T, WhatsappApiTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappApiTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappApiTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappApiTransactionAggregateArgs>(args: Subset<T, WhatsappApiTransactionAggregateArgs>): Prisma.PrismaPromise<GetWhatsappApiTransactionAggregateType<T>>

    /**
     * Group by WhatsappApiTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappApiTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappApiTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappApiTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappApiTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappApiTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappApiTransaction model
   */
  readonly fields: WhatsappApiTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappApiTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappApiTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends WhatsappApiPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappApiPackageDefaultArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappApiTransaction model
   */
  interface WhatsappApiTransactionFieldRefs {
    readonly id: FieldRef<"WhatsappApiTransaction", 'String'>
    readonly userId: FieldRef<"WhatsappApiTransaction", 'String'>
    readonly packageId: FieldRef<"WhatsappApiTransaction", 'String'>
    readonly duration: FieldRef<"WhatsappApiTransaction", 'String'>
    readonly price: FieldRef<"WhatsappApiTransaction", 'Int'>
    readonly status: FieldRef<"WhatsappApiTransaction", 'String'>
    readonly createdAt: FieldRef<"WhatsappApiTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappApiTransaction findUnique
   */
  export type WhatsappApiTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiTransaction to fetch.
     */
    where: WhatsappApiTransactionWhereUniqueInput
  }

  /**
   * WhatsappApiTransaction findUniqueOrThrow
   */
  export type WhatsappApiTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiTransaction to fetch.
     */
    where: WhatsappApiTransactionWhereUniqueInput
  }

  /**
   * WhatsappApiTransaction findFirst
   */
  export type WhatsappApiTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiTransaction to fetch.
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiTransactions to fetch.
     */
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiTransactions.
     */
    cursor?: WhatsappApiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiTransactions.
     */
    distinct?: WhatsappApiTransactionScalarFieldEnum | WhatsappApiTransactionScalarFieldEnum[]
  }

  /**
   * WhatsappApiTransaction findFirstOrThrow
   */
  export type WhatsappApiTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiTransaction to fetch.
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiTransactions to fetch.
     */
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiTransactions.
     */
    cursor?: WhatsappApiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiTransactions.
     */
    distinct?: WhatsappApiTransactionScalarFieldEnum | WhatsappApiTransactionScalarFieldEnum[]
  }

  /**
   * WhatsappApiTransaction findMany
   */
  export type WhatsappApiTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiTransactions to fetch.
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiTransactions to fetch.
     */
    orderBy?: WhatsappApiTransactionOrderByWithRelationInput | WhatsappApiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappApiTransactions.
     */
    cursor?: WhatsappApiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiTransactions.
     */
    skip?: number
    distinct?: WhatsappApiTransactionScalarFieldEnum | WhatsappApiTransactionScalarFieldEnum[]
  }

  /**
   * WhatsappApiTransaction create
   */
  export type WhatsappApiTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappApiTransaction.
     */
    data: XOR<WhatsappApiTransactionCreateInput, WhatsappApiTransactionUncheckedCreateInput>
  }

  /**
   * WhatsappApiTransaction createMany
   */
  export type WhatsappApiTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappApiTransactions.
     */
    data: WhatsappApiTransactionCreateManyInput | WhatsappApiTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappApiTransaction update
   */
  export type WhatsappApiTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappApiTransaction.
     */
    data: XOR<WhatsappApiTransactionUpdateInput, WhatsappApiTransactionUncheckedUpdateInput>
    /**
     * Choose, which WhatsappApiTransaction to update.
     */
    where: WhatsappApiTransactionWhereUniqueInput
  }

  /**
   * WhatsappApiTransaction updateMany
   */
  export type WhatsappApiTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappApiTransactions.
     */
    data: XOR<WhatsappApiTransactionUpdateManyMutationInput, WhatsappApiTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappApiTransactions to update
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * Limit how many WhatsappApiTransactions to update.
     */
    limit?: number
  }

  /**
   * WhatsappApiTransaction upsert
   */
  export type WhatsappApiTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappApiTransaction to update in case it exists.
     */
    where: WhatsappApiTransactionWhereUniqueInput
    /**
     * In case the WhatsappApiTransaction found by the `where` argument doesn't exist, create a new WhatsappApiTransaction with this data.
     */
    create: XOR<WhatsappApiTransactionCreateInput, WhatsappApiTransactionUncheckedCreateInput>
    /**
     * In case the WhatsappApiTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappApiTransactionUpdateInput, WhatsappApiTransactionUncheckedUpdateInput>
  }

  /**
   * WhatsappApiTransaction delete
   */
  export type WhatsappApiTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
    /**
     * Filter which WhatsappApiTransaction to delete.
     */
    where: WhatsappApiTransactionWhereUniqueInput
  }

  /**
   * WhatsappApiTransaction deleteMany
   */
  export type WhatsappApiTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiTransactions to delete
     */
    where?: WhatsappApiTransactionWhereInput
    /**
     * Limit how many WhatsappApiTransactions to delete.
     */
    limit?: number
  }

  /**
   * WhatsappApiTransaction without action
   */
  export type WhatsappApiTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiTransaction
     */
    select?: WhatsappApiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiTransaction
     */
    omit?: WhatsappApiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiTransactionInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappApiService
   */

  export type AggregateWhatsappApiService = {
    _count: WhatsappApiServiceCountAggregateOutputType | null
    _min: WhatsappApiServiceMinAggregateOutputType | null
    _max: WhatsappApiServiceMaxAggregateOutputType | null
  }

  export type WhatsappApiServiceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type WhatsappApiServiceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type WhatsappApiServiceCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type WhatsappApiServiceMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    expiredAt?: true
    createdAt?: true
  }

  export type WhatsappApiServiceMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    expiredAt?: true
    createdAt?: true
  }

  export type WhatsappApiServiceCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type WhatsappApiServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiService to aggregate.
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiServices to fetch.
     */
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappApiServices
    **/
    _count?: true | WhatsappApiServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappApiServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappApiServiceMaxAggregateInputType
  }

  export type GetWhatsappApiServiceAggregateType<T extends WhatsappApiServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappApiService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappApiService[P]>
      : GetScalarType<T[P], AggregateWhatsappApiService[P]>
  }




  export type WhatsappApiServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappApiServiceWhereInput
    orderBy?: WhatsappApiServiceOrderByWithAggregationInput | WhatsappApiServiceOrderByWithAggregationInput[]
    by: WhatsappApiServiceScalarFieldEnum[] | WhatsappApiServiceScalarFieldEnum
    having?: WhatsappApiServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappApiServiceCountAggregateInputType | true
    _min?: WhatsappApiServiceMinAggregateInputType
    _max?: WhatsappApiServiceMaxAggregateInputType
  }

  export type WhatsappApiServiceGroupByOutputType = {
    id: string
    userId: string
    packageId: string
    expiredAt: Date
    createdAt: Date
    _count: WhatsappApiServiceCountAggregateOutputType | null
    _min: WhatsappApiServiceMinAggregateOutputType | null
    _max: WhatsappApiServiceMaxAggregateOutputType | null
  }

  type GetWhatsappApiServiceGroupByPayload<T extends WhatsappApiServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappApiServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappApiServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappApiServiceGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappApiServiceGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappApiServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | WhatsappApiPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappApiService"]>



  export type WhatsappApiServiceSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type WhatsappApiServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "expiredAt" | "createdAt", ExtArgs["result"]["whatsappApiService"]>
  export type WhatsappApiServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | WhatsappApiPackageDefaultArgs<ExtArgs>
  }

  export type $WhatsappApiServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappApiService"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$WhatsappApiPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["whatsappApiService"]>
    composites: {}
  }

  type WhatsappApiServiceGetPayload<S extends boolean | null | undefined | WhatsappApiServiceDefaultArgs> = $Result.GetResult<Prisma.$WhatsappApiServicePayload, S>

  type WhatsappApiServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappApiServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappApiServiceCountAggregateInputType | true
    }

  export interface WhatsappApiServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappApiService'], meta: { name: 'WhatsappApiService' } }
    /**
     * Find zero or one WhatsappApiService that matches the filter.
     * @param {WhatsappApiServiceFindUniqueArgs} args - Arguments to find a WhatsappApiService
     * @example
     * // Get one WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappApiServiceFindUniqueArgs>(args: SelectSubset<T, WhatsappApiServiceFindUniqueArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappApiService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappApiServiceFindUniqueOrThrowArgs} args - Arguments to find a WhatsappApiService
     * @example
     * // Get one WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappApiServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappApiServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceFindFirstArgs} args - Arguments to find a WhatsappApiService
     * @example
     * // Get one WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappApiServiceFindFirstArgs>(args?: SelectSubset<T, WhatsappApiServiceFindFirstArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappApiService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceFindFirstOrThrowArgs} args - Arguments to find a WhatsappApiService
     * @example
     * // Get one WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappApiServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappApiServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappApiServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappApiServices
     * const whatsappApiServices = await prisma.whatsappApiService.findMany()
     * 
     * // Get first 10 WhatsappApiServices
     * const whatsappApiServices = await prisma.whatsappApiService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappApiServiceWithIdOnly = await prisma.whatsappApiService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappApiServiceFindManyArgs>(args?: SelectSubset<T, WhatsappApiServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappApiService.
     * @param {WhatsappApiServiceCreateArgs} args - Arguments to create a WhatsappApiService.
     * @example
     * // Create one WhatsappApiService
     * const WhatsappApiService = await prisma.whatsappApiService.create({
     *   data: {
     *     // ... data to create a WhatsappApiService
     *   }
     * })
     * 
     */
    create<T extends WhatsappApiServiceCreateArgs>(args: SelectSubset<T, WhatsappApiServiceCreateArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappApiServices.
     * @param {WhatsappApiServiceCreateManyArgs} args - Arguments to create many WhatsappApiServices.
     * @example
     * // Create many WhatsappApiServices
     * const whatsappApiService = await prisma.whatsappApiService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappApiServiceCreateManyArgs>(args?: SelectSubset<T, WhatsappApiServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsappApiService.
     * @param {WhatsappApiServiceDeleteArgs} args - Arguments to delete one WhatsappApiService.
     * @example
     * // Delete one WhatsappApiService
     * const WhatsappApiService = await prisma.whatsappApiService.delete({
     *   where: {
     *     // ... filter to delete one WhatsappApiService
     *   }
     * })
     * 
     */
    delete<T extends WhatsappApiServiceDeleteArgs>(args: SelectSubset<T, WhatsappApiServiceDeleteArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappApiService.
     * @param {WhatsappApiServiceUpdateArgs} args - Arguments to update one WhatsappApiService.
     * @example
     * // Update one WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappApiServiceUpdateArgs>(args: SelectSubset<T, WhatsappApiServiceUpdateArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappApiServices.
     * @param {WhatsappApiServiceDeleteManyArgs} args - Arguments to filter WhatsappApiServices to delete.
     * @example
     * // Delete a few WhatsappApiServices
     * const { count } = await prisma.whatsappApiService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappApiServiceDeleteManyArgs>(args?: SelectSubset<T, WhatsappApiServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappApiServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappApiServices
     * const whatsappApiService = await prisma.whatsappApiService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappApiServiceUpdateManyArgs>(args: SelectSubset<T, WhatsappApiServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsappApiService.
     * @param {WhatsappApiServiceUpsertArgs} args - Arguments to update or create a WhatsappApiService.
     * @example
     * // Update or create a WhatsappApiService
     * const whatsappApiService = await prisma.whatsappApiService.upsert({
     *   create: {
     *     // ... data to create a WhatsappApiService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappApiService we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappApiServiceUpsertArgs>(args: SelectSubset<T, WhatsappApiServiceUpsertArgs<ExtArgs>>): Prisma__WhatsappApiServiceClient<$Result.GetResult<Prisma.$WhatsappApiServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappApiServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceCountArgs} args - Arguments to filter WhatsappApiServices to count.
     * @example
     * // Count the number of WhatsappApiServices
     * const count = await prisma.whatsappApiService.count({
     *   where: {
     *     // ... the filter for the WhatsappApiServices we want to count
     *   }
     * })
    **/
    count<T extends WhatsappApiServiceCountArgs>(
      args?: Subset<T, WhatsappApiServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappApiServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappApiService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappApiServiceAggregateArgs>(args: Subset<T, WhatsappApiServiceAggregateArgs>): Prisma.PrismaPromise<GetWhatsappApiServiceAggregateType<T>>

    /**
     * Group by WhatsappApiService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappApiServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappApiServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappApiServiceGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappApiServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappApiServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappApiServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappApiService model
   */
  readonly fields: WhatsappApiServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappApiService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappApiServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends WhatsappApiPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappApiPackageDefaultArgs<ExtArgs>>): Prisma__WhatsappApiPackageClient<$Result.GetResult<Prisma.$WhatsappApiPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappApiService model
   */
  interface WhatsappApiServiceFieldRefs {
    readonly id: FieldRef<"WhatsappApiService", 'String'>
    readonly userId: FieldRef<"WhatsappApiService", 'String'>
    readonly packageId: FieldRef<"WhatsappApiService", 'String'>
    readonly expiredAt: FieldRef<"WhatsappApiService", 'DateTime'>
    readonly createdAt: FieldRef<"WhatsappApiService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappApiService findUnique
   */
  export type WhatsappApiServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiService to fetch.
     */
    where: WhatsappApiServiceWhereUniqueInput
  }

  /**
   * WhatsappApiService findUniqueOrThrow
   */
  export type WhatsappApiServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiService to fetch.
     */
    where: WhatsappApiServiceWhereUniqueInput
  }

  /**
   * WhatsappApiService findFirst
   */
  export type WhatsappApiServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiService to fetch.
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiServices to fetch.
     */
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiServices.
     */
    cursor?: WhatsappApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiServices.
     */
    distinct?: WhatsappApiServiceScalarFieldEnum | WhatsappApiServiceScalarFieldEnum[]
  }

  /**
   * WhatsappApiService findFirstOrThrow
   */
  export type WhatsappApiServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiService to fetch.
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiServices to fetch.
     */
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappApiServices.
     */
    cursor?: WhatsappApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappApiServices.
     */
    distinct?: WhatsappApiServiceScalarFieldEnum | WhatsappApiServiceScalarFieldEnum[]
  }

  /**
   * WhatsappApiService findMany
   */
  export type WhatsappApiServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappApiServices to fetch.
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappApiServices to fetch.
     */
    orderBy?: WhatsappApiServiceOrderByWithRelationInput | WhatsappApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappApiServices.
     */
    cursor?: WhatsappApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappApiServices.
     */
    skip?: number
    distinct?: WhatsappApiServiceScalarFieldEnum | WhatsappApiServiceScalarFieldEnum[]
  }

  /**
   * WhatsappApiService create
   */
  export type WhatsappApiServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappApiService.
     */
    data: XOR<WhatsappApiServiceCreateInput, WhatsappApiServiceUncheckedCreateInput>
  }

  /**
   * WhatsappApiService createMany
   */
  export type WhatsappApiServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappApiServices.
     */
    data: WhatsappApiServiceCreateManyInput | WhatsappApiServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappApiService update
   */
  export type WhatsappApiServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappApiService.
     */
    data: XOR<WhatsappApiServiceUpdateInput, WhatsappApiServiceUncheckedUpdateInput>
    /**
     * Choose, which WhatsappApiService to update.
     */
    where: WhatsappApiServiceWhereUniqueInput
  }

  /**
   * WhatsappApiService updateMany
   */
  export type WhatsappApiServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappApiServices.
     */
    data: XOR<WhatsappApiServiceUpdateManyMutationInput, WhatsappApiServiceUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappApiServices to update
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * Limit how many WhatsappApiServices to update.
     */
    limit?: number
  }

  /**
   * WhatsappApiService upsert
   */
  export type WhatsappApiServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappApiService to update in case it exists.
     */
    where: WhatsappApiServiceWhereUniqueInput
    /**
     * In case the WhatsappApiService found by the `where` argument doesn't exist, create a new WhatsappApiService with this data.
     */
    create: XOR<WhatsappApiServiceCreateInput, WhatsappApiServiceUncheckedCreateInput>
    /**
     * In case the WhatsappApiService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappApiServiceUpdateInput, WhatsappApiServiceUncheckedUpdateInput>
  }

  /**
   * WhatsappApiService delete
   */
  export type WhatsappApiServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
    /**
     * Filter which WhatsappApiService to delete.
     */
    where: WhatsappApiServiceWhereUniqueInput
  }

  /**
   * WhatsappApiService deleteMany
   */
  export type WhatsappApiServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappApiServices to delete
     */
    where?: WhatsappApiServiceWhereInput
    /**
     * Limit how many WhatsappApiServices to delete.
     */
    limit?: number
  }

  /**
   * WhatsappApiService without action
   */
  export type WhatsappApiServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappApiService
     */
    select?: WhatsappApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappApiService
     */
    omit?: WhatsappApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappApiServiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    otp: 'otp',
    otpExpires: 'otpExpires',
    otpVerificationDeadline: 'otpVerificationDeadline',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    image: 'image',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpires: 'emailVerificationTokenExpires',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    included: 'included',
    packageId: 'packageId'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const SubcategoryScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    categoryId: 'categoryId'
  };

  export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    icon: 'icon'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AddonScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    description_en: 'description_en',
    description_id: 'description_id',
    price_idr: 'price_idr',
    price_usd: 'price_usd',
    image: 'image',
    categoryId: 'categoryId',
    duration: 'duration',
    durationUnit: 'durationUnit'
  };

  export type AddonScalarFieldEnum = (typeof AddonScalarFieldEnum)[keyof typeof AddonScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    description_en: 'description_en',
    description_id: 'description_id',
    price_idr: 'price_idr',
    price_usd: 'price_usd',
    image: 'image',
    categoryId: 'categoryId',
    subcategoryId: 'subcategoryId',
    popular: 'popular',
    bgColor: 'bgColor',
    duration: 'duration',
    durationUnit: 'durationUnit'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const WhatsAppSessionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    status: 'status',
    qr: 'qr',
    isNotification: 'isNotification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aiConfig: 'aiConfig'
  };

  export type WhatsAppSessionScalarFieldEnum = (typeof WhatsAppSessionScalarFieldEnum)[keyof typeof WhatsAppSessionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    addonId: 'addonId',
    paymentId: 'paymentId',
    transactionDate: 'transactionDate',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    referenceLink: 'referenceLink'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    paymentDate: 'paymentDate'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const WhatsappApiPackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    priceMonth: 'priceMonth',
    priceYear: 'priceYear',
    maxSession: 'maxSession',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsappApiPackageScalarFieldEnum = (typeof WhatsappApiPackageScalarFieldEnum)[keyof typeof WhatsappApiPackageScalarFieldEnum]


  export const WhatsappApiTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    duration: 'duration',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WhatsappApiTransactionScalarFieldEnum = (typeof WhatsappApiTransactionScalarFieldEnum)[keyof typeof WhatsappApiTransactionScalarFieldEnum]


  export const WhatsappApiServiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type WhatsappApiServiceScalarFieldEnum = (typeof WhatsappApiServiceScalarFieldEnum)[keyof typeof WhatsappApiServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    otp: 'otp',
    image: 'image',
    emailVerificationToken: 'emailVerificationToken',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const FeatureOrderByRelevanceFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    packageId: 'packageId'
  };

  export type FeatureOrderByRelevanceFieldEnum = (typeof FeatureOrderByRelevanceFieldEnum)[keyof typeof FeatureOrderByRelevanceFieldEnum]


  export const SubcategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    categoryId: 'categoryId'
  };

  export type SubcategoryOrderByRelevanceFieldEnum = (typeof SubcategoryOrderByRelevanceFieldEnum)[keyof typeof SubcategoryOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    icon: 'icon'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const AddonOrderByRelevanceFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    description_en: 'description_en',
    description_id: 'description_id',
    image: 'image',
    categoryId: 'categoryId',
    durationUnit: 'durationUnit'
  };

  export type AddonOrderByRelevanceFieldEnum = (typeof AddonOrderByRelevanceFieldEnum)[keyof typeof AddonOrderByRelevanceFieldEnum]


  export const PackageOrderByRelevanceFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_id: 'name_id',
    description_en: 'description_en',
    description_id: 'description_id',
    image: 'image',
    categoryId: 'categoryId',
    subcategoryId: 'subcategoryId',
    bgColor: 'bgColor',
    durationUnit: 'durationUnit'
  };

  export type PackageOrderByRelevanceFieldEnum = (typeof PackageOrderByRelevanceFieldEnum)[keyof typeof PackageOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const WhatsAppSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    status: 'status',
    qr: 'qr'
  };

  export type WhatsAppSessionOrderByRelevanceFieldEnum = (typeof WhatsAppSessionOrderByRelevanceFieldEnum)[keyof typeof WhatsAppSessionOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    addonId: 'addonId',
    paymentId: 'paymentId',
    status: 'status',
    referenceLink: 'referenceLink'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    method: 'method',
    status: 'status'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const WhatsappApiPackageOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type WhatsappApiPackageOrderByRelevanceFieldEnum = (typeof WhatsappApiPackageOrderByRelevanceFieldEnum)[keyof typeof WhatsappApiPackageOrderByRelevanceFieldEnum]


  export const WhatsappApiTransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    duration: 'duration',
    status: 'status'
  };

  export type WhatsappApiTransactionOrderByRelevanceFieldEnum = (typeof WhatsappApiTransactionOrderByRelevanceFieldEnum)[keyof typeof WhatsappApiTransactionOrderByRelevanceFieldEnum]


  export const WhatsappApiServiceOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId'
  };

  export type WhatsappApiServiceOrderByRelevanceFieldEnum = (typeof WhatsappApiServiceOrderByRelevanceFieldEnum)[keyof typeof WhatsappApiServiceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerificationDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    whatsAppSessions?: WhatsAppSessionListRelationFilter
    transactions?: TransactionListRelationFilter
    whatsappApiTransactions?: WhatsappApiTransactionListRelationFilter
    whatsappApiServices?: WhatsappApiServiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    otpVerificationDeadline?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    role?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    whatsAppSessions?: WhatsAppSessionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    whatsappApiTransactions?: WhatsappApiTransactionOrderByRelationAggregateInput
    whatsappApiServices?: WhatsappApiServiceOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    emailVerificationToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerificationDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    whatsAppSessions?: WhatsAppSessionListRelationFilter
    transactions?: TransactionListRelationFilter
    whatsappApiTransactions?: WhatsappApiTransactionListRelationFilter
    whatsappApiServices?: WhatsappApiServiceListRelationFilter
  }, "id" | "email" | "phone" | "emailVerificationToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    otpVerificationDeadline?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otpVerificationDeadline?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    phoneVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    name_en?: StringFilter<"Feature"> | string
    name_id?: StringFilter<"Feature"> | string
    included?: BoolFilter<"Feature"> | boolean
    packageId?: StringFilter<"Feature"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    included?: SortOrder
    packageId?: SortOrder
    package?: PackageOrderByWithRelationInput
    _relevance?: FeatureOrderByRelevanceInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    name_en?: StringFilter<"Feature"> | string
    name_id?: StringFilter<"Feature"> | string
    included?: BoolFilter<"Feature"> | boolean
    packageId?: StringFilter<"Feature"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    included?: SortOrder
    packageId?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    name_en?: StringWithAggregatesFilter<"Feature"> | string
    name_id?: StringWithAggregatesFilter<"Feature"> | string
    included?: BoolWithAggregatesFilter<"Feature"> | boolean
    packageId?: StringWithAggregatesFilter<"Feature"> | string
  }

  export type SubcategoryWhereInput = {
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    name_en?: StringFilter<"Subcategory"> | string
    name_id?: StringFilter<"Subcategory"> | string
    categoryId?: StringFilter<"Subcategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    packages?: PackageListRelationFilter
  }

  export type SubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    packages?: PackageOrderByRelationAggregateInput
    _relevance?: SubcategoryOrderByRelevanceInput
  }

  export type SubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_name_en?: SubcategoryCategoryIdName_enCompoundUniqueInput
    categoryId_name_id?: SubcategoryCategoryIdName_idCompoundUniqueInput
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    name_en?: StringFilter<"Subcategory"> | string
    name_id?: StringFilter<"Subcategory"> | string
    categoryId?: StringFilter<"Subcategory"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    packages?: PackageListRelationFilter
  }, "id" | "categoryId_name_en" | "categoryId_name_id">

  export type SubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    categoryId?: SortOrder
    _count?: SubcategoryCountOrderByAggregateInput
    _max?: SubcategoryMaxOrderByAggregateInput
    _min?: SubcategoryMinOrderByAggregateInput
  }

  export type SubcategoryScalarWhereWithAggregatesInput = {
    AND?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    OR?: SubcategoryScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subcategory"> | string
    name_en?: StringWithAggregatesFilter<"Subcategory"> | string
    name_id?: StringWithAggregatesFilter<"Subcategory"> | string
    categoryId?: StringWithAggregatesFilter<"Subcategory"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name_en?: StringFilter<"Category"> | string
    name_id?: StringFilter<"Category"> | string
    icon?: StringFilter<"Category"> | string
    subcategories?: SubcategoryListRelationFilter
    packages?: PackageListRelationFilter
    addons?: AddonListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    icon?: SortOrder
    subcategories?: SubcategoryOrderByRelationAggregateInput
    packages?: PackageOrderByRelationAggregateInput
    addons?: AddonOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name_en?: StringFilter<"Category"> | string
    name_id?: StringFilter<"Category"> | string
    icon?: StringFilter<"Category"> | string
    subcategories?: SubcategoryListRelationFilter
    packages?: PackageListRelationFilter
    addons?: AddonListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    icon?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name_en?: StringWithAggregatesFilter<"Category"> | string
    name_id?: StringWithAggregatesFilter<"Category"> | string
    icon?: StringWithAggregatesFilter<"Category"> | string
  }

  export type AddonWhereInput = {
    AND?: AddonWhereInput | AddonWhereInput[]
    OR?: AddonWhereInput[]
    NOT?: AddonWhereInput | AddonWhereInput[]
    id?: StringFilter<"Addon"> | string
    name_en?: StringFilter<"Addon"> | string
    name_id?: StringFilter<"Addon"> | string
    description_en?: StringNullableFilter<"Addon"> | string | null
    description_id?: StringNullableFilter<"Addon"> | string | null
    price_idr?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Addon"> | string | null
    categoryId?: StringFilter<"Addon"> | string
    duration?: IntFilter<"Addon"> | number
    durationUnit?: StringFilter<"Addon"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type AddonOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_id?: SortOrderInput | SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    category?: CategoryOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: AddonOrderByRelevanceInput
  }

  export type AddonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_name_en?: AddonCategoryIdName_enCompoundUniqueInput
    categoryId_name_id?: AddonCategoryIdName_idCompoundUniqueInput
    AND?: AddonWhereInput | AddonWhereInput[]
    OR?: AddonWhereInput[]
    NOT?: AddonWhereInput | AddonWhereInput[]
    name_en?: StringFilter<"Addon"> | string
    name_id?: StringFilter<"Addon"> | string
    description_en?: StringNullableFilter<"Addon"> | string | null
    description_id?: StringNullableFilter<"Addon"> | string | null
    price_idr?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Addon"> | string | null
    categoryId?: StringFilter<"Addon"> | string
    duration?: IntFilter<"Addon"> | number
    durationUnit?: StringFilter<"Addon"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "categoryId_name_en" | "categoryId_name_id">

  export type AddonOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_id?: SortOrderInput | SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    _count?: AddonCountOrderByAggregateInput
    _avg?: AddonAvgOrderByAggregateInput
    _max?: AddonMaxOrderByAggregateInput
    _min?: AddonMinOrderByAggregateInput
    _sum?: AddonSumOrderByAggregateInput
  }

  export type AddonScalarWhereWithAggregatesInput = {
    AND?: AddonScalarWhereWithAggregatesInput | AddonScalarWhereWithAggregatesInput[]
    OR?: AddonScalarWhereWithAggregatesInput[]
    NOT?: AddonScalarWhereWithAggregatesInput | AddonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Addon"> | string
    name_en?: StringWithAggregatesFilter<"Addon"> | string
    name_id?: StringWithAggregatesFilter<"Addon"> | string
    description_en?: StringNullableWithAggregatesFilter<"Addon"> | string | null
    description_id?: StringNullableWithAggregatesFilter<"Addon"> | string | null
    price_idr?: DecimalWithAggregatesFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalWithAggregatesFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableWithAggregatesFilter<"Addon"> | string | null
    categoryId?: StringWithAggregatesFilter<"Addon"> | string
    duration?: IntWithAggregatesFilter<"Addon"> | number
    durationUnit?: StringWithAggregatesFilter<"Addon"> | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    name_en?: StringFilter<"Package"> | string
    name_id?: StringFilter<"Package"> | string
    description_en?: StringFilter<"Package"> | string
    description_id?: StringFilter<"Package"> | string
    price_idr?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Package"> | string
    categoryId?: StringFilter<"Package"> | string
    subcategoryId?: StringFilter<"Package"> | string
    popular?: BoolNullableFilter<"Package"> | boolean | null
    bgColor?: StringNullableFilter<"Package"> | string | null
    duration?: IntFilter<"Package"> | number
    durationUnit?: StringFilter<"Package"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    features?: FeatureListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    popular?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    category?: CategoryOrderByWithRelationInput
    subcategory?: SubcategoryOrderByWithRelationInput
    features?: FeatureOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: PackageOrderByRelevanceInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name_en?: StringFilter<"Package"> | string
    name_id?: StringFilter<"Package"> | string
    description_en?: StringFilter<"Package"> | string
    description_id?: StringFilter<"Package"> | string
    price_idr?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Package"> | string
    categoryId?: StringFilter<"Package"> | string
    subcategoryId?: StringFilter<"Package"> | string
    popular?: BoolNullableFilter<"Package"> | boolean | null
    bgColor?: StringNullableFilter<"Package"> | string | null
    duration?: IntFilter<"Package"> | number
    durationUnit?: StringFilter<"Package"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    features?: FeatureListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    popular?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    name_en?: StringWithAggregatesFilter<"Package"> | string
    name_id?: StringWithAggregatesFilter<"Package"> | string
    description_en?: StringWithAggregatesFilter<"Package"> | string
    description_id?: StringWithAggregatesFilter<"Package"> | string
    price_idr?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    image?: StringWithAggregatesFilter<"Package"> | string
    categoryId?: StringWithAggregatesFilter<"Package"> | string
    subcategoryId?: StringWithAggregatesFilter<"Package"> | string
    popular?: BoolNullableWithAggregatesFilter<"Package"> | boolean | null
    bgColor?: StringNullableWithAggregatesFilter<"Package"> | string | null
    duration?: IntWithAggregatesFilter<"Package"> | number
    durationUnit?: StringWithAggregatesFilter<"Package"> | string
  }

  export type WhatsAppSessionWhereInput = {
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    id?: StringFilter<"WhatsAppSession"> | string
    sessionId?: StringFilter<"WhatsAppSession"> | string
    userId?: StringFilter<"WhatsAppSession"> | string
    status?: StringFilter<"WhatsAppSession"> | string
    qr?: StringNullableFilter<"WhatsAppSession"> | string | null
    isNotification?: BoolFilter<"WhatsAppSession"> | boolean
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    aiConfig?: JsonNullableFilter<"WhatsAppSession">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WhatsAppSessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    qr?: SortOrderInput | SortOrder
    isNotification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiConfig?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: WhatsAppSessionOrderByRelevanceInput
  }

  export type WhatsAppSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    userId?: StringFilter<"WhatsAppSession"> | string
    status?: StringFilter<"WhatsAppSession"> | string
    qr?: StringNullableFilter<"WhatsAppSession"> | string | null
    isNotification?: BoolFilter<"WhatsAppSession"> | boolean
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    aiConfig?: JsonNullableFilter<"WhatsAppSession">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId">

  export type WhatsAppSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    qr?: SortOrderInput | SortOrder
    isNotification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiConfig?: SortOrderInput | SortOrder
    _count?: WhatsAppSessionCountOrderByAggregateInput
    _max?: WhatsAppSessionMaxOrderByAggregateInput
    _min?: WhatsAppSessionMinOrderByAggregateInput
  }

  export type WhatsAppSessionScalarWhereWithAggregatesInput = {
    AND?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    OR?: WhatsAppSessionScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    sessionId?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    userId?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    status?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    qr?: StringNullableWithAggregatesFilter<"WhatsAppSession"> | string | null
    isNotification?: BoolWithAggregatesFilter<"WhatsAppSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
    aiConfig?: JsonNullableWithAggregatesFilter<"WhatsAppSession">
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    packageId?: StringNullableFilter<"Transaction"> | string | null
    addonId?: StringNullableFilter<"Transaction"> | string | null
    paymentId?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    startDate?: DateTimeFilter<"Transaction"> | Date | string
    endDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: StringFilter<"Transaction"> | string
    referenceLink?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    addon?: XOR<AddonNullableScalarRelationFilter, AddonWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    addonId?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    referenceLink?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    package?: PackageOrderByWithRelationInput
    addon?: AddonOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    packageId?: StringNullableFilter<"Transaction"> | string | null
    addonId?: StringNullableFilter<"Transaction"> | string | null
    paymentId?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    startDate?: DateTimeFilter<"Transaction"> | Date | string
    endDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: StringFilter<"Transaction"> | string
    referenceLink?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    addon?: XOR<AddonNullableScalarRelationFilter, AddonWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    addonId?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    referenceLink?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    packageId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    addonId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    paymentId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    transactionDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    status?: StringWithAggregatesFilter<"Transaction"> | string
    referenceLink?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    transaction?: TransactionOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type WhatsappApiPackageWhereInput = {
    AND?: WhatsappApiPackageWhereInput | WhatsappApiPackageWhereInput[]
    OR?: WhatsappApiPackageWhereInput[]
    NOT?: WhatsappApiPackageWhereInput | WhatsappApiPackageWhereInput[]
    id?: StringFilter<"WhatsappApiPackage"> | string
    name?: StringFilter<"WhatsappApiPackage"> | string
    description?: StringNullableFilter<"WhatsappApiPackage"> | string | null
    priceMonth?: IntFilter<"WhatsappApiPackage"> | number
    priceYear?: IntFilter<"WhatsappApiPackage"> | number
    maxSession?: IntFilter<"WhatsappApiPackage"> | number
    createdAt?: DateTimeFilter<"WhatsappApiPackage"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappApiPackage"> | Date | string
    services?: WhatsappApiServiceListRelationFilter
    transactions?: WhatsappApiTransactionListRelationFilter
  }

  export type WhatsappApiPackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: WhatsappApiServiceOrderByRelationAggregateInput
    transactions?: WhatsappApiTransactionOrderByRelationAggregateInput
    _relevance?: WhatsappApiPackageOrderByRelevanceInput
  }

  export type WhatsappApiPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsappApiPackageWhereInput | WhatsappApiPackageWhereInput[]
    OR?: WhatsappApiPackageWhereInput[]
    NOT?: WhatsappApiPackageWhereInput | WhatsappApiPackageWhereInput[]
    name?: StringFilter<"WhatsappApiPackage"> | string
    description?: StringNullableFilter<"WhatsappApiPackage"> | string | null
    priceMonth?: IntFilter<"WhatsappApiPackage"> | number
    priceYear?: IntFilter<"WhatsappApiPackage"> | number
    maxSession?: IntFilter<"WhatsappApiPackage"> | number
    createdAt?: DateTimeFilter<"WhatsappApiPackage"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappApiPackage"> | Date | string
    services?: WhatsappApiServiceListRelationFilter
    transactions?: WhatsappApiTransactionListRelationFilter
  }, "id">

  export type WhatsappApiPackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsappApiPackageCountOrderByAggregateInput
    _avg?: WhatsappApiPackageAvgOrderByAggregateInput
    _max?: WhatsappApiPackageMaxOrderByAggregateInput
    _min?: WhatsappApiPackageMinOrderByAggregateInput
    _sum?: WhatsappApiPackageSumOrderByAggregateInput
  }

  export type WhatsappApiPackageScalarWhereWithAggregatesInput = {
    AND?: WhatsappApiPackageScalarWhereWithAggregatesInput | WhatsappApiPackageScalarWhereWithAggregatesInput[]
    OR?: WhatsappApiPackageScalarWhereWithAggregatesInput[]
    NOT?: WhatsappApiPackageScalarWhereWithAggregatesInput | WhatsappApiPackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappApiPackage"> | string
    name?: StringWithAggregatesFilter<"WhatsappApiPackage"> | string
    description?: StringNullableWithAggregatesFilter<"WhatsappApiPackage"> | string | null
    priceMonth?: IntWithAggregatesFilter<"WhatsappApiPackage"> | number
    priceYear?: IntWithAggregatesFilter<"WhatsappApiPackage"> | number
    maxSession?: IntWithAggregatesFilter<"WhatsappApiPackage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappApiPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsappApiPackage"> | Date | string
  }

  export type WhatsappApiTransactionWhereInput = {
    AND?: WhatsappApiTransactionWhereInput | WhatsappApiTransactionWhereInput[]
    OR?: WhatsappApiTransactionWhereInput[]
    NOT?: WhatsappApiTransactionWhereInput | WhatsappApiTransactionWhereInput[]
    id?: StringFilter<"WhatsappApiTransaction"> | string
    userId?: StringFilter<"WhatsappApiTransaction"> | string
    packageId?: StringFilter<"WhatsappApiTransaction"> | string
    duration?: StringFilter<"WhatsappApiTransaction"> | string
    price?: IntFilter<"WhatsappApiTransaction"> | number
    status?: StringFilter<"WhatsappApiTransaction"> | string
    createdAt?: DateTimeFilter<"WhatsappApiTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<WhatsappApiPackageScalarRelationFilter, WhatsappApiPackageWhereInput>
  }

  export type WhatsappApiTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    package?: WhatsappApiPackageOrderByWithRelationInput
    _relevance?: WhatsappApiTransactionOrderByRelevanceInput
  }

  export type WhatsappApiTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsappApiTransactionWhereInput | WhatsappApiTransactionWhereInput[]
    OR?: WhatsappApiTransactionWhereInput[]
    NOT?: WhatsappApiTransactionWhereInput | WhatsappApiTransactionWhereInput[]
    userId?: StringFilter<"WhatsappApiTransaction"> | string
    packageId?: StringFilter<"WhatsappApiTransaction"> | string
    duration?: StringFilter<"WhatsappApiTransaction"> | string
    price?: IntFilter<"WhatsappApiTransaction"> | number
    status?: StringFilter<"WhatsappApiTransaction"> | string
    createdAt?: DateTimeFilter<"WhatsappApiTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<WhatsappApiPackageScalarRelationFilter, WhatsappApiPackageWhereInput>
  }, "id">

  export type WhatsappApiTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WhatsappApiTransactionCountOrderByAggregateInput
    _avg?: WhatsappApiTransactionAvgOrderByAggregateInput
    _max?: WhatsappApiTransactionMaxOrderByAggregateInput
    _min?: WhatsappApiTransactionMinOrderByAggregateInput
    _sum?: WhatsappApiTransactionSumOrderByAggregateInput
  }

  export type WhatsappApiTransactionScalarWhereWithAggregatesInput = {
    AND?: WhatsappApiTransactionScalarWhereWithAggregatesInput | WhatsappApiTransactionScalarWhereWithAggregatesInput[]
    OR?: WhatsappApiTransactionScalarWhereWithAggregatesInput[]
    NOT?: WhatsappApiTransactionScalarWhereWithAggregatesInput | WhatsappApiTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappApiTransaction"> | string
    userId?: StringWithAggregatesFilter<"WhatsappApiTransaction"> | string
    packageId?: StringWithAggregatesFilter<"WhatsappApiTransaction"> | string
    duration?: StringWithAggregatesFilter<"WhatsappApiTransaction"> | string
    price?: IntWithAggregatesFilter<"WhatsappApiTransaction"> | number
    status?: StringWithAggregatesFilter<"WhatsappApiTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappApiTransaction"> | Date | string
  }

  export type WhatsappApiServiceWhereInput = {
    AND?: WhatsappApiServiceWhereInput | WhatsappApiServiceWhereInput[]
    OR?: WhatsappApiServiceWhereInput[]
    NOT?: WhatsappApiServiceWhereInput | WhatsappApiServiceWhereInput[]
    id?: StringFilter<"WhatsappApiService"> | string
    userId?: StringFilter<"WhatsappApiService"> | string
    packageId?: StringFilter<"WhatsappApiService"> | string
    expiredAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
    createdAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<WhatsappApiPackageScalarRelationFilter, WhatsappApiPackageWhereInput>
  }

  export type WhatsappApiServiceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    package?: WhatsappApiPackageOrderByWithRelationInput
    _relevance?: WhatsappApiServiceOrderByRelevanceInput
  }

  export type WhatsappApiServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsappApiServiceWhereInput | WhatsappApiServiceWhereInput[]
    OR?: WhatsappApiServiceWhereInput[]
    NOT?: WhatsappApiServiceWhereInput | WhatsappApiServiceWhereInput[]
    userId?: StringFilter<"WhatsappApiService"> | string
    packageId?: StringFilter<"WhatsappApiService"> | string
    expiredAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
    createdAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<WhatsappApiPackageScalarRelationFilter, WhatsappApiPackageWhereInput>
  }, "id">

  export type WhatsappApiServiceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: WhatsappApiServiceCountOrderByAggregateInput
    _max?: WhatsappApiServiceMaxOrderByAggregateInput
    _min?: WhatsappApiServiceMinOrderByAggregateInput
  }

  export type WhatsappApiServiceScalarWhereWithAggregatesInput = {
    AND?: WhatsappApiServiceScalarWhereWithAggregatesInput | WhatsappApiServiceScalarWhereWithAggregatesInput[]
    OR?: WhatsappApiServiceScalarWhereWithAggregatesInput[]
    NOT?: WhatsappApiServiceScalarWhereWithAggregatesInput | WhatsappApiServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappApiService"> | string
    userId?: StringWithAggregatesFilter<"WhatsappApiService"> | string
    packageId?: StringWithAggregatesFilter<"WhatsappApiService"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"WhatsappApiService"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappApiService"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
    package: PackageCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
    packageId: string
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureCreateManyInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
    packageId: string
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryCreateInput = {
    id?: string
    name_en: string
    name_id: string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
    packages?: PackageCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateInput = {
    id?: string
    name_en: string
    name_id: string
    categoryId: string
    packages?: PackageUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    packages?: PackageUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryCreateManyInput = {
    id?: string
    name_en: string
    name_id: string
    categoryId: string
  }

  export type SubcategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
    packages?: PackageCreateNestedManyWithoutCategoryInput
    addons?: AddonCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
    packages?: PackageUncheckedCreateNestedManyWithoutCategoryInput
    addons?: AddonUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
    packages?: PackageUpdateManyWithoutCategoryNestedInput
    addons?: AddonUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
    packages?: PackageUncheckedUpdateManyWithoutCategoryNestedInput
    addons?: AddonUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type AddonCreateInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutAddonsInput
    transactions?: TransactionCreateNestedManyWithoutAddonInput
  }

  export type AddonUncheckedCreateInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    categoryId: string
    duration: number
    durationUnit: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAddonInput
  }

  export type AddonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutAddonsNestedInput
    transactions?: TransactionUpdateManyWithoutAddonNestedInput
  }

  export type AddonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type AddonCreateManyInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    categoryId: string
    duration: number
    durationUnit: string
  }

  export type AddonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type AddonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutPackagesInput
    subcategory: SubcategoryCreateNestedOneWithoutPackagesInput
    features?: FeatureCreateNestedManyWithoutPackageInput
    transactions?: TransactionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    features?: FeatureUncheckedCreateNestedManyWithoutPackageInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPackagesNestedInput
    subcategory?: SubcategoryUpdateOneRequiredWithoutPackagesNestedInput
    features?: FeatureUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsAppSessionCreateInput = {
    id?: string
    sessionId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutWhatsAppSessionsInput
  }

  export type WhatsAppSessionUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutWhatsAppSessionsNestedInput
  }

  export type WhatsAppSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionCreateInput = {
    id?: string
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
    package?: PackageCreateNestedOneWithoutTransactionsInput
    addon?: AddonCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    packageId?: string | null
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    package?: PackageUpdateOneWithoutTransactionsNestedInput
    addon?: AddonUpdateOneWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    packageId?: string | null
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    status: string
    paymentDate?: Date | string | null
    transaction?: TransactionCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: string
    status: string
    paymentDate?: Date | string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: string
    status: string
    paymentDate?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WhatsappApiPackageCreateInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: WhatsappApiServiceCreateNestedManyWithoutPackageInput
    transactions?: WhatsappApiTransactionCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: WhatsappApiServiceUncheckedCreateNestedManyWithoutPackageInput
    transactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: WhatsappApiServiceUpdateManyWithoutPackageNestedInput
    transactions?: WhatsappApiTransactionUpdateManyWithoutPackageNestedInput
  }

  export type WhatsappApiPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: WhatsappApiServiceUncheckedUpdateManyWithoutPackageNestedInput
    transactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type WhatsappApiPackageCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappApiPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionCreateInput = {
    id?: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappApiTransactionsInput
    package: WhatsappApiPackageCreateNestedOneWithoutTransactionsInput
  }

  export type WhatsappApiTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    packageId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappApiTransactionsNestedInput
    package?: WhatsappApiPackageUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type WhatsappApiTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionCreateManyInput = {
    id?: string
    userId: string
    packageId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceCreateInput = {
    id?: string
    expiredAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappApiServicesInput
    package: WhatsappApiPackageCreateNestedOneWithoutServicesInput
  }

  export type WhatsappApiServiceUncheckedCreateInput = {
    id?: string
    userId: string
    packageId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappApiServicesNestedInput
    package?: WhatsappApiPackageUpdateOneRequiredWithoutServicesNestedInput
  }

  export type WhatsappApiServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceCreateManyInput = {
    id?: string
    userId: string
    packageId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type WhatsAppSessionListRelationFilter = {
    every?: WhatsAppSessionWhereInput
    some?: WhatsAppSessionWhereInput
    none?: WhatsAppSessionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type WhatsappApiTransactionListRelationFilter = {
    every?: WhatsappApiTransactionWhereInput
    some?: WhatsappApiTransactionWhereInput
    none?: WhatsappApiTransactionWhereInput
  }

  export type WhatsappApiServiceListRelationFilter = {
    every?: WhatsappApiServiceWhereInput
    some?: WhatsappApiServiceWhereInput
    none?: WhatsappApiServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappApiTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappApiServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerificationDeadline?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    image?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerificationDeadline?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    image?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerificationDeadline?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    image?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type FeatureOrderByRelevanceInput = {
    fields: FeatureOrderByRelevanceFieldEnum | FeatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    included?: SortOrder
    packageId?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    included?: SortOrder
    packageId?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    included?: SortOrder
    packageId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubcategoryOrderByRelevanceInput = {
    fields: SubcategoryOrderByRelevanceFieldEnum | SubcategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubcategoryCategoryIdName_enCompoundUniqueInput = {
    categoryId: string
    name_en: string
  }

  export type SubcategoryCategoryIdName_idCompoundUniqueInput = {
    categoryId: string
    name_id: string
  }

  export type SubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryListRelationFilter = {
    every?: SubcategoryWhereInput
    some?: SubcategoryWhereInput
    none?: SubcategoryWhereInput
  }

  export type AddonListRelationFilter = {
    every?: AddonWhereInput
    some?: AddonWhereInput
    none?: AddonWhereInput
  }

  export type SubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    icon?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AddonOrderByRelevanceInput = {
    fields: AddonOrderByRelevanceFieldEnum | AddonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddonCategoryIdName_enCompoundUniqueInput = {
    categoryId: string
    name_en: string
  }

  export type AddonCategoryIdName_idCompoundUniqueInput = {
    categoryId: string
    name_id: string
  }

  export type AddonCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type AddonAvgOrderByAggregateInput = {
    price_idr?: SortOrder
    price_usd?: SortOrder
    duration?: SortOrder
  }

  export type AddonMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type AddonMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type AddonSumOrderByAggregateInput = {
    price_idr?: SortOrder
    price_usd?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SubcategoryScalarRelationFilter = {
    is?: SubcategoryWhereInput
    isNot?: SubcategoryWhereInput
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageOrderByRelevanceInput = {
    fields: PackageOrderByRelevanceFieldEnum | PackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    popular?: SortOrder
    bgColor?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    price_idr?: SortOrder
    price_usd?: SortOrder
    duration?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    popular?: SortOrder
    bgColor?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    price_idr?: SortOrder
    price_usd?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    popular?: SortOrder
    bgColor?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    price_idr?: SortOrder
    price_usd?: SortOrder
    duration?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WhatsAppSessionOrderByRelevanceInput = {
    fields: WhatsAppSessionOrderByRelevanceFieldEnum | WhatsAppSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsAppSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    isNotification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiConfig?: SortOrder
  }

  export type WhatsAppSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    isNotification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    isNotification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PackageNullableScalarRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type AddonNullableScalarRelationFilter = {
    is?: AddonWhereInput | null
    isNot?: AddonWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    addonId?: SortOrder
    paymentId?: SortOrder
    transactionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    referenceLink?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    addonId?: SortOrder
    paymentId?: SortOrder
    transactionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    referenceLink?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    addonId?: SortOrder
    paymentId?: SortOrder
    transactionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    referenceLink?: SortOrder
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WhatsappApiPackageOrderByRelevanceInput = {
    fields: WhatsappApiPackageOrderByRelevanceFieldEnum | WhatsappApiPackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsappApiPackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappApiPackageAvgOrderByAggregateInput = {
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
  }

  export type WhatsappApiPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappApiPackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappApiPackageSumOrderByAggregateInput = {
    priceMonth?: SortOrder
    priceYear?: SortOrder
    maxSession?: SortOrder
  }

  export type WhatsappApiPackageScalarRelationFilter = {
    is?: WhatsappApiPackageWhereInput
    isNot?: WhatsappApiPackageWhereInput
  }

  export type WhatsappApiTransactionOrderByRelevanceInput = {
    fields: WhatsappApiTransactionOrderByRelevanceFieldEnum | WhatsappApiTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsappApiTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsappApiTransactionAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WhatsappApiTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsappApiTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsappApiTransactionSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WhatsappApiServiceOrderByRelevanceInput = {
    fields: WhatsappApiServiceOrderByRelevanceFieldEnum | WhatsappApiServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsappApiServiceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsappApiServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsappApiServiceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type WhatsAppSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput> | WhatsAppSessionCreateWithoutUserInput[] | WhatsAppSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutUserInput | WhatsAppSessionCreateOrConnectWithoutUserInput[]
    createMany?: WhatsAppSessionCreateManyUserInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WhatsappApiTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput> | WhatsappApiTransactionCreateWithoutUserInput[] | WhatsappApiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutUserInput | WhatsappApiTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WhatsappApiTransactionCreateManyUserInputEnvelope
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
  }

  export type WhatsappApiServiceCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput> | WhatsappApiServiceCreateWithoutUserInput[] | WhatsappApiServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutUserInput | WhatsappApiServiceCreateOrConnectWithoutUserInput[]
    createMany?: WhatsappApiServiceCreateManyUserInputEnvelope
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput> | WhatsAppSessionCreateWithoutUserInput[] | WhatsAppSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutUserInput | WhatsAppSessionCreateOrConnectWithoutUserInput[]
    createMany?: WhatsAppSessionCreateManyUserInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput> | WhatsappApiTransactionCreateWithoutUserInput[] | WhatsappApiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutUserInput | WhatsappApiTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WhatsappApiTransactionCreateManyUserInputEnvelope
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
  }

  export type WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput> | WhatsappApiServiceCreateWithoutUserInput[] | WhatsappApiServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutUserInput | WhatsappApiServiceCreateOrConnectWithoutUserInput[]
    createMany?: WhatsappApiServiceCreateManyUserInputEnvelope
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type WhatsAppSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput> | WhatsAppSessionCreateWithoutUserInput[] | WhatsAppSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutUserInput | WhatsAppSessionCreateOrConnectWithoutUserInput[]
    upsert?: WhatsAppSessionUpsertWithWhereUniqueWithoutUserInput | WhatsAppSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsAppSessionCreateManyUserInputEnvelope
    set?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    disconnect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    delete?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    update?: WhatsAppSessionUpdateWithWhereUniqueWithoutUserInput | WhatsAppSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsAppSessionUpdateManyWithWhereWithoutUserInput | WhatsAppSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WhatsappApiTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput> | WhatsappApiTransactionCreateWithoutUserInput[] | WhatsappApiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutUserInput | WhatsappApiTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WhatsappApiTransactionUpsertWithWhereUniqueWithoutUserInput | WhatsappApiTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsappApiTransactionCreateManyUserInputEnvelope
    set?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    disconnect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    delete?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    update?: WhatsappApiTransactionUpdateWithWhereUniqueWithoutUserInput | WhatsappApiTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsappApiTransactionUpdateManyWithWhereWithoutUserInput | WhatsappApiTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
  }

  export type WhatsappApiServiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput> | WhatsappApiServiceCreateWithoutUserInput[] | WhatsappApiServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutUserInput | WhatsappApiServiceCreateOrConnectWithoutUserInput[]
    upsert?: WhatsappApiServiceUpsertWithWhereUniqueWithoutUserInput | WhatsappApiServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsappApiServiceCreateManyUserInputEnvelope
    set?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    disconnect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    delete?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    update?: WhatsappApiServiceUpdateWithWhereUniqueWithoutUserInput | WhatsappApiServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsappApiServiceUpdateManyWithWhereWithoutUserInput | WhatsappApiServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput> | WhatsAppSessionCreateWithoutUserInput[] | WhatsAppSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutUserInput | WhatsAppSessionCreateOrConnectWithoutUserInput[]
    upsert?: WhatsAppSessionUpsertWithWhereUniqueWithoutUserInput | WhatsAppSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsAppSessionCreateManyUserInputEnvelope
    set?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    disconnect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    delete?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    update?: WhatsAppSessionUpdateWithWhereUniqueWithoutUserInput | WhatsAppSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsAppSessionUpdateManyWithWhereWithoutUserInput | WhatsAppSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput> | WhatsappApiTransactionCreateWithoutUserInput[] | WhatsappApiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutUserInput | WhatsappApiTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WhatsappApiTransactionUpsertWithWhereUniqueWithoutUserInput | WhatsappApiTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsappApiTransactionCreateManyUserInputEnvelope
    set?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    disconnect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    delete?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    update?: WhatsappApiTransactionUpdateWithWhereUniqueWithoutUserInput | WhatsappApiTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsappApiTransactionUpdateManyWithWhereWithoutUserInput | WhatsappApiTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
  }

  export type WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput> | WhatsappApiServiceCreateWithoutUserInput[] | WhatsappApiServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutUserInput | WhatsappApiServiceCreateOrConnectWithoutUserInput[]
    upsert?: WhatsappApiServiceUpsertWithWhereUniqueWithoutUserInput | WhatsappApiServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhatsappApiServiceCreateManyUserInputEnvelope
    set?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    disconnect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    delete?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    update?: WhatsappApiServiceUpdateWithWhereUniqueWithoutUserInput | WhatsappApiServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhatsappApiServiceUpdateManyWithWhereWithoutUserInput | WhatsappApiServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PackageCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<PackageCreateWithoutFeaturesInput, PackageUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutFeaturesInput
    connect?: PackageWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PackageUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<PackageCreateWithoutFeaturesInput, PackageUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutFeaturesInput
    upsert?: PackageUpsertWithoutFeaturesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutFeaturesInput, PackageUpdateWithoutFeaturesInput>, PackageUncheckedUpdateWithoutFeaturesInput>
  }

  export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type PackageCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput> | PackageCreateWithoutSubcategoryInput[] | PackageUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSubcategoryInput | PackageCreateOrConnectWithoutSubcategoryInput[]
    createMany?: PackageCreateManySubcategoryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput> | PackageCreateWithoutSubcategoryInput[] | PackageUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSubcategoryInput | PackageCreateOrConnectWithoutSubcategoryInput[]
    createMany?: PackageCreateManySubcategoryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryUpsertWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryUpdateWithoutSubcategoriesInput>, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type PackageUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput> | PackageCreateWithoutSubcategoryInput[] | PackageUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSubcategoryInput | PackageCreateOrConnectWithoutSubcategoryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutSubcategoryInput | PackageUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: PackageCreateManySubcategoryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutSubcategoryInput | PackageUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutSubcategoryInput | PackageUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput> | PackageCreateWithoutSubcategoryInput[] | PackageUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutSubcategoryInput | PackageCreateOrConnectWithoutSubcategoryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutSubcategoryInput | PackageUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: PackageCreateManySubcategoryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutSubcategoryInput | PackageUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutSubcategoryInput | PackageUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type SubcategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput> | PackageCreateWithoutCategoryInput[] | PackageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutCategoryInput | PackageCreateOrConnectWithoutCategoryInput[]
    createMany?: PackageCreateManyCategoryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type AddonCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput> | AddonCreateWithoutCategoryInput[] | AddonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutCategoryInput | AddonCreateOrConnectWithoutCategoryInput[]
    createMany?: AddonCreateManyCategoryInputEnvelope
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput> | PackageCreateWithoutCategoryInput[] | PackageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutCategoryInput | PackageCreateOrConnectWithoutCategoryInput[]
    createMany?: PackageCreateManyCategoryInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type AddonUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput> | AddonCreateWithoutCategoryInput[] | AddonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutCategoryInput | AddonCreateOrConnectWithoutCategoryInput[]
    createMany?: AddonCreateManyCategoryInputEnvelope
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
  }

  export type SubcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput> | PackageCreateWithoutCategoryInput[] | PackageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutCategoryInput | PackageCreateOrConnectWithoutCategoryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutCategoryInput | PackageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PackageCreateManyCategoryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutCategoryInput | PackageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutCategoryInput | PackageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type AddonUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput> | AddonCreateWithoutCategoryInput[] | AddonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutCategoryInput | AddonCreateOrConnectWithoutCategoryInput[]
    upsert?: AddonUpsertWithWhereUniqueWithoutCategoryInput | AddonUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AddonCreateManyCategoryInputEnvelope
    set?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    disconnect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    delete?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    update?: AddonUpdateWithWhereUniqueWithoutCategoryInput | AddonUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AddonUpdateManyWithWhereWithoutCategoryInput | AddonUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AddonScalarWhereInput | AddonScalarWhereInput[]
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput> | PackageCreateWithoutCategoryInput[] | PackageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutCategoryInput | PackageCreateOrConnectWithoutCategoryInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutCategoryInput | PackageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PackageCreateManyCategoryInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutCategoryInput | PackageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutCategoryInput | PackageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type AddonUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput> | AddonCreateWithoutCategoryInput[] | AddonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutCategoryInput | AddonCreateOrConnectWithoutCategoryInput[]
    upsert?: AddonUpsertWithWhereUniqueWithoutCategoryInput | AddonUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AddonCreateManyCategoryInputEnvelope
    set?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    disconnect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    delete?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    update?: AddonUpdateWithWhereUniqueWithoutCategoryInput | AddonUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AddonUpdateManyWithWhereWithoutCategoryInput | AddonUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AddonScalarWhereInput | AddonScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAddonsInput = {
    create?: XOR<CategoryCreateWithoutAddonsInput, CategoryUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAddonsInput
    connect?: CategoryWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAddonInput = {
    create?: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput> | TransactionCreateWithoutAddonInput[] | TransactionUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddonInput | TransactionCreateOrConnectWithoutAddonInput[]
    createMany?: TransactionCreateManyAddonInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput> | TransactionCreateWithoutAddonInput[] | TransactionUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddonInput | TransactionCreateOrConnectWithoutAddonInput[]
    createMany?: TransactionCreateManyAddonInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<CategoryCreateWithoutAddonsInput, CategoryUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAddonsInput
    upsert?: CategoryUpsertWithoutAddonsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAddonsInput, CategoryUpdateWithoutAddonsInput>, CategoryUncheckedUpdateWithoutAddonsInput>
  }

  export type TransactionUpdateManyWithoutAddonNestedInput = {
    create?: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput> | TransactionCreateWithoutAddonInput[] | TransactionUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddonInput | TransactionCreateOrConnectWithoutAddonInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAddonInput | TransactionUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: TransactionCreateManyAddonInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAddonInput | TransactionUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAddonInput | TransactionUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput> | TransactionCreateWithoutAddonInput[] | TransactionUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddonInput | TransactionCreateOrConnectWithoutAddonInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAddonInput | TransactionUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: TransactionCreateManyAddonInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAddonInput | TransactionUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAddonInput | TransactionUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutPackagesInput = {
    create?: XOR<CategoryCreateWithoutPackagesInput, CategoryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPackagesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SubcategoryCreateNestedOneWithoutPackagesInput = {
    create?: XOR<SubcategoryCreateWithoutPackagesInput, SubcategoryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutPackagesInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type FeatureCreateNestedManyWithoutPackageInput = {
    create?: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput> | FeatureCreateWithoutPackageInput[] | FeatureUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPackageInput | FeatureCreateOrConnectWithoutPackageInput[]
    createMany?: FeatureCreateManyPackageInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPackageInput = {
    create?: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput> | TransactionCreateWithoutPackageInput[] | TransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPackageInput | TransactionCreateOrConnectWithoutPackageInput[]
    createMany?: TransactionCreateManyPackageInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput> | FeatureCreateWithoutPackageInput[] | FeatureUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPackageInput | FeatureCreateOrConnectWithoutPackageInput[]
    createMany?: FeatureCreateManyPackageInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput> | TransactionCreateWithoutPackageInput[] | TransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPackageInput | TransactionCreateOrConnectWithoutPackageInput[]
    createMany?: TransactionCreateManyPackageInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CategoryUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<CategoryCreateWithoutPackagesInput, CategoryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPackagesInput
    upsert?: CategoryUpsertWithoutPackagesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPackagesInput, CategoryUpdateWithoutPackagesInput>, CategoryUncheckedUpdateWithoutPackagesInput>
  }

  export type SubcategoryUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<SubcategoryCreateWithoutPackagesInput, SubcategoryUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutPackagesInput
    upsert?: SubcategoryUpsertWithoutPackagesInput
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutPackagesInput, SubcategoryUpdateWithoutPackagesInput>, SubcategoryUncheckedUpdateWithoutPackagesInput>
  }

  export type FeatureUpdateManyWithoutPackageNestedInput = {
    create?: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput> | FeatureCreateWithoutPackageInput[] | FeatureUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPackageInput | FeatureCreateOrConnectWithoutPackageInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPackageInput | FeatureUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: FeatureCreateManyPackageInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPackageInput | FeatureUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPackageInput | FeatureUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput> | TransactionCreateWithoutPackageInput[] | TransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPackageInput | TransactionCreateOrConnectWithoutPackageInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPackageInput | TransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: TransactionCreateManyPackageInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPackageInput | TransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPackageInput | TransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput> | FeatureCreateWithoutPackageInput[] | FeatureUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPackageInput | FeatureCreateOrConnectWithoutPackageInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPackageInput | FeatureUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: FeatureCreateManyPackageInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPackageInput | FeatureUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPackageInput | FeatureUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput> | TransactionCreateWithoutPackageInput[] | TransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPackageInput | TransactionCreateOrConnectWithoutPackageInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPackageInput | TransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: TransactionCreateManyPackageInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPackageInput | TransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPackageInput | TransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWhatsAppSessionsInput = {
    create?: XOR<UserCreateWithoutWhatsAppSessionsInput, UserUncheckedCreateWithoutWhatsAppSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsAppSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhatsAppSessionsNestedInput = {
    create?: XOR<UserCreateWithoutWhatsAppSessionsInput, UserUncheckedCreateWithoutWhatsAppSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsAppSessionsInput
    upsert?: UserUpsertWithoutWhatsAppSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhatsAppSessionsInput, UserUpdateWithoutWhatsAppSessionsInput>, UserUncheckedUpdateWithoutWhatsAppSessionsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PackageCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PackageCreateWithoutTransactionsInput, PackageUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutTransactionsInput
    connect?: PackageWhereUniqueInput
  }

  export type AddonCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AddonCreateWithoutTransactionsInput, AddonUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AddonCreateOrConnectWithoutTransactionsInput
    connect?: AddonWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutTransactionInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    connect?: PaymentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type PackageUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<PackageCreateWithoutTransactionsInput, PackageUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutTransactionsInput
    upsert?: PackageUpsertWithoutTransactionsInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutTransactionsInput, PackageUpdateWithoutTransactionsInput>, PackageUncheckedUpdateWithoutTransactionsInput>
  }

  export type AddonUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<AddonCreateWithoutTransactionsInput, AddonUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AddonCreateOrConnectWithoutTransactionsInput
    upsert?: AddonUpsertWithoutTransactionsInput
    disconnect?: AddonWhereInput | boolean
    delete?: AddonWhereInput | boolean
    connect?: AddonWhereUniqueInput
    update?: XOR<XOR<AddonUpdateToOneWithWhereWithoutTransactionsInput, AddonUpdateWithoutTransactionsInput>, AddonUncheckedUpdateWithoutTransactionsInput>
  }

  export type PaymentUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    upsert?: PaymentUpsertWithoutTransactionInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTransactionInput, PaymentUpdateWithoutTransactionInput>, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    upsert?: PaymentUpsertWithoutTransactionInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTransactionInput, PaymentUpdateWithoutTransactionInput>, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    upsert?: TransactionUpsertWithoutPaymentInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentInput, TransactionUpdateWithoutPaymentInput>, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type WhatsappApiServiceCreateNestedManyWithoutPackageInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput> | WhatsappApiServiceCreateWithoutPackageInput[] | WhatsappApiServiceUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutPackageInput | WhatsappApiServiceCreateOrConnectWithoutPackageInput[]
    createMany?: WhatsappApiServiceCreateManyPackageInputEnvelope
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
  }

  export type WhatsappApiTransactionCreateNestedManyWithoutPackageInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput> | WhatsappApiTransactionCreateWithoutPackageInput[] | WhatsappApiTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutPackageInput | WhatsappApiTransactionCreateOrConnectWithoutPackageInput[]
    createMany?: WhatsappApiTransactionCreateManyPackageInputEnvelope
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
  }

  export type WhatsappApiServiceUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput> | WhatsappApiServiceCreateWithoutPackageInput[] | WhatsappApiServiceUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutPackageInput | WhatsappApiServiceCreateOrConnectWithoutPackageInput[]
    createMany?: WhatsappApiServiceCreateManyPackageInputEnvelope
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
  }

  export type WhatsappApiTransactionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput> | WhatsappApiTransactionCreateWithoutPackageInput[] | WhatsappApiTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutPackageInput | WhatsappApiTransactionCreateOrConnectWithoutPackageInput[]
    createMany?: WhatsappApiTransactionCreateManyPackageInputEnvelope
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
  }

  export type WhatsappApiServiceUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput> | WhatsappApiServiceCreateWithoutPackageInput[] | WhatsappApiServiceUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutPackageInput | WhatsappApiServiceCreateOrConnectWithoutPackageInput[]
    upsert?: WhatsappApiServiceUpsertWithWhereUniqueWithoutPackageInput | WhatsappApiServiceUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WhatsappApiServiceCreateManyPackageInputEnvelope
    set?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    disconnect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    delete?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    update?: WhatsappApiServiceUpdateWithWhereUniqueWithoutPackageInput | WhatsappApiServiceUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WhatsappApiServiceUpdateManyWithWhereWithoutPackageInput | WhatsappApiServiceUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
  }

  export type WhatsappApiTransactionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput> | WhatsappApiTransactionCreateWithoutPackageInput[] | WhatsappApiTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutPackageInput | WhatsappApiTransactionCreateOrConnectWithoutPackageInput[]
    upsert?: WhatsappApiTransactionUpsertWithWhereUniqueWithoutPackageInput | WhatsappApiTransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WhatsappApiTransactionCreateManyPackageInputEnvelope
    set?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    disconnect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    delete?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    update?: WhatsappApiTransactionUpdateWithWhereUniqueWithoutPackageInput | WhatsappApiTransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WhatsappApiTransactionUpdateManyWithWhereWithoutPackageInput | WhatsappApiTransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
  }

  export type WhatsappApiServiceUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput> | WhatsappApiServiceCreateWithoutPackageInput[] | WhatsappApiServiceUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiServiceCreateOrConnectWithoutPackageInput | WhatsappApiServiceCreateOrConnectWithoutPackageInput[]
    upsert?: WhatsappApiServiceUpsertWithWhereUniqueWithoutPackageInput | WhatsappApiServiceUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WhatsappApiServiceCreateManyPackageInputEnvelope
    set?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    disconnect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    delete?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    connect?: WhatsappApiServiceWhereUniqueInput | WhatsappApiServiceWhereUniqueInput[]
    update?: WhatsappApiServiceUpdateWithWhereUniqueWithoutPackageInput | WhatsappApiServiceUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WhatsappApiServiceUpdateManyWithWhereWithoutPackageInput | WhatsappApiServiceUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
  }

  export type WhatsappApiTransactionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput> | WhatsappApiTransactionCreateWithoutPackageInput[] | WhatsappApiTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WhatsappApiTransactionCreateOrConnectWithoutPackageInput | WhatsappApiTransactionCreateOrConnectWithoutPackageInput[]
    upsert?: WhatsappApiTransactionUpsertWithWhereUniqueWithoutPackageInput | WhatsappApiTransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WhatsappApiTransactionCreateManyPackageInputEnvelope
    set?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    disconnect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    delete?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    connect?: WhatsappApiTransactionWhereUniqueInput | WhatsappApiTransactionWhereUniqueInput[]
    update?: WhatsappApiTransactionUpdateWithWhereUniqueWithoutPackageInput | WhatsappApiTransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WhatsappApiTransactionUpdateManyWithWhereWithoutPackageInput | WhatsappApiTransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWhatsappApiTransactionsInput = {
    create?: XOR<UserCreateWithoutWhatsappApiTransactionsInput, UserUncheckedCreateWithoutWhatsappApiTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappApiTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type WhatsappApiPackageCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WhatsappApiPackageCreateWithoutTransactionsInput, WhatsappApiPackageUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WhatsappApiPackageCreateOrConnectWithoutTransactionsInput
    connect?: WhatsappApiPackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhatsappApiTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutWhatsappApiTransactionsInput, UserUncheckedCreateWithoutWhatsappApiTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappApiTransactionsInput
    upsert?: UserUpsertWithoutWhatsappApiTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhatsappApiTransactionsInput, UserUpdateWithoutWhatsappApiTransactionsInput>, UserUncheckedUpdateWithoutWhatsappApiTransactionsInput>
  }

  export type WhatsappApiPackageUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WhatsappApiPackageCreateWithoutTransactionsInput, WhatsappApiPackageUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WhatsappApiPackageCreateOrConnectWithoutTransactionsInput
    upsert?: WhatsappApiPackageUpsertWithoutTransactionsInput
    connect?: WhatsappApiPackageWhereUniqueInput
    update?: XOR<XOR<WhatsappApiPackageUpdateToOneWithWhereWithoutTransactionsInput, WhatsappApiPackageUpdateWithoutTransactionsInput>, WhatsappApiPackageUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutWhatsappApiServicesInput = {
    create?: XOR<UserCreateWithoutWhatsappApiServicesInput, UserUncheckedCreateWithoutWhatsappApiServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappApiServicesInput
    connect?: UserWhereUniqueInput
  }

  export type WhatsappApiPackageCreateNestedOneWithoutServicesInput = {
    create?: XOR<WhatsappApiPackageCreateWithoutServicesInput, WhatsappApiPackageUncheckedCreateWithoutServicesInput>
    connectOrCreate?: WhatsappApiPackageCreateOrConnectWithoutServicesInput
    connect?: WhatsappApiPackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhatsappApiServicesNestedInput = {
    create?: XOR<UserCreateWithoutWhatsappApiServicesInput, UserUncheckedCreateWithoutWhatsappApiServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappApiServicesInput
    upsert?: UserUpsertWithoutWhatsappApiServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhatsappApiServicesInput, UserUpdateWithoutWhatsappApiServicesInput>, UserUncheckedUpdateWithoutWhatsappApiServicesInput>
  }

  export type WhatsappApiPackageUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<WhatsappApiPackageCreateWithoutServicesInput, WhatsappApiPackageUncheckedCreateWithoutServicesInput>
    connectOrCreate?: WhatsappApiPackageCreateOrConnectWithoutServicesInput
    upsert?: WhatsappApiPackageUpsertWithoutServicesInput
    connect?: WhatsappApiPackageWhereUniqueInput
    update?: XOR<XOR<WhatsappApiPackageUpdateToOneWithWhereWithoutServicesInput, WhatsappApiPackageUpdateWithoutServicesInput>, WhatsappApiPackageUncheckedUpdateWithoutServicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppSessionCreateWithoutUserInput = {
    id?: string
    sessionId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionCreateOrConnectWithoutUserInput = {
    where: WhatsAppSessionWhereUniqueInput
    create: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput>
  }

  export type WhatsAppSessionCreateManyUserInputEnvelope = {
    data: WhatsAppSessionCreateManyUserInput | WhatsAppSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    package?: PackageCreateNestedOneWithoutTransactionsInput
    addon?: AddonCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    packageId?: string | null
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappApiTransactionCreateWithoutUserInput = {
    id?: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
    package: WhatsappApiPackageCreateNestedOneWithoutTransactionsInput
  }

  export type WhatsappApiTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiTransactionCreateOrConnectWithoutUserInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    create: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput>
  }

  export type WhatsappApiTransactionCreateManyUserInputEnvelope = {
    data: WhatsappApiTransactionCreateManyUserInput | WhatsappApiTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappApiServiceCreateWithoutUserInput = {
    id?: string
    expiredAt: Date | string
    createdAt?: Date | string
    package: WhatsappApiPackageCreateNestedOneWithoutServicesInput
  }

  export type WhatsappApiServiceUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceCreateOrConnectWithoutUserInput = {
    where: WhatsappApiServiceWhereUniqueInput
    create: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput>
  }

  export type WhatsappApiServiceCreateManyUserInputEnvelope = {
    data: WhatsappApiServiceCreateManyUserInput | WhatsappApiServiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type WhatsAppSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WhatsAppSessionWhereUniqueInput
    update: XOR<WhatsAppSessionUpdateWithoutUserInput, WhatsAppSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WhatsAppSessionCreateWithoutUserInput, WhatsAppSessionUncheckedCreateWithoutUserInput>
  }

  export type WhatsAppSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WhatsAppSessionWhereUniqueInput
    data: XOR<WhatsAppSessionUpdateWithoutUserInput, WhatsAppSessionUncheckedUpdateWithoutUserInput>
  }

  export type WhatsAppSessionUpdateManyWithWhereWithoutUserInput = {
    where: WhatsAppSessionScalarWhereInput
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type WhatsAppSessionScalarWhereInput = {
    AND?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
    OR?: WhatsAppSessionScalarWhereInput[]
    NOT?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
    id?: StringFilter<"WhatsAppSession"> | string
    sessionId?: StringFilter<"WhatsAppSession"> | string
    userId?: StringFilter<"WhatsAppSession"> | string
    status?: StringFilter<"WhatsAppSession"> | string
    qr?: StringNullableFilter<"WhatsAppSession"> | string | null
    isNotification?: BoolFilter<"WhatsAppSession"> | boolean
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    aiConfig?: JsonNullableFilter<"WhatsAppSession">
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    packageId?: StringNullableFilter<"Transaction"> | string | null
    addonId?: StringNullableFilter<"Transaction"> | string | null
    paymentId?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    startDate?: DateTimeFilter<"Transaction"> | Date | string
    endDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: StringFilter<"Transaction"> | string
    referenceLink?: StringNullableFilter<"Transaction"> | string | null
  }

  export type WhatsappApiTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    update: XOR<WhatsappApiTransactionUpdateWithoutUserInput, WhatsappApiTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<WhatsappApiTransactionCreateWithoutUserInput, WhatsappApiTransactionUncheckedCreateWithoutUserInput>
  }

  export type WhatsappApiTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    data: XOR<WhatsappApiTransactionUpdateWithoutUserInput, WhatsappApiTransactionUncheckedUpdateWithoutUserInput>
  }

  export type WhatsappApiTransactionUpdateManyWithWhereWithoutUserInput = {
    where: WhatsappApiTransactionScalarWhereInput
    data: XOR<WhatsappApiTransactionUpdateManyMutationInput, WhatsappApiTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type WhatsappApiTransactionScalarWhereInput = {
    AND?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
    OR?: WhatsappApiTransactionScalarWhereInput[]
    NOT?: WhatsappApiTransactionScalarWhereInput | WhatsappApiTransactionScalarWhereInput[]
    id?: StringFilter<"WhatsappApiTransaction"> | string
    userId?: StringFilter<"WhatsappApiTransaction"> | string
    packageId?: StringFilter<"WhatsappApiTransaction"> | string
    duration?: StringFilter<"WhatsappApiTransaction"> | string
    price?: IntFilter<"WhatsappApiTransaction"> | number
    status?: StringFilter<"WhatsappApiTransaction"> | string
    createdAt?: DateTimeFilter<"WhatsappApiTransaction"> | Date | string
  }

  export type WhatsappApiServiceUpsertWithWhereUniqueWithoutUserInput = {
    where: WhatsappApiServiceWhereUniqueInput
    update: XOR<WhatsappApiServiceUpdateWithoutUserInput, WhatsappApiServiceUncheckedUpdateWithoutUserInput>
    create: XOR<WhatsappApiServiceCreateWithoutUserInput, WhatsappApiServiceUncheckedCreateWithoutUserInput>
  }

  export type WhatsappApiServiceUpdateWithWhereUniqueWithoutUserInput = {
    where: WhatsappApiServiceWhereUniqueInput
    data: XOR<WhatsappApiServiceUpdateWithoutUserInput, WhatsappApiServiceUncheckedUpdateWithoutUserInput>
  }

  export type WhatsappApiServiceUpdateManyWithWhereWithoutUserInput = {
    where: WhatsappApiServiceScalarWhereInput
    data: XOR<WhatsappApiServiceUpdateManyMutationInput, WhatsappApiServiceUncheckedUpdateManyWithoutUserInput>
  }

  export type WhatsappApiServiceScalarWhereInput = {
    AND?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
    OR?: WhatsappApiServiceScalarWhereInput[]
    NOT?: WhatsappApiServiceScalarWhereInput | WhatsappApiServiceScalarWhereInput[]
    id?: StringFilter<"WhatsappApiService"> | string
    userId?: StringFilter<"WhatsappApiService"> | string
    packageId?: StringFilter<"WhatsappApiService"> | string
    expiredAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
    createdAt?: DateTimeFilter<"WhatsappApiService"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PackageCreateWithoutFeaturesInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutPackagesInput
    subcategory: SubcategoryCreateNestedOneWithoutPackagesInput
    transactions?: TransactionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutFeaturesInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutFeaturesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutFeaturesInput, PackageUncheckedCreateWithoutFeaturesInput>
  }

  export type PackageUpsertWithoutFeaturesInput = {
    update: XOR<PackageUpdateWithoutFeaturesInput, PackageUncheckedUpdateWithoutFeaturesInput>
    create: XOR<PackageCreateWithoutFeaturesInput, PackageUncheckedCreateWithoutFeaturesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutFeaturesInput, PackageUncheckedUpdateWithoutFeaturesInput>
  }

  export type PackageUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPackagesNestedInput
    subcategory?: SubcategoryUpdateOneRequiredWithoutPackagesNestedInput
    transactions?: TransactionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type CategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    packages?: PackageCreateNestedManyWithoutCategoryInput
    addons?: AddonCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    packages?: PackageUncheckedCreateNestedManyWithoutCategoryInput
    addons?: AddonUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type PackageCreateWithoutSubcategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutPackagesInput
    features?: FeatureCreateNestedManyWithoutPackageInput
    transactions?: TransactionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutSubcategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    features?: FeatureUncheckedCreateNestedManyWithoutPackageInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutSubcategoryInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput>
  }

  export type PackageCreateManySubcategoryInputEnvelope = {
    data: PackageCreateManySubcategoryInput | PackageCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    packages?: PackageUpdateManyWithoutCategoryNestedInput
    addons?: AddonUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutCategoryNestedInput
    addons?: AddonUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PackageUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutSubcategoryInput, PackageUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<PackageCreateWithoutSubcategoryInput, PackageUncheckedCreateWithoutSubcategoryInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutSubcategoryInput, PackageUncheckedUpdateWithoutSubcategoryInput>
  }

  export type PackageUpdateManyWithWhereWithoutSubcategoryInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: StringFilter<"Package"> | string
    name_en?: StringFilter<"Package"> | string
    name_id?: StringFilter<"Package"> | string
    description_en?: StringFilter<"Package"> | string
    description_id?: StringFilter<"Package"> | string
    price_idr?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Package"> | string
    categoryId?: StringFilter<"Package"> | string
    subcategoryId?: StringFilter<"Package"> | string
    popular?: BoolNullableFilter<"Package"> | boolean | null
    bgColor?: StringNullableFilter<"Package"> | string | null
    duration?: IntFilter<"Package"> | number
    durationUnit?: StringFilter<"Package"> | string
  }

  export type SubcategoryCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    packages?: PackageCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    packages?: PackageUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryCreateManyCategoryInputEnvelope = {
    data: SubcategoryCreateManyCategoryInput | SubcategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    subcategory: SubcategoryCreateNestedOneWithoutPackagesInput
    features?: FeatureCreateNestedManyWithoutPackageInput
    transactions?: TransactionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    features?: FeatureUncheckedCreateNestedManyWithoutPackageInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutCategoryInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput>
  }

  export type PackageCreateManyCategoryInputEnvelope = {
    data: PackageCreateManyCategoryInput | PackageCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AddonCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    duration: number
    durationUnit: string
    transactions?: TransactionCreateNestedManyWithoutAddonInput
  }

  export type AddonUncheckedCreateWithoutCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    duration: number
    durationUnit: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAddonInput
  }

  export type AddonCreateOrConnectWithoutCategoryInput = {
    where: AddonWhereUniqueInput
    create: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput>
  }

  export type AddonCreateManyCategoryInputEnvelope = {
    data: AddonCreateManyCategoryInput | AddonCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubcategoryScalarWhereInput = {
    AND?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    OR?: SubcategoryScalarWhereInput[]
    NOT?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    name_en?: StringFilter<"Subcategory"> | string
    name_id?: StringFilter<"Subcategory"> | string
    categoryId?: StringFilter<"Subcategory"> | string
  }

  export type PackageUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutCategoryInput, PackageUncheckedUpdateWithoutCategoryInput>
    create: XOR<PackageCreateWithoutCategoryInput, PackageUncheckedCreateWithoutCategoryInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutCategoryInput, PackageUncheckedUpdateWithoutCategoryInput>
  }

  export type PackageUpdateManyWithWhereWithoutCategoryInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AddonUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AddonWhereUniqueInput
    update: XOR<AddonUpdateWithoutCategoryInput, AddonUncheckedUpdateWithoutCategoryInput>
    create: XOR<AddonCreateWithoutCategoryInput, AddonUncheckedCreateWithoutCategoryInput>
  }

  export type AddonUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AddonWhereUniqueInput
    data: XOR<AddonUpdateWithoutCategoryInput, AddonUncheckedUpdateWithoutCategoryInput>
  }

  export type AddonUpdateManyWithWhereWithoutCategoryInput = {
    where: AddonScalarWhereInput
    data: XOR<AddonUpdateManyMutationInput, AddonUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AddonScalarWhereInput = {
    AND?: AddonScalarWhereInput | AddonScalarWhereInput[]
    OR?: AddonScalarWhereInput[]
    NOT?: AddonScalarWhereInput | AddonScalarWhereInput[]
    id?: StringFilter<"Addon"> | string
    name_en?: StringFilter<"Addon"> | string
    name_id?: StringFilter<"Addon"> | string
    description_en?: StringNullableFilter<"Addon"> | string | null
    description_id?: StringNullableFilter<"Addon"> | string | null
    price_idr?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFilter<"Addon"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Addon"> | string | null
    categoryId?: StringFilter<"Addon"> | string
    duration?: IntFilter<"Addon"> | number
    durationUnit?: StringFilter<"Addon"> | string
  }

  export type CategoryCreateWithoutAddonsInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
    packages?: PackageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAddonsInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
    packages?: PackageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAddonsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAddonsInput, CategoryUncheckedCreateWithoutAddonsInput>
  }

  export type TransactionCreateWithoutAddonInput = {
    id?: string
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
    package?: PackageCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutAddonInput = {
    id?: string
    userId: string
    packageId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutAddonInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput>
  }

  export type TransactionCreateManyAddonInputEnvelope = {
    data: TransactionCreateManyAddonInput | TransactionCreateManyAddonInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutAddonsInput = {
    update: XOR<CategoryUpdateWithoutAddonsInput, CategoryUncheckedUpdateWithoutAddonsInput>
    create: XOR<CategoryCreateWithoutAddonsInput, CategoryUncheckedCreateWithoutAddonsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAddonsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAddonsInput, CategoryUncheckedUpdateWithoutAddonsInput>
  }

  export type CategoryUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
    packages?: PackageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
    packages?: PackageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutAddonInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAddonInput, TransactionUncheckedUpdateWithoutAddonInput>
    create: XOR<TransactionCreateWithoutAddonInput, TransactionUncheckedCreateWithoutAddonInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAddonInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAddonInput, TransactionUncheckedUpdateWithoutAddonInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAddonInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAddonInput>
  }

  export type CategoryCreateWithoutPackagesInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryCreateNestedManyWithoutCategoryInput
    addons?: AddonCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutPackagesInput = {
    id?: string
    name_en: string
    name_id: string
    icon: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
    addons?: AddonUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutPackagesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPackagesInput, CategoryUncheckedCreateWithoutPackagesInput>
  }

  export type SubcategoryCreateWithoutPackagesInput = {
    id?: string
    name_en: string
    name_id: string
    category: CategoryCreateNestedOneWithoutSubcategoriesInput
  }

  export type SubcategoryUncheckedCreateWithoutPackagesInput = {
    id?: string
    name_en: string
    name_id: string
    categoryId: string
  }

  export type SubcategoryCreateOrConnectWithoutPackagesInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutPackagesInput, SubcategoryUncheckedCreateWithoutPackagesInput>
  }

  export type FeatureCreateWithoutPackageInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
  }

  export type FeatureUncheckedCreateWithoutPackageInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
  }

  export type FeatureCreateOrConnectWithoutPackageInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput>
  }

  export type FeatureCreateManyPackageInputEnvelope = {
    data: FeatureCreateManyPackageInput | FeatureCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPackageInput = {
    id?: string
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
    addon?: AddonCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPackageInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput>
  }

  export type TransactionCreateManyPackageInputEnvelope = {
    data: TransactionCreateManyPackageInput | TransactionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutPackagesInput = {
    update: XOR<CategoryUpdateWithoutPackagesInput, CategoryUncheckedUpdateWithoutPackagesInput>
    create: XOR<CategoryCreateWithoutPackagesInput, CategoryUncheckedCreateWithoutPackagesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPackagesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPackagesInput, CategoryUncheckedUpdateWithoutPackagesInput>
  }

  export type CategoryUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUpdateManyWithoutCategoryNestedInput
    addons?: AddonUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
    addons?: AddonUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubcategoryUpsertWithoutPackagesInput = {
    update: XOR<SubcategoryUpdateWithoutPackagesInput, SubcategoryUncheckedUpdateWithoutPackagesInput>
    create: XOR<SubcategoryCreateWithoutPackagesInput, SubcategoryUncheckedCreateWithoutPackagesInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutPackagesInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutPackagesInput, SubcategoryUncheckedUpdateWithoutPackagesInput>
  }

  export type SubcategoryUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureUpsertWithWhereUniqueWithoutPackageInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutPackageInput, FeatureUncheckedUpdateWithoutPackageInput>
    create: XOR<FeatureCreateWithoutPackageInput, FeatureUncheckedCreateWithoutPackageInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutPackageInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutPackageInput, FeatureUncheckedUpdateWithoutPackageInput>
  }

  export type FeatureUpdateManyWithWhereWithoutPackageInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutPackageInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: StringFilter<"Feature"> | string
    name_en?: StringFilter<"Feature"> | string
    name_id?: StringFilter<"Feature"> | string
    included?: BoolFilter<"Feature"> | boolean
    packageId?: StringFilter<"Feature"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutPackageInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPackageInput, TransactionUncheckedUpdateWithoutPackageInput>
    create: XOR<TransactionCreateWithoutPackageInput, TransactionUncheckedCreateWithoutPackageInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPackageInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPackageInput, TransactionUncheckedUpdateWithoutPackageInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPackageInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserCreateWithoutWhatsAppSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWhatsAppSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWhatsAppSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhatsAppSessionsInput, UserUncheckedCreateWithoutWhatsAppSessionsInput>
  }

  export type UserUpsertWithoutWhatsAppSessionsInput = {
    update: XOR<UserUpdateWithoutWhatsAppSessionsInput, UserUncheckedUpdateWithoutWhatsAppSessionsInput>
    create: XOR<UserCreateWithoutWhatsAppSessionsInput, UserUncheckedCreateWithoutWhatsAppSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhatsAppSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhatsAppSessionsInput, UserUncheckedUpdateWithoutWhatsAppSessionsInput>
  }

  export type UserUpdateWithoutWhatsAppSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWhatsAppSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type PackageCreateWithoutTransactionsInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutPackagesInput
    subcategory: SubcategoryCreateNestedOneWithoutPackagesInput
    features?: FeatureCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
    features?: FeatureUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutTransactionsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutTransactionsInput, PackageUncheckedCreateWithoutTransactionsInput>
  }

  export type AddonCreateWithoutTransactionsInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    duration: number
    durationUnit: string
    category: CategoryCreateNestedOneWithoutAddonsInput
  }

  export type AddonUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    categoryId: string
    duration: number
    durationUnit: string
  }

  export type AddonCreateOrConnectWithoutTransactionsInput = {
    where: AddonWhereUniqueInput
    create: XOR<AddonCreateWithoutTransactionsInput, AddonUncheckedCreateWithoutTransactionsInput>
  }

  export type PaymentCreateWithoutTransactionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    status: string
    paymentDate?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutTransactionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    status: string
    paymentDate?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutTransactionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PackageUpsertWithoutTransactionsInput = {
    update: XOR<PackageUpdateWithoutTransactionsInput, PackageUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PackageCreateWithoutTransactionsInput, PackageUncheckedCreateWithoutTransactionsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutTransactionsInput, PackageUncheckedUpdateWithoutTransactionsInput>
  }

  export type PackageUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPackagesNestedInput
    subcategory?: SubcategoryUpdateOneRequiredWithoutPackagesNestedInput
    features?: FeatureUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type AddonUpsertWithoutTransactionsInput = {
    update: XOR<AddonUpdateWithoutTransactionsInput, AddonUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AddonCreateWithoutTransactionsInput, AddonUncheckedCreateWithoutTransactionsInput>
    where?: AddonWhereInput
  }

  export type AddonUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AddonWhereInput
    data: XOR<AddonUpdateWithoutTransactionsInput, AddonUncheckedUpdateWithoutTransactionsInput>
  }

  export type AddonUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type AddonUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpsertWithoutTransactionInput = {
    update: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTransactionInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateWithoutPaymentInput = {
    id?: string
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
    package?: PackageCreateNestedOneWithoutTransactionsInput
    addon?: AddonCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    packageId?: string | null
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
  }

  export type TransactionCreateOrConnectWithoutPaymentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
  }

  export type TransactionUpsertWithoutPaymentInput = {
    update: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type TransactionUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    package?: PackageUpdateOneWithoutTransactionsNestedInput
    addon?: AddonUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsappApiServiceCreateWithoutPackageInput = {
    id?: string
    expiredAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappApiServicesInput
  }

  export type WhatsappApiServiceUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceCreateOrConnectWithoutPackageInput = {
    where: WhatsappApiServiceWhereUniqueInput
    create: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput>
  }

  export type WhatsappApiServiceCreateManyPackageInputEnvelope = {
    data: WhatsappApiServiceCreateManyPackageInput | WhatsappApiServiceCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappApiTransactionCreateWithoutPackageInput = {
    id?: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappApiTransactionsInput
  }

  export type WhatsappApiTransactionUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiTransactionCreateOrConnectWithoutPackageInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    create: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput>
  }

  export type WhatsappApiTransactionCreateManyPackageInputEnvelope = {
    data: WhatsappApiTransactionCreateManyPackageInput | WhatsappApiTransactionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappApiServiceUpsertWithWhereUniqueWithoutPackageInput = {
    where: WhatsappApiServiceWhereUniqueInput
    update: XOR<WhatsappApiServiceUpdateWithoutPackageInput, WhatsappApiServiceUncheckedUpdateWithoutPackageInput>
    create: XOR<WhatsappApiServiceCreateWithoutPackageInput, WhatsappApiServiceUncheckedCreateWithoutPackageInput>
  }

  export type WhatsappApiServiceUpdateWithWhereUniqueWithoutPackageInput = {
    where: WhatsappApiServiceWhereUniqueInput
    data: XOR<WhatsappApiServiceUpdateWithoutPackageInput, WhatsappApiServiceUncheckedUpdateWithoutPackageInput>
  }

  export type WhatsappApiServiceUpdateManyWithWhereWithoutPackageInput = {
    where: WhatsappApiServiceScalarWhereInput
    data: XOR<WhatsappApiServiceUpdateManyMutationInput, WhatsappApiServiceUncheckedUpdateManyWithoutPackageInput>
  }

  export type WhatsappApiTransactionUpsertWithWhereUniqueWithoutPackageInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    update: XOR<WhatsappApiTransactionUpdateWithoutPackageInput, WhatsappApiTransactionUncheckedUpdateWithoutPackageInput>
    create: XOR<WhatsappApiTransactionCreateWithoutPackageInput, WhatsappApiTransactionUncheckedCreateWithoutPackageInput>
  }

  export type WhatsappApiTransactionUpdateWithWhereUniqueWithoutPackageInput = {
    where: WhatsappApiTransactionWhereUniqueInput
    data: XOR<WhatsappApiTransactionUpdateWithoutPackageInput, WhatsappApiTransactionUncheckedUpdateWithoutPackageInput>
  }

  export type WhatsappApiTransactionUpdateManyWithWhereWithoutPackageInput = {
    where: WhatsappApiTransactionScalarWhereInput
    data: XOR<WhatsappApiTransactionUpdateManyMutationInput, WhatsappApiTransactionUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserCreateWithoutWhatsappApiTransactionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWhatsappApiTransactionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiServices?: WhatsappApiServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWhatsappApiTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhatsappApiTransactionsInput, UserUncheckedCreateWithoutWhatsappApiTransactionsInput>
  }

  export type WhatsappApiPackageCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: WhatsappApiServiceCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: WhatsappApiServiceUncheckedCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageCreateOrConnectWithoutTransactionsInput = {
    where: WhatsappApiPackageWhereUniqueInput
    create: XOR<WhatsappApiPackageCreateWithoutTransactionsInput, WhatsappApiPackageUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutWhatsappApiTransactionsInput = {
    update: XOR<UserUpdateWithoutWhatsappApiTransactionsInput, UserUncheckedUpdateWithoutWhatsappApiTransactionsInput>
    create: XOR<UserCreateWithoutWhatsappApiTransactionsInput, UserUncheckedCreateWithoutWhatsappApiTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhatsappApiTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhatsappApiTransactionsInput, UserUncheckedUpdateWithoutWhatsappApiTransactionsInput>
  }

  export type UserUpdateWithoutWhatsappApiTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWhatsappApiTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiServices?: WhatsappApiServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WhatsappApiPackageUpsertWithoutTransactionsInput = {
    update: XOR<WhatsappApiPackageUpdateWithoutTransactionsInput, WhatsappApiPackageUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WhatsappApiPackageCreateWithoutTransactionsInput, WhatsappApiPackageUncheckedCreateWithoutTransactionsInput>
    where?: WhatsappApiPackageWhereInput
  }

  export type WhatsappApiPackageUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WhatsappApiPackageWhereInput
    data: XOR<WhatsappApiPackageUpdateWithoutTransactionsInput, WhatsappApiPackageUncheckedUpdateWithoutTransactionsInput>
  }

  export type WhatsappApiPackageUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: WhatsappApiServiceUpdateManyWithoutPackageNestedInput
  }

  export type WhatsappApiPackageUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: WhatsappApiServiceUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserCreateWithoutWhatsappApiServicesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWhatsappApiServicesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    password?: string | null
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerificationDeadline?: Date | string | null
    emailVerified?: Date | string | null
    phoneVerified?: Date | string | null
    image?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    role?: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    whatsAppSessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWhatsappApiServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhatsappApiServicesInput, UserUncheckedCreateWithoutWhatsappApiServicesInput>
  }

  export type WhatsappApiPackageCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: WhatsappApiTransactionCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    priceMonth: number
    priceYear: number
    maxSession: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: WhatsappApiTransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type WhatsappApiPackageCreateOrConnectWithoutServicesInput = {
    where: WhatsappApiPackageWhereUniqueInput
    create: XOR<WhatsappApiPackageCreateWithoutServicesInput, WhatsappApiPackageUncheckedCreateWithoutServicesInput>
  }

  export type UserUpsertWithoutWhatsappApiServicesInput = {
    update: XOR<UserUpdateWithoutWhatsappApiServicesInput, UserUncheckedUpdateWithoutWhatsappApiServicesInput>
    create: XOR<UserCreateWithoutWhatsappApiServicesInput, UserUncheckedCreateWithoutWhatsappApiServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhatsappApiServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhatsappApiServicesInput, UserUncheckedUpdateWithoutWhatsappApiServicesInput>
  }

  export type UserUpdateWithoutWhatsappApiServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWhatsappApiServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerificationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    whatsAppSessions?: WhatsAppSessionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    whatsappApiTransactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WhatsappApiPackageUpsertWithoutServicesInput = {
    update: XOR<WhatsappApiPackageUpdateWithoutServicesInput, WhatsappApiPackageUncheckedUpdateWithoutServicesInput>
    create: XOR<WhatsappApiPackageCreateWithoutServicesInput, WhatsappApiPackageUncheckedCreateWithoutServicesInput>
    where?: WhatsappApiPackageWhereInput
  }

  export type WhatsappApiPackageUpdateToOneWithWhereWithoutServicesInput = {
    where?: WhatsappApiPackageWhereInput
    data: XOR<WhatsappApiPackageUpdateWithoutServicesInput, WhatsappApiPackageUncheckedUpdateWithoutServicesInput>
  }

  export type WhatsappApiPackageUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: WhatsappApiTransactionUpdateManyWithoutPackageNestedInput
  }

  export type WhatsappApiPackageUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceMonth?: IntFieldUpdateOperationsInput | number
    priceYear?: IntFieldUpdateOperationsInput | number
    maxSession?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: WhatsappApiTransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type WhatsAppSessionCreateManyUserInput = {
    id?: string
    sessionId: string
    status: string
    qr?: string | null
    isNotification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    packageId?: string | null
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
  }

  export type WhatsappApiTransactionCreateManyUserInput = {
    id?: string
    packageId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceCreateManyUserInput = {
    id?: string
    packageId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WhatsAppSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    isNotification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiConfig?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneWithoutTransactionsNestedInput
    addon?: AddonUpdateOneWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsappApiTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: WhatsappApiPackageUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type WhatsappApiTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: WhatsappApiPackageUpdateOneRequiredWithoutServicesNestedInput
  }

  export type WhatsappApiServiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateManySubcategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    categoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
  }

  export type PackageUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPackagesNestedInput
    features?: FeatureUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryCreateManyCategoryInput = {
    id?: string
    name_en: string
    name_id: string
  }

  export type PackageCreateManyCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en: string
    description_id: string
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image: string
    subcategoryId: string
    popular?: boolean | null
    bgColor?: string | null
    duration: number
    durationUnit: string
  }

  export type AddonCreateManyCategoryInput = {
    id?: string
    name_en: string
    name_id: string
    description_en?: string | null
    description_id?: string | null
    price_idr: Decimal | DecimalJsLike | number | string
    price_usd: Decimal | DecimalJsLike | number | string
    image?: string | null
    duration: number
    durationUnit: string
  }

  export type SubcategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    packages?: PackageUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    packages?: PackageUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
  }

  export type PackageUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutPackagesNestedInput
    features?: FeatureUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutPackageNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type AddonUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutAddonNestedInput
  }

  export type AddonUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type AddonUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_id?: NullableStringFieldUpdateOperationsInput | string | null
    price_idr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyAddonInput = {
    id?: string
    userId: string
    packageId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
  }

  export type TransactionUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    package?: PackageUpdateOneWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeatureCreateManyPackageInput = {
    id?: string
    name_en: string
    name_id: string
    included: boolean
  }

  export type TransactionCreateManyPackageInput = {
    id?: string
    userId: string
    addonId?: string | null
    paymentId?: string | null
    transactionDate?: Date | string
    startDate: Date | string
    endDate: Date | string
    status: string
    referenceLink?: string | null
  }

  export type FeatureUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    included?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    addon?: AddonUpdateOneWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addonId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    referenceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsappApiServiceCreateManyPackageInput = {
    id?: string
    userId: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type WhatsappApiTransactionCreateManyPackageInput = {
    id?: string
    userId: string
    duration: string
    price: number
    status: string
    createdAt?: Date | string
  }

  export type WhatsappApiServiceUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappApiServicesNestedInput
  }

  export type WhatsappApiServiceUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiServiceUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappApiTransactionsNestedInput
  }

  export type WhatsappApiTransactionUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappApiTransactionUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}