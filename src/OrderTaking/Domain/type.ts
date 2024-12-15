// typeとinterfaceどちらがよいのか？
// 製品コード関連
type WidgetCode = string;
type GizmoCode = string;
type ProductCode = { Widget: WidgetCode } | { Gizmo: GizmoCode };

// 注文数量関連
type UnitQuantity = number;
type KilogramQuantity = number;
type OrderQuantity = { Unit: UnitQuantity } | { Lilos: KilogramQuantity };

// 注文エンティティ関連
type OrderId = undefined;
type OrderLineId = undefined;
type CustomerId = undefined;

type CustomerInfo = undefined;
type ShippingAddress = undefined;
type BillingAddress = undefined;
type Price = undefined;
type BillingAmount = undefined;

type OrderLine = {
  Id: OrderLineId;
  OrderId: OrderId;
  ProductCode: ProductCode;
  OrderQuantity: OrderQuantity;
};

type Order = {
  Id: OrderId;
  CustomerId: CustomerId;
  ShippingAddress: ShippingAddress;
  BillingAddress: BillingAddress;
  OrderLines: ReadonlyArray<OrderLine>;
  AmmountToBill: BillingAmount;
  Price: Price;
};

// ワークフロー
// 渡してくる側で作成されるので、ここではプリミティブ型でのみ構成されている
type UnvalidatedOrder = {
  OrderId: string;
  CustomerInfo: string;
  ShippingAddress: string;
  BillingAddress: string;
  OrderLines: ReadonlyArray<string>;
};

// 成功時
type PlaceOrderEvents = {};

type ValidationErrors = {
  FieldName: string;
  ErrorDescription: string;
};
type OtherErrors = {
  ErrorDescription: string;
};
type PlaceOrderError =
  | {
      ValidationError: ReadonlyArray<ValidationErrors>;
    }
  | {
      OtherError: ReadonlyArray<OtherErrors>;
    };

// やるなら例外？
type PlaceOrder = (order: UnvalidatedOrder) => PlaceOrderEvents | PlaceOrderError;
