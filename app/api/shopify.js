
const SHOPIFY_URL = "https://client-shop.myshopify.com/api/2025-01/graphql.json";
const STOREFRONT_ACCESS_TOKEN = "shpat_abc123xyz456";

export async function shopifyQuery(query, variables = {}) {
  const response = await fetch(SHOPIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  if (json.errors) {
    console.error("Shopify errors:", json.errors);
    throw new Error(json.errors[0].message);
  }
  return json.data;
}

export async function getProducts(limit = 18) {
  const query = `
    {
      products(first: ${limit}) {
        edges {
          node {
            id
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const data = await shopifyQuery(query);
  return data.products.edges.map(edge => edge.node);
}
