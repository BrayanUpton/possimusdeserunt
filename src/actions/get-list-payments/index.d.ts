import { Error, IGetListPayments } from '../../types';
interface Invoice {
    payment_id: number;
    payment_status: string;
    pay_address: string;
    price_amount: number;
    price_currency: string;
    pay_amount: number;
    actually_paid: number;
    pay_currency: string;
    order_id: string;
    order_description: string;
    purchase_id: number;
    outcome_amount: number;
    outcome_currency: string;
}
export interface GetListPaymentsReturn {
    data: Invoice[];
    limit: number;
    page: number;
    pagesCount: number;
    total: number;
}
export interface GetListPayments extends IGetListPayments {
    apiKey: string;
}
declare const getListPayments: ({ apiKey, limit, page, sortBy, orderBy, dateFrom, dateTo }: GetListPayments) => Promise<GetListPaymentsReturn | Error>;
export default getListPayments;
