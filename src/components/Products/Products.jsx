// import React from "react"
// import { graphql, StaticQuery } from "gatsby"

// export default function Products(props) {
//     return (
//         <StaticQuery
//         query={graphql`
//             query ProductPrices {
//                 prices: allStripePrice(
//                     filter: { active: { eq: true }}
//                     sort: { fields: [unit_amount] }
//                 ) {
//                     edges {
//                         node {
//                             id
//                             active
//                             currenty
//                             unit_amount
//                             product {
//                                 id
//                                 name
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={({prices}) => {
//             {prices.edges.map(({node: price}) (
//                 <p key={price.id}>{price.product.name}</p>
//             ))}
//         }}/>
//     )
// }
