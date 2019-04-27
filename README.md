
`mercury-parser-api-gcf` is a reïmplementation of the [Mercury Parser API][api]
for Google Cloud Function instead of AWS Lambda, without the confusing-to-me
[serverless][sls] layer. Unlike the full Mercury Parser API implementation,
this only includes the parser endpoint, which is mounted as `/mercuryParser`.

[api]: https://github.com/postlight/mercury-parser-api
[sls]: https://serverless.com/framework/docs/

This function assumes you want to hide the API behind a static API key that is
determined at function deploy time. To install, you'll need `gcloud` CLI that
has access to the GCP project under which you want the function to be deployed.

1. Clone this repository locally.

2. Create a new `secrets.yaml` file in the current directory containing:

```
MASTER_MERCURY_API_KEY: 'TheKey'
```

where `TheKey` may be any string that will be your API key. The API key would
need to be passed in as the `X-Api-Key` HTTP header in all requests against the
function.

3. Run `make deploy`.
