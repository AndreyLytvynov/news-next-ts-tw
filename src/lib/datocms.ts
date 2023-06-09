import { GraphQLClient } from "graphql-request";

interface RequestParams {
  query: string;
  variables: Record<string, any>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: RequestParams) {
  const headers: Record<string, string> = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}
