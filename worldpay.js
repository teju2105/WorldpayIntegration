{
    "token ": "your-token",
    "orderDescription": "your-order-description",
    "amount": 500,
    "authorizedAmount": 500,
    "currencyCode": "GBP",
    "currencyCodeExponent": 2,
    "settlementCurrency":"EUR",
    "settlementCurrencyExponent":2,
    "authorizeOnly ": true,
    "is3DSOrder": true/false,
    "orderType": "ECOM",
    "orderCode": "worldpay-order-code",
    "orderCodePrefix": "prefix-string",
    "orderCodeSuffix": "suffix-string",
    "customerOrderCode": "your-customer-order-code",
    "paymentStatus": "SUCCESS",
    "paymentStatusReason": "reason",
    "paymentResponse ": {
        "type": "ObfuscatedCard ",
        "name": "name ",
        "expiryMonth": 2,
        "expiryYear": 2015,
        "issueNumber": 2,
        "startMonth": 8,
        "startYear": 2013,
        "cardType": "VISA_CREDIT",
        "maskedCardNumber ": "  ** 1111",
        "billingAddress": {
            "address1": "address1",
            "address2": "address2",
            "address3": "address3",
            "postalCode": "postCode",
            "city": "Reading",
            "state": "Berkshire",
            "countryCode": "GB",
            "telephoneNumber": "02079460761"
        },
        "cardSchemeType": "consumer",
        "cardSchemeName": "VISA CREDIT",
        "cardIssuer": "LLOYDS BANK PLC",
        "countryCode": "GB",
        "cardClass": "credit",
        "cardProductTypeDescNonContactless": "unknown",
        "cardProductTypeDescContactless": "unknown",
        "prepaid": "false",
        "apmFields": {
          "attribute1": "value1"
        }
    },
    "deliveryAddress": {
        "firstName": "John",
        "lastName": "Smith",
        "address1": "address1",
        "address2": "address2",
        "address3": "address3",
        "postalCode": "postCode",
        "city": "Reading",
        "state": "Berkshire",
        "countryCode": "GB",
        "telephoneNumber": "02079460761"
    },
    "shopperLanguageCode": "en",
    "shopperEmailAddress": "email address",
    "shopperIpAddress": "195.35.90.111",
    "shopperSessionId": "123",
    "shopperUserAgent": "user agent 1",
    "shopperAcceptHeader": "acceptheader",
    "redirectURL ": "https://www.card-issuer.com/3DSecureAuthentication",
    "oneTime3DsToken": "value of PaReq",
    "threeDSResponseCode": "value of PaRes",
    "customerIdentifiers": {
        "key1": "my-value1" ,
        "key2": "my-value2" ,
        "key3": "my-value3" ,
        "key4": "my-value4" ,
        "key5": "my-value5"
    },
    "environment ": "TEST",
    "riskScore ":: {
        "value ": "1"
    },
   "successURL": https://www.eon.com/thankyou
  "cancelURL": "https://www.eon.com/cancel"
  "failureURL": "https://www.eon.com/failedpage"
  "PendingURL": "https://www.eon.com/pending"

    "resultCodes": {
      "avsResultCode": "APPROVED",
      "cvcResultCode": "APPROVED"
    },
    "history ": [
    {
       "modificationDate ": "2014-05-07T09:26:27.658+0000",
       "state ": "SUCCESS",
       "amount": 500,
       "currencyCode": "GBP",
       "currencyCodeExponent": 2
    },
    {
       "modificationDate": "2014-05-11T11:56:45.658+0000",
       "state": "SETTLED",
       "amount": 500,
       "currencyCode": "GBP",
       "currencyCodeExponent": 2,
       "netAmount": 490,
       "commission": 10,
       "settlementCurrency": "GBP",
       "settlementCurrencyExponent": 2
    },
     ],
    "disputes":[
    {
       "id":"documentId",
       "documentName":"document1.txt",
       "creationDate":"2015-05-06T14:14:03.684+0000"
    }

{
    "httpStatusCode":400,
    "customCode":"BAD_REQUEST",
    "message":"Some request parameters are invalid",
    "description":"Bad request, please check your request",
    "errorHelpUrl":null,
    "originalRequest":{... original request json object ...}
}
    ]
}
