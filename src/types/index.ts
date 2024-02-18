export type HttpMethod =
    | "POST"
    | "GET"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
;

export type ComgateClientProps = {
    merchant: number;
    secret: string;
    test: boolean;
}
